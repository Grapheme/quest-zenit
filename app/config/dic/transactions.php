<?php

return array(

    'fields' => function() {

        return array(

            'quest_id' => array(
                'title' => 'Квест',
                'type' => 'select',
                'values' => array('Выберите..')+Dic::valuesBySlug('quests')->lists('name', 'id'),
                'others' => array(
                    'disabled',
                ),
            ),
            'payment_status' => array(
                'title' => 'Статус платежа',
                'type' => 'text',
                'others' => array(
                    'disabled',
                ),
            ),
            'payment_amount' => array(
                'title' => 'Сумма платежа',
                'type' => 'text',
                'others' => array(
                    'disabled',
                ),
            ),
            'payment_date' => array(
                'title' => 'Дата платежа',
                'type' => 'text',
                'others' => array(
                    'disabled',
                ),
            ),
            'payment_method' => array(
                'title' => 'Интерфейс платежа',
                'type' => 'text',
                'others' => array(
                    'disabled',
                ),
            ),
            'payment_full' => array(
                'title' => 'Техническая информация о платеже',
                'type' => 'textarea',
                'others' => array(
                    'disabled',
                ),
            ),
        );
    },


    'hooks' => array(

        /**
         * Вызывается в самом начале метода index, после хука before_all
         */
        'before_index' => function ($dic) {
            $quests = Dic::valuesBySlug('quests');
            $quests = Dic::modifyKeys($quests, 'id');
            $quests = Dic::makeLists($quests, false, 'name', 'id');
            Config::set('temp.index_quests', $quests);
        },
    ),


    /**
     * Если данная функция объявлена, то ее вывод заменит вторую строку в списке записей словаря
     */
    'second_line_modifier' => function($line, $dic, $dicval) {
        #Helper::ta($dicval);
        $quests = Config::get('temp.index_quests');
        $dicval->extract(false);

        return '
            <span class="margin-right-10"><i class="fa fa-money"></i> ' . $dicval->payment_amount . '</span>
            <span class="margin-right-10">' . ($dicval->payment_status ? '<i class="fa fa-check"></i> Оплачен' : '<i class="fa fa-refresh"></i> Ожидает оплаты') . '</span>
            <span class="margin-right-10"><i class="fa fa-info-circle"></i> ' . $dicval->payment_method . '</span>
            <span class="margin-right-10"><i class="fa fa-circle-o"></i> ' . @$quests[$dicval->quest_id] . '</span>
            ';
    },


    /**
     * Данная секция перезаписывает права определенных групп пользователей к действиям с текущим словарем
     */
    'group_actions' => array(

        /**
         * Переопределить права доступа для группы Модераторы
         */
        'moderator' => function() {
            return array(
                'dicval_view'   => 1,
                'dicval_create' => 0,
                'dicval_edit'   => 0,
                'dicval_delete' => 0,
            );
        }
    ),

);
