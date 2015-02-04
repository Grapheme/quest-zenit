<?php
/**
 * @version 2.0 13.10.2014
 *
 * Уведомления об изменении статуса заказа
 *
 * ВНИМАНИЕ!
 * При использовании класса Mixplat в личном кабинете в настройках проекта должен быть выбран метод уведомлений POST!
 */

include 'config.php';
include '../lib/Mixplat/Mixplat.php';

$mixplat = new Mixplat($serviceId, $secretKey, $isTestMode, $logDirectory);

$result = $mixplat->handleStatus();

if ( $result->isSignCorrect() )
{
	// Подпись корректная
	// Данные запроса находятся в $result->getData()

	/* ... */

	// Отправляем ответ об успешной обработке
	$mixplat->sendOk();
}

else
{
	// Подпись некорректная

	die('Некорректная подпись запроса');
}