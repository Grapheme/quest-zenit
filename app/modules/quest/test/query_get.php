<?php
/**
 * @version 2.0 13.10.2014
 *
 * mc.get Запрос статуса заказа (см. http://mixplat.ru/developers/api)
 * Используется если нет возможности сделать URL для уведомлений
 */ 

include 'config.php';
include '../lib/Mixplat/Mixplat.php';

$mixplat = new Mixplat($serviceId, $secretKey, $isTestMode, $logDirectory);


// По order_id
$result = $mixplat->queryGet('541b10ea4443ae05e6001957');

// По merchant_order_id
//$result = $mixplat->queryGet(null,'123');

if ( $result->isSuccess() )
{
	echo "<pre>\r\n";

	echo "Успешный вызов!\r\n";
	echo "Данные ответа:\r\n\r\n";
	var_dump($result->getData());
}

else
{
	echo "<pre>\r\n";

	echo "Ошибка!\r\n";
	echo "Сообщение: " . $result->getError() . "\r\n";
	echo "Код: " . $result->getErrorCode();
}
