<?php

class PublicQuestController extends BaseController {

    public static $name = 'quest_public';
    public static $group = 'quest';

    /****************************************************************************/

    ## Routing rules of module
    public static function returnRoutes($prefix = null) {

        Route::group(array('before' => '', 'prefix' => ''), function() {

            Route::any('/', array('as' => 'main_page', 'uses' => __CLASS__.'@getMainPage'));

            Route::any('/form/do', array('as' => 'do', 'uses' => __CLASS__.'@getFormDengiOnline'));
            Route::post('/payment/add_invoice', array('as' => 'invoice', 'uses' => __CLASS__.'@postAddInvoice'));

            Route::any('/#do_success', array('as' => 'dengionline.return_url_success', 'uses' => __CLASS__.'@getSuccessDengiOnline'));
            Route::any('/#do_fail', array('as' => 'dengionline.return_url_fail', 'uses' => __CLASS__.'@getFailDengiOnline'));
            Route::any('/dengionline/notification', array('as' => 'dengionline.notification_url', 'uses' => __CLASS__.'@postNotificationDengiOnline'));

            Route::any('/inplat/success', array('as' => 'inplat.return_url_success', 'uses' => __CLASS__.'@getSuccessInplat'));
            Route::any('/inplat/fail', array('as' => 'inplat.return_url_fail', 'uses' => __CLASS__.'@getFailInplat'));
            Route::any('/inplat/notification', array('as' => 'inplat.notification_url', 'uses' => __CLASS__.'@postNotificationInplat'));
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


    public function getMainPage() {

        $data = array();

        $classes = array(
            'lightblue',
            'torquous',
            'red',
            'orange',
            'blue',
            'green',
        );

        $quest = $this->getCurrentQuest();
        #Helper::tad($quest);




        #if (is_object($quest)) {

            $transactions = Dic::valuesBySlug('transactions', function($query) use ($quest) {
                $query->filter_by_field('quest_id', '=', $quest->id);
                #$query->filter_by_field('payment_date', '=', '2014-09-04 15:05:18');
            });
            $transactions = DicVal::extracts($transactions, 1);
            #Helper::tad($transactions);

            $count_members = count($transactions);
            $amount = 0;
            foreach ($transactions as $transaction) {

                $transaction->payment_full_decoded = json_decode($transaction->payment_full, 1);
                $amount += $transaction->payment_amount;

                $payer_name = trim($transaction->name);

                if (!$payer_name)
                    $payer_name = @$transaction->payment_full_decoded['userid'];

                if (!$payer_name && $transaction->payment_full != '') {
                    preg_match('~\"userid\"\:\".*?\"~is', $transaction->payment_full, $matches);
                    $payer_name = @$matches[1];
                }

                $payer_name = preg_replace('~(79[\d][\d][\d])[\d][\d][\d]([\d][\d][\d])~is', '\1***\2', $payer_name);

                $data['players'][] = array(
                    'cash' => (int)$transaction->payment_amount,
                    'class' => (string)$classes[array_rand($classes)],
                    'date' => $transaction->payment_date ? (string)(new \Carbon\Carbon())->createFromFormat('Y-m-d H:i:s', $transaction->payment_date)->format('d.m.Y') : '',
                    'name' => (string)$payer_name,
                    'tid' => $transaction->id,
                );
            }
        #}

        $finished_quests = Dic::valuesBySlug('quests', function($query) use ($quest) {
            #$query->filter_by_field('date_stop', '<=', date('Y-m-d H:i:s', time()));
            $query->filter_by_field('date_stop', '<=', $quest->date_start ?: date('Y-m-d'), 1);
            $query->order_by_field('date_stop', 'DESC');
        });
        $finished_quests = DicVal::extracts($finished_quests, 1);

        #Helper::smartQueries(1);
        #Helper::tad($finished_quests);

        $images_ids = array();
        $photos = array();
        foreach ($finished_quests as $finished_quest) {
            $photo_id = $finished_quest->photo_id;
            if ($photo_id)
                $images_ids[] = $photo_id;
        }
        if (count($images_ids)) {
            $photos = Photo::whereIn('id', $images_ids)->get();
            $photos = Dic::modifyKeys($photos, 'id');
        }
        #Helper::tad($photos);

        $galleries_ids = array();
        $galleries = array();
        foreach ($finished_quests as $finished_quest) {
            $gallery_id = $finished_quest->gallery_id;
            if ($gallery_id)
                $galleries_ids[] = $gallery_id;
        }
        if (count($galleries_ids)) {
            $galleries = Gallery::whereIn('id', $galleries_ids)->with('photos')->get();
            $galleries = Dic::modifyKeys($galleries, 'id');
        }
        #Helper::tad($galleries);

        $gall = array();
        foreach ($galleries as $gallery) {
            $gal = array();

            foreach ($gallery->photos as $photo) {
                $gal[] = array(
                    'src' => $photo->full(),
                );
            }
            $gall[$gallery->id] = $gal;
        }
        #Helper::tad($gall);


        $f = 0;
        foreach ($finished_quests as $finished_quest) {
            ++$f;

            $data['quests'][] = array(
                'title' => $finished_quest->name,
                'image' => isset($photos[$finished_quest->photo_id]) && is_object($photos[$finished_quest->photo_id]) ? $photos[$finished_quest->photo_id]->full() : '',
                'price' => (string)$finished_quest->target_amount,
                'description' => $finished_quest->short,
                'link' => (string)$f,
            );

            #Helper::dd($finished_quest->date_start);

            $videos = array();
            if (trim($finished_quest->video) != '') {
                $lines = explode("\n", $finished_quest->video);
                foreach ($lines as $line) {
                    $line = trim($line);
                    if (!$line)
                        continue;
                    /*
                    $videos[] = array(
                        'url' => $line
                    );
                    */
                    $videos[] = $line;
                }
            }

            $data['fullquest'][] = array(
                'id' => $f,
                'title' => (string)$finished_quest->name,
                'description' => $finished_quest->short,
                'start-date' => $finished_quest->date_start ? (string)(new \Carbon\Carbon())->createFromFormat('Y-m-d', $finished_quest->date_start)->format('d.m.Y') : '',
                'end-date' => $finished_quest->date_stop ? (string)(new \Carbon\Carbon())->createFromFormat('Y-m-d', $finished_quest->date_stop)->format('d.m.Y') : '',
                'total' => (string)$finished_quest->current_amount,
                'destination' => (string)$finished_quest->target_amount,
                'action-date' => $finished_quest->date_quest ? (string)(new \Carbon\Carbon())->createFromFormat('Y-m-d', $finished_quest->date_quest)->format('d.m.Y') : '',
                'gamers' => (string)"234",
                'questImage' => isset($photos[$finished_quest->photo_id]) && is_object($photos[$finished_quest->photo_id]) ? $photos[$finished_quest->photo_id]->full() : '',
                'photos' => isset($gall[$finished_quest->gallery_id]) ? $gall[$finished_quest->gallery_id] : NULL,
                'videos' => $videos,
                'fulldescription' => (string)$finished_quest->description,
            );
        }


        #Helper::dd($data);


        $news = Dic::valuesBySlug('news', function($query){
            $query->filter_by_field('published_at', '<=', date('Y-m-d H:i:s'));
            $query->order_by_field('published_at', 'DESC');
            $query->orderBy('id', 'DESC');
        });
        #$news->load((new DicVal)->customHasOne('Photo', 'image_id', 'id'));
        $news = DicVal::extracts($news, 1);

        $news = Dic::custom_load_hasOne($news, 'image', ['Photo', 'image_id', 'id']);
        $news = Dic::custom_load_hasOne($news, 'gallery', ['Gallery', 'gallery_id', 'id'], function($query){
            $query->with('photos');
        });

        #Helper::dd($news);
        #Helper::tad($news);

        if (Input::get('debug') == '1') {
            Helper::ta($quest);
            Helper::ta($count_members);
            Helper::ta($amount);
            Helper::ta($finished_quests);
            Helper::ta($data);
            Helper::ta($news);
            Helper::ta($transactions);
            die;
        }

        return View::make(Helper::layout('index'), compact('quest', 'count_members', 'amount', 'finished_quests', 'data', 'news'));
    }

    public function postAddInvoice() {

        #$quest_id = Input::get('quest_id');
        $quest_id = $this->getCurrentQuest();
        #Helper::tad($quest_id);
        $quest_id = is_object($quest_id) ? $quest_id->id : false;

        $nickname = Input::get('nickname');
        #$amount = Input::get('amount');
        $mode_type = Input::get('mode_type');

        #Helper::d(Input::all());

        if (
            !$quest_id
            #|| !$nickname
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
        $url = Config::get('site.dengionline.url') . '?' . Helper::arrayToUrlAttributes($array);
        #Helper::dd($url);
        return Redirect($url, 302);
    }

    public function getSuccessDengiOnline() {
        return 'Платеж успешно проведен.';
    }

    public function getFailDengiOnline() {
        return 'Не удалось совершить платеж.';
    }

    public function getSuccessInplat() {
        return 'Платеж успешно проведен.';
    }

    public function getFailInplat() {
        return 'Не удалось совершить платеж.';
    }

    public function postNotificationDengiOnline() {

        ## Request from DengiOnline
        $input = Input::all();
        $question = $input;
        $secretKey = Config::get('site.dengionline.secret');

        ## Get Order ID
        $order_id = @$question['orderid'];

        file_put_contents(storage_path('dengionline_' . (int)$order_id . '_' . time() . '_' . rand(9999, 99999) . '.txt'), json_encode($input));

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
                'key' => 'payment_amount',
            ));
            ## Save payment amount
            $dicval_field_amount->value = @$question['amount'];
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



            $quest = $this->getCurrentQuest();

            /**
             * Обновляем общую сумму сбора и кол-во участников-платежей
             */
            if ($quest->id) {

                $quest_dicval_field = DicFieldVal::firstOrCreate(['dicval_id' => $quest->id, 'key' => 'current_amount']);
                $quest_dicval_field->value += @$input['params']['sum'];
                $quest_dicval_field->save();
                unset($quest_dicval_field);

                $quest_dicval_field = DicFieldVal::firstOrCreate(['dicval_id' => $quest->id, 'key' => 'count_members']);
                $quest_dicval_field->value++;
                $quest_dicval_field->save();
                unset($quest_dicval_field);
            }


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

    /**
     * Проведение платежа через InPlat
     *
     * @return string
     */
    public function postNotificationInplat() {

        $input = Input::all();

        file_put_contents(storage_path('inplat_' . time() . '_' . rand(9999, 99999) . '.txt'), json_encode($input));

        $quest = $this->getCurrentQuest();
        #Helper::tad($quest);
        $quest_id = is_object($quest) ? $quest_id->id : false;

        if (!count($input) || !@$input['payment_id'])
            return json_encode(array(
                'code' => '1',
                'text' => 'Ошибка проведения платежа - неверный идентификатор',
                'redirect_url' => URL::route('inplat.return_url_fail'),
            ));

        $dicval_exists = DicVal::where('slug', $input['payment_id'])->first();

        if (!$dicval_exists) {

            ## Create new Transaction
            $dicval = DicVal::inject('transactions', array(
                'slug' => $input['payment_id'],
                'name' => @$input['params']['msisdn'],
                'fields' => array(
                    'quest_id' => $quest_id,
                    'payment_status' => (int)(@$input['status'] == 'auth'),
                    'payment_amount' => @$input['params']['sum'],
                    'payment_date' => date("Y-m-d H:i:s"),
                    'payment_method' => 'inplat',
                    'payment_full' => json_encode($input),
                ),
            ));

            /**
             * Обновляем общую сумму сбора и кол-во участников-платежей
             */
            if ($quest->id) {

                $quest_dicval_field = DicFieldVal::firstOrCreate(['dicval_id' => $quest->id, 'key' => 'current_amount']);
                $quest_dicval_field->value += @$input['params']['sum'];
                $quest_dicval_field->save();
                unset($quest_dicval_field);

                $quest_dicval_field = DicFieldVal::firstOrCreate(['dicval_id' => $quest->id, 'key' => 'count_members']);
                $quest_dicval_field->value++;
                $quest_dicval_field->save();
                unset($quest_dicval_field);
            }
        }

        return json_encode(array(
            'code' => '0',
            'text' => 'Операция осуществлена.',
            'redirect_url' => URL::route('inplat.return_url_success'),
        ));
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

        #Helper::dd(count($dicval));

        if (!count($dicval))
            $dicval = new DicVal;
        else
            $dicval = $dicval[0]
                ->extract(1)
            ;

        #Helper::tad($dicval);
        #Helper::smartQueries(1);

        $videos = array();
        if (trim($dicval->video) != '') {
            $lines = explode("\n", $dicval->video);
            foreach ($lines as $line) {
                $line = trim($line);
                if (!$line)
                    continue;
                /*
                $videos[] = array(
                    'url' => $line
                );
                */
                $videos[] = $line;
            }
        }
        $dicval->video = $videos;

        return $dicval;
    }

}


function youtubeReplace($text) {

    preg_match_all ("~https?\:\/\/(?:www\.|)youtube\.com[\/a-zA-Z0-9\/\?\&\#\_\-\%\=]*?v\=([\/a-zA-Z0-9\/\_\-\%]*)[\/a-zA-Z0-9\/\?\&\#\_\-\%\=]*~", $text, $result );

    $pos = 0;

    foreach ($result[0] as $index => $val) {
        $text = substr_replace ( $text, $replace = "<iframe width=\"700\" height=\"400\" src=\"//www.youtube.com/embed/" . $result [ 1 ] [ $index ] . "\" frameborder=\"0\" allowfullscreen></iframe>", $pos = strpos ( $text, $val, $pos ), $len = strlen ( $val ) );
        $pos += strlen ( $replace );
    }

    return $text;

}