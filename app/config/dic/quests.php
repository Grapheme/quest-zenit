<?php

return array(

    'fields' => function(){

        return array(

            'short' => array(
                'title' => 'Краткое описание',
                'type' => 'textarea',
            ),

            'description' => array(
                'title' => 'Полное описание',
                'type' => 'textarea_redactor',
            ),

            'date_start' => array(
                'title' => 'Дата начала сбора',
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
                        return $value ? @date('d.m.Y', strtotime($value)) : $value;
                    },
            ),
            'date_stop' => array(
                'title' => 'Дата окончания сбора',
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
                        return $value ? @date('d.m.Y', strtotime($value)) : $value;
                    },
            ),
            'date_quest' => array(
                'title' => 'Дата проведения квеста',
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
                        return $value ? @date('d.m.Y', strtotime($value)) : $value;
                    },
            ),

            'target_amount' => array(
                'title' => 'Целевая сумма сбора',
                'type' => 'text',
            ),

            'photo_id' => array(
                'title' => 'Фоновое изображение',
                'type' => 'image',
            ),

            array('content' => '<hr/>'),

            'current_amount' => array(
                'title' => 'Собранно на данный момент',
                'type' => 'text',
                'others' => array(
                    'disabled' => 'disabled',
                ),
            ),
            'count_members' => array(
                'title' => 'Количество участников',
                'type' => 'text',
                'others' => array(
                    'disabled' => 'disabled',
                ),
            ),

            array('content' => '<hr/>'),

            'link_to_file_print' => array(
                'title' => 'Файл принта',
                'type' => 'upload',
                'accept' => '*', # .exe,image/*,video/*,audio/*
                'label_class' => 'input-file',
                'handler' => function($value, $element = false) {
                        if (@is_object($element) && @is_array($value)) {
                            $value['module'] = 'dicval';
                            $value['unit_id'] = $element->id;
                        }
                        return ExtForm::process('upload', $value);
                    },
            ),

            array('content' => '<hr/>'),

            'link_to_buy_shirt' => array(
                'title' => 'УРЛ для покупки футболки',
                'type' => 'text',
                'others' => array(
                    'placeholder' => 'http://'
                ),
            ),

            array('content' => '<hr/>'),

            /*
            'video' => array(
                'title' => 'Видео',
                'type' => 'video',
                'handler' => function($value, $element = false) {
                        if (@is_object($element) && @is_array($value)) {
                            $value['module'] = 'dicval';
                            $value['unit_id'] = $element->id;
                        }
                        return ExtForm::process('video', $value);
                    },
            ),
            */

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

            'video' => array(
                'title' => 'Видеозаписи',
                'type' => 'textarea',
                'first_note' => 'По одному на строку. Ссылка на видео из YouTube. Например:<br/><u>http://www.youtube.com/watch?v=M2-hDrBIlOo</u>',
            ),

        );
    },


    /**
     * Если данная функция объявлена, то ее вывод заменит вторую строку в списке записей словаря
     */
    'second_line_modifier' => function($line, $dic, $dicval) {

        $return = '';

        if ($dicval->date_start && $dicval->date_stop)
            $return .= '
                <span class="margin-right-10"><i class="fa fa-clock-o"></i> ' . Carbon\Carbon::createFromFormat('Y-m-d', $dicval->date_start)->format('d.m.Y') . ' - ' . Carbon\Carbon::createFromFormat('Y-m-d', $dicval->date_stop)->format('d.m.Y') . '</span>';

        $return .= '
            <span class="margin-right-10"><i class="fa fa-money"></i> ' . (int)$dicval->current_amount . ' из ' . (int)$dicval->target_amount . '</span>
            <span class="margin-right-10"><i class="fa fa-users"></i> ' . (int)$dicval->count_members . '</span>
            ';
        return $return;
    },

);
