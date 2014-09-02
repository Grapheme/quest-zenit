<?php
/**
 * С помощью данного конфига можно добавлять собственные поля к объектам DicVal.
 * Для каждого словаря (Dic) можно задать индивидуальный набор полей (ключ массива fields).
 * Набор полей для словаря определяется по его системному имени (slug).
 *
 * Для каждого словаря можно определить набор "постоянных" полей (general)
 * и полей для мультиязычных версий записи (i18n).
 * Первые будут доступны всегда, вторые - только если сайт имеет больше чем 1 язык.
 *
 * Каждое поле представлено в наборе именем на форме (ключ массива) и набором свойств (поля массива по ключу).
 * Обязательно должен быть определен тип поля (type) и заголовок (title).
 * Также можно задать следующие свойства:
 * - default - значение поля по-умолчанию
 * - others - набор дополнительных произвольных свойств элемента, таких как class, style, placeholder и т.д.
 * - handler - функция-замыкание, вызывается для обработки значения поля после получения ИЗ формы, перед записью в БД
 * - value_modifier - функция-замыкание, вызывается для обработки значения поля после получения значения из БД, перед выводом В форму
 * - after_save_js - JS-код, который будет выполнен после сохранения страницы
 * - content - содержимое, которое будет выведено на экран, вместо генерации кода элемента формы
 *
 * Некоторые типы полей могут иметь свои собственные уникальные свойства, например: значения для выбора в поле select; название группы для radio (а может обойдемся name?) и т.д.
 *
 * [!] Вывод полей на форму происходит с помощью /app/lib/Helper.php -> Helper::formField();
 *
 * На данный момент доступны следующие поля:
 * - text
 * - textarea
 * - textarea_redactor (доп. JS)
 * - date (не требует доп. JS, работает для SmartAdmin из коробки, нужны handler и value_modifier для обработки)
 * - image (использует ExtForm::image() + доп. JS)
 * - gallery (использует ExtForm::gallery() + доп. JS, нужен handler для обработки)
 *
 * Типы полей, запланированных к разработке:
 * - file
 * - video
 * - file-group
 * - video-group
 * - select
 * - checkbox
 * - radio
 *
 * Также в планах - возможность активировать SEO-модуль для каждого словаря по отдельности (ключ массива seo) и обрабатывать его.
 *
 * [!] Для визуального разделения можно использовать следующий элемент массива: array('content' => '<hr/>'),
 *
 * @author Zelensky Alexander
 *
 */
return array(

    'fields' => array(

        'quests' => array(

            'general' => array(

                'short' => array(
                    'title' => 'Краткое описание',
                    'type' => 'textarea_redactor',
                    'default' => '',
                ),

                'date_start' => array(
                    'title' => 'Дата начала сбора',
                    'type' => 'date',
                    'default' => '',
                    'others' => array(
                        'class' => 'text-center',
                        'style' => 'width: 221px',
                        'placeholder' => 'Нажмите для выбора'
                    ),
                    'handler' => function($value) {
                            return $value ? @date('Y-m-d', strtotime($value)) : $value;
                        },
                    'value_modifier' => function($value) {
                            return $value ? @date('d.m.Y', strtotime($value)) : $value;
                        },
                ),
                'date_stop' => array(
                    'title' => 'Дата окончания сбора',
                    'type' => 'date',
                    'default' => '',
                    'others' => array(
                        'class' => 'text-center',
                        'style' => 'width: 221px',
                        'placeholder' => 'Нажмите для выбора'
                    ),
                    'handler' => function($value) {
                            return $value ? @date('Y-m-d', strtotime($value)) : $value;
                        },
                    'value_modifier' => function($value) {
                            return $value ? @date('d.m.Y', strtotime($value)) : $value;
                        },
                ),
                'date_quest' => array(
                    'title' => 'Дата проведения квеста',
                    'type' => 'date',
                    'default' => '',
                    'others' => array(
                        'class' => 'text-center',
                        'style' => 'width: 221px',
                        'placeholder' => 'Нажмите для выбора'
                    ),
                    'handler' => function($value) {
                            return $value ? @date('Y-m-d', strtotime($value)) : $value;
                        },
                    'value_modifier' => function($value) {
                            return $value ? @date('d.m.Y', strtotime($value)) : $value;
                        },
                ),

                'target_amount' => array(
                    'title' => 'Целевая сумма сбора',
                    'type' => 'text',
                    'default' => '',
                ),
                'current_amount' => array(
                    'title' => 'Собранно на данный момент',
                    'type' => 'text',
                    'default' => '',
                ),
                'count_members' => array(
                    'title' => 'Количество участников',
                    'type' => 'text',
                    'default' => '',
                ),

                array('content' => '<hr/>'),

                'link_to_file_print' => array(
                    'title' => 'Ссылка на файл принта',
                    'type' => 'upload',
                    'accept' => '*', # .exe,image/*,video/*,audio/*
                    'label_class' => 'input-file',
                    'default' => '',
                    'handler' => function($value) {
                            return ExtForm::process('upload', $value);
                        },
                    'others' => array(
                        'class' => 'file_upload'
                    ),
                    /*
                    'value_modifier' => function($value) {
                            return $value;
                            #return $value ? @date('d.m.Y', strtotime($value)) : $value;
                        },
                    */
                    'after_save_js' => "
                            //alert('GOOD SAVE UPLOAD!');
                            //$('input[type=file].file_upload').each(function(){
                            //    console.log($(this));
                            //});
                            //console.log($('input[type=hidden][name=redirect]').val());
                            if (!$('input[type=hidden][name=redirect]').val())
                                location.href = location.href;
                        ",
                ),
                'link_to_buy_shirt' => array(
                    'title' => 'УРЛ для покупки футболки',
                    'type' => 'text',
                    'default' => '',
                    'others' => array(
                        'placeholder' => 'http://'
                    ),
                ),
                'photo' => array(
                    'title' => 'Фото',
                    'type' => 'image',
                ),
                'video' => array(
                    'title' => 'Видео',
                    'type' => 'video',
                ),

                'description' => array(
                    'title' => 'Полное описание',
                    'type' => 'textarea_redactor',
                    'default' => '',
                ),

            ),
        ),

        /*
        'room_type' => array(

            'general' => array(

            ),

            'i18n' => array(
                'price' => array(
                    'title' => 'Цена',
                    'type' => 'text',
                    'default' => '',
                    'others' => array(
                        #'placeholder' => 'Укажите цену'
                    ),
                ),
                'description' => array(
                    'title' => 'Описание',
                    'type' => 'textarea_redactor',
                    'default' => '',
                    'others' => array(
                        #'placeholder' => 'Укажите описание'
                    ),
                ),
                'image' => array(
                    'title' => 'Основное изображение',
                    'type' => 'image',
                ),
                'gallery' => array(
                    'title' => 'Галерея',
                    'type' => 'gallery',
                    'handler' => function($array) {
                            #Helper::d('Gallery handler!');
                            #Helper::dd($array);
                            return ExtForm::process('gallery', array(
                                'module'  => 'dicval_meta',
                                'unit_id' => '[unknown] - single',
                                'gallery' => $array,
                                'single'  => true,
                            ));
                        }
                ),
            ),

        ),
        */

    ),

    'seo' => array(
        'number_type' => 0,
    ),
);
