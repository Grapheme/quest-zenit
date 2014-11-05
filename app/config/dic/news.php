<?php

return array(

    'fields' => function () {

        return array();
    },


    'fields_i18n' => function () {

        /**
         * Предзагружаем нужные словари с данными, по системному имени словаря, для дальнейшего использования.
         * Делается это одним SQL-запросом, для снижения нагрузки на сервер БД.
         */
        /*
        $dics_slugs = array(
            'tags',
        );
        $dics = Dic::whereIn('slug', $dics_slugs)->with('values')->get();
        $dics = Dic::modifyKeys($dics, 'slug');
        $lists = Dic::makeLists($dics, 'values', 'name', 'id');
        */
        #Helper::dd($lists);

        return array(
            #/*
            'published_at' => array(
                'title' => 'Дата публикации',
                'type' => 'date',
                'others' => array(
                    'class' => 'text-center',
                    'style' => 'width: 221px',
                    'placeholder' => 'Нажмите для выбора'
                ),
                'handler' => function($value) {
                    return $value ? @date('Y-m-d', strtotime($value)) : $value;
                },
                'value_modifier' => function($value) {
                    return $value ? date('d.m.Y', strtotime($value)) : date('d.m.Y');
                },
            ),
            #*/

            /*
            'preview' => array(
                'title' => 'Анонс',
                'type' => 'textarea_redactor',
                'others' => array(
                    'class' => 'redactor_preview'
                ),
            ),
            #*/

            'content' => array(
                'title' => 'Содержание',
                #'type' => 'textarea_redactor',
                'type' => 'textarea',
                'others' => array(
                    'class' => 'redactor_content'
                ),
                #'first_note' => 'Рекомендуемая ширина изображения: 800px',
            ),

            'source_title' => array(
                'title' => 'Название источника',
                'type' => 'text',
            ),

            'source_url' => array(
                'title' => 'Ссылка на источник',
                'type' => 'text',
            
            ),

            'image_id' => array(
                'title' => 'Изображение',
                'type' => 'image',
                #'first_note' => 'Оптимальный размер: 360x270',
            ),
            /*
            'gallery_id' => array(
                'title' => 'Фотографии',
                'type' => 'gallery',
                'handler' => function($array, $element) {
                    return ExtForm::process('gallery', array(
                        'module'  => 'DicVal',
                        'unit_id' => $element->id,
                        'gallery' => $array,
                        'single'  => true,
                    ));
                }
            ),
            */

            'video_embed' => array(
                'title' => 'Видео (embed-код)',
                'type' => 'textarea',
                #'first_note' => 'Рекомендуемая ширина изображения: 800px',
            ),

            /*
            'tags_ids' => array(
                'title' => 'Теги',
                'type' => 'checkboxes',
                'columns' => 2, ## Количество колонок
                'values' => $lists['tags'],
                'handler' => function ($value, $element) {
                    $value = (array)$value;
                    $element->related_dicvals()->sync($value);
                    return @count($value);
                },
                'value_modifier' => function ($value, $element) {
                    $return = (is_object($element) && $element->id)
                        ? $element->related_dicvals()->get()->lists('name', 'id')
                        : $return = array();
                    return $return;
                },
            )
            #*/
        );
    },


    'menus' => function($dic, $dicval = NULL) {
        $menus = array();
        return $menus;
    },


    'actions' => function($dic, $dicval) {},

    'hooks' => array(

        'before_index_view' => function ($dic, $dicvals) {
            /**
             * Предзагружаем нужные словари
             */
            /*
            $dics = Dic::where('slug', 'actions-types')->first()->values()->get();
            $dics = Dic::modifyKeys($dics,'id');
            Config::set('temp.index_dics', $dics);

            $usersIDs = (array)array_unique(Dic::makeLists($dicvals,false,'user_id'));
            $users = User::whereIn('id',$usersIDs)->get();
            $users = Dic::modifyKeys($users, 'id');
            Config::set('temp.users', $users);
            */
        },

        /**
         * Вызывается в методе postStore, после создания записи
         */
        'after_store' => function ($dic, $dicval) {
        },

    ),

    /*
    'first_line_modifier' => function($line, $dic, $dicval) {
        #$actions_types =  Config::get('temp.index_dics');
        #return @$actions_types[$dicval->action_id]->name.'. '.$dicval->title;
    },
    */

    'second_line_modifier' => function($line, $dic, $dicval) {
        #$users =  Config::get('temp.users');
        #return myDateTime::SwapDotDateWithTime($dicval->created_at);
        #return myDateTime::SwapDotDate($dicval->published_at);
        $carbon = $dicval->published_at ? \Carbon\Carbon::createFromFormat('Y-m-d', $dicval->published_at) : $dicval->created_at;
        return
            (($carbon->timestamp > time()) ? '<span class="txt-color-orangeDark">' : '') .
            $carbon->format('d.m.Y') .
            (($carbon->timestamp > time()) ? '&nbsp; <i class="fa fa-clock-o"></i> &nbsp;' : '') .
            (($carbon->timestamp > time()) ? 'запланированная публикация</span>' : '')
            ;
    },

    'seo' => true,

    /**
     * Собственные правила валидации данной формы.
     * Не забыть про поле name, которое по умолчанию должно быть обязательным!
     */
    'custom_validation' => <<<JS
    var validation_rules = {
		'name': { required: true },
		'fields_i18n[ru][published_at]': { required: true },
	};
	var validation_messages = {
		'name': { required: "Укажите название" },
		'fields_i18n[ru][published_at]': { required: "Выберите дату публикации данной новости" },
	};
JS
);
