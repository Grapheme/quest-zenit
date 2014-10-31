<?php

class PublicQuestController extends BaseController {

    public static $name = 'quest_public';
    public static $group = 'quest';

    /****************************************************************************/

    ## Routing rules of module
    public static function returnRoutes($prefix = null) {

        Route::group(array('before' => '', 'prefix' => ''), function() {

            Route::any('/form/do', array('as' => 'do', 'uses' => __CLASS__.'@getFormDengiOnline'));
            Route::post('/payment/add_invoice', array('as' => 'invoice', 'uses' => __CLASS__.'@postAddInvoice'));

            Route::any('/dengionline/success', array('as' => 'dengionline.return_url_success', 'uses' => __CLASS__.'@getSuccessDengiOnline'));
            Route::any('/dengionline/fail', array('as' => 'dengionline.return_url_fail', 'uses' => __CLASS__.'@getFailDengiOnline'));
            Route::any('/dengionline/notification', array('as' => 'dengionline.notification_url', 'uses' => __CLASS__.'@postNotificationDengiOnline'));

            Route::post('/inplat/notification', array('as' => 'inplat.notification_url', 'uses' => __CLASS__.'@postNotificationInplat'));
        });
    }

    ## Shortcodes of module
    public static function returnShortCodes() {
    }

    ## Actions of module (for distribution rights of users)
    public static function returnActions() {
    }

    ## Info about module (now only for admin dashboard & menu)
    public static function returnInfo() {
    }

    ## Menu elements of the module
    public static function returnMenu() {
    }

    /****************************************************************************/

    public function __construct(){
        ##
    }

    public function getFormDengiOnline() {

        return View::make(Helper::layout('do_form'), compact('asd'));
    }

    public function postAddInvoice() {

        #$quest_id = Input::get('quest_id');
        $quest_id = $this->getCurrentQuest();
        $quest_id = is_object($quest_id) ? $quest_id->id : false;

        $nickname = Input::get('nickname');
        #$amount = Input::get('amount');
        $mode_type = Input::get('mode_type');

        #Helper::d(Input::all());

        if (
            !$quest_id
            || !$nickname
            #|| !$amount
            || !$mode_type
        )
            return Redirect::to(URL::previous());


        ## Create new Transaction
        $dicval = DicVal::inject('transactions', array(
            'slug' => NULL,
            'name' => $nickname,
            'fields' => array(
                'quest_id' => $quest_id,
                'payment_amount' => 'unknown',
                'payment_date' => date("Y-m-d H:i:s"),
                'payment_method' => 'dengionline',
                'payment_full' => json_encode(array('paymode' => $mode_type)),
            ),
        ));
        #Helper::ta($dicval->extract(1));
        #Helper::ta(DicVal::where('id', $dicval->id)->with('allfields', 'meta')->first()->extract());

        #die;

        $array = array(
            'project' => Config::get('site.dengionline.project'),
            'nickname' => $nickname,
            #'amount' => $amount,
            'order_id' => $dicval->id,
            'return_url_success' => Config::get('site.dengionline.return_url_success'),
            'return_url_fail' => Config::get('site.dengionline.return_url_fail'),
        );
        $url = Config::get('site.dengionline.url') . '?' . Helper::arrayToAttributes($array);
        return Redirect::to($url);
    }

    public function getSuccessDengiOnline() {
        return 'Платеж успешно проведен.';
    }

    public function getFailDengiOnline() {
        return 'Не удалось совершить платеж.';
    }

