<?php

return array(

    'fields' => function(){

        return array(

            'short' => array(
                'title' => 'Краткое описание',
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
            'current_amount' => array(
                'title' => 'Собранно на данный момент',
                'type' => 'text',
            ),
            'count_members' => array(
                'title' => 'Количество участников',
                'type' => 'text',
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
            'photo' => array(
                'title' => 'Фото',
                'type' => 'image',
            ),

            array('content' => '<hr/>'),

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

            array('content' => '<hr/>'),

            'description' => array(
                'title' => 'Полное описание',
                'type' => 'textarea_redactor',
            ),

        );
    },


);
