<?php

class Upload extends BaseModel {

	protected $guarded = array();

	protected $table = 'uploads';

    /*
    ## http://laravel.ru/articles/odd_bod/your-first-model
    protected $fillable = array(
        'slug',
        'template',
        'type_id',
        'publication',
        'published_at'
    );
    */

	public static $rules = array(
		#'news_ver_id' => 'required',
		#'seo_url' => 'alpha_dash',
	);

    /*
    public function metas() {
        return $this->hasMany('NewsMeta', 'news_id', 'id');
    }

    public function meta() {
        return $this->hasOne('NewsMeta', 'news_id', 'id')->where('language', Config::get('app.locale', 'ru'));
    }
    */
}