    public function postNotificationDengiOnline() {

        ## Request from DengiOnline
        $input = Input::all();
        $question = $input;
        $secretKey = Config::get('site.dengionline.secret');

        file_put_contents(storage_path('dengionline_' . time() . '_' . rand(9999, 99999) . '.txt'), json_encode($input));

        ## Check Order ID
        $order_id = @$question['orderid'];

        ## DEBUG ONLY!!
        if (is_numeric($order_id) && (int)$order_id === 0 && FALSE) {

            ## Find the current quest ID
            $quest_id = 0;

            $dicval = DicVal::inject('transactions', array(
                'slug' => NULL,
                'name' => @$input['userid'],
                'fields' => array(
                    'quest_id' => $quest_id,
                    'payment_status' => 1,
                    'payment_amount' => @$input['amount'],
                    'payment_date' => @$input['ps_paid_date'],
                    'payment_method' => 'dengionline',
                    'payment_full' => json_encode($input),
                ),
            ));

            $this->sendResponse('YES', 'Платеж успешно совершен.');
        }


        if (!$order_id)
            $this->sendResponse('NO', 'Не указан номер заказа.');

        ## Find transaction by Order ID
        $dicval = DicVal::where('id', $order_id)->with('allfields', 'dic')->first()->extract(1);

        ## Check transaction
        if (
            !@is_object($dicval) || !@is_object($dicval->dic) || $dicval->dic->slug != 'transactions'
            /*** ...SOME VERIFICATIONS... ***/
        )
            $this->sendResponse('NO', 'Идентификатор платежа не найден.');

        $projectHash = md5($question['amount'].$question['userid'].$question['paymentid'].$secretKey);
        if($projectHash != $question['key']) {
            $this->sendResponse('NO', 'Контрольная подпись запроса неверна.');
        }

        /*
        if(floatval($question['amount']) == 0 && intval($question['paymentid']) == 0){
            //Это запрос на проверку идентификатора пользователя или заказа
            if(checkUser($_POST['userid'])){
                sendResponse('YES', 'Идентификатор существует');
            }
            else{
                sendResponse('NO', 'Идентификатор не найден');
            }
        }
        */

        if(
            filter_var($question['amount'], FILTER_VALIDATE_FLOAT)
            && filter_var($question['paymentid'], FILTER_VALIDATE_INT)
            && floatval($question['amount']) > 0
            && intval($question['paymentid']) > 0
        ){

            ## Get payment status
            $dicval_field = DicFieldVal::firstOrNew(array(
                'dicval_id' => $dicval->id,
                'key' => 'payment_status',
            ));

            ## Check status of payment
            if ($dicval_field->value == '1')
                $this->sendResponse('YES', 'Платеж был успешно выполнен ранее.');



            ## Get payment amount
            $dicval_field_amount = DicFieldVal::firstOrNew(array(
                'dicval_id' => $dicval->id,
                'key' => 'amount',
            ));
            ## Save payment amount
            $dicval_field_amount->value = $question['amount'];
            $dicval_field_amount->save();



            ## Mark payment as finished
            $dicval_field->value = '1';
            $dicval_field->save();

            ## Save full request to DB
            $dicval_field = DicFieldVal::firstOrNew(array(
                'dicval_id' => $dicval->id,
                'key' => 'payment_full',
            ));
            $dicval_field->value = json_encode($question);
            $dicval_field->save();

            $this->sendResponse('YES', 'Платеж успешно совершен.');
        }

    }

    public function sendResponse($status, $message = ''){
        $response = '<?xml version="1.0" encoding="UTF-8"?>'."\n";
        $response .= '<result>'."\n";
        $response .= '<code>'.$status.'</code>'."\n";
        $response .= '<comment>'.$message.'</comment>'."\n";
        $response .= '</result>';
        die($response);
    }


    public function postNotificationInplat() {

        $input = Input::all();

        file_put_contents(storage_path('inplat_' . time() . '_' . rand(9999, 99999) . '.txt'), json_encode($input));

        ## Create new Transaction
        $dicval = DicVal::inject('transactions', array(
            'slug' => NULL,
            'name' => 'INPLAT TEST PAYMENT',
            'fields' => array(
                'quest_id' => '777',
                'payment_amount' => '777',
                'payment_date' => date("Y-m-d H:i:s"),
                'payment_method' => 'inplat',
                'payment_full' => json_encode($input),
            ),
        ));

        return '1';
    }


    private function getCurrentQuest() {

        $dicval = Dic::valuesBySlug('quests', function($query) {

            /**
             * Фильтр значений (DicVal) по его доп. полю (DicFieldVal)
             * SOLUTION_id
             */
            $tbl_dicval = (new DicVal())->getTable();
            $tbl_dic_field_val = (new DicFieldVal())->getTable();

            $query->select($tbl_dicval . '.*');

            $rand_tbl_alias = md5(time() . rand(999999, 9999999));
            $query->join($tbl_dic_field_val . ' AS ' . $rand_tbl_alias, $rand_tbl_alias . '.dicval_id', '=', $tbl_dicval . '.id')
                ->where($rand_tbl_alias . '.key', '=', 'date_start')
                ->where($rand_tbl_alias . '.value', '<=', date('Y-m-d'));

            $rand_tbl_alias = md5(time() . rand(999999, 9999999));
            $query->join($tbl_dic_field_val . ' AS ' . $rand_tbl_alias, $rand_tbl_alias . '.dicval_id', '=', $tbl_dicval . '.id')
                ->where($rand_tbl_alias . '.key', '=', 'date_stop')
                ->where($rand_tbl_alias . '.value', '>=', date('Y-m-d'));

            $query->take(1);
        });
        $dicval = $dicval[0]
            ->extract(1)
        ;

        #Helper::tad($dicval);
        #Helper::smartQueries(1);

        return $dicval;
    }

}


