<?php
/**
 * @version 2.0 13.10.2014
 *
 * mc.init Создание заказа (см. http://mixplat.ru/developers/api)
 */

include 'config.php';
include '../lib/Mixplat/Mixplat.php';

$mixplat = new Mixplat($serviceId, $secretKey, $isTestMode, $logDirectory);

$result = $mixplat->queryInit('79031234567', 'Тестовый платёж', '100.0', 'RUR', null, 'Спасибо за покупку!');

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
