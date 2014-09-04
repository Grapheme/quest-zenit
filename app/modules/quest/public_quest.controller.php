<?php

class PublicQuestController extends BaseController {

    public static $name = 'quest_public';
    public static $group = 'quest';

    /****************************************************************************/

    ## Routing rules of module
    public static function returnRoutes($prefix = null) {

        Route::group(array('before' => '', 'prefix' => 'quest'), function() {
            Route::get('/do', array('as' => 'do', 'uses' => __CLASS__.'@getFormDengiOnline'));
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

        return View::make(Helper::layout('do_form'), compact('room'));
    }

}


