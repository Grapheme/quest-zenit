<?php

/**
 * Класс для работы с API Mixplat
 * http://mixplat.ru/developers/api/
 * @version 2.0 13.10.2014
 */

require_once 'Mixplat/QueryResult.php';
require_once 'Mixplat/HandleResult.php';

class Mixplat
{
	const API_BASE_URL = 'https://client.mixplat.ru/api/';

	/**
	 * @var int ID сервиса
	 */

	private $serviceId;

	/**
	 * @var string Секретный ключ
	 */

	private $secretKey;

	/**
	 * @var bool Флаг тестового режима
	 */

	private $isTestMode;

	/**
	 * @var string Директория для логов
	 */

	private $logDirectory;

	/**
	 * @param int $serviceId ID сервиса
	 * @param string $secretKey Секретный ключ сервиса
	 * @param bool $isTestMode Флаг тестового режима
	 * @param string $logDirectory Директория, куда будут складываться логи
	 */

	public function __construct( $serviceId, $secretKey, $isTestMode = false, $logDirectory = null )
	{
		$this->serviceId	= $serviceId;
		$this->secretKey	= $secretKey;
		$this->isTestMode	= $isTestMode;
		$this->logDirectory	= $logDirectory;
	}

	/**
	 * Обработка STATUS уведомления.
	 * Внимание! В настройках проекта в личном кабинете должен быть выбран POST метод уведомления!
	 *
	 * @return Mixplat_HandleResult
	 */

    public function handleStatus()
    {
    	return $this->handle('handle_status');
    }

	/**
	 * Обработка CHECK запроса.
	 * Внимание! В настройках проекта в личном кабинете должен быть выбран POST метод уведомления!
	 *
	 * @return Mixplat_HandleResult
	 */

    public function handleCheck()
    {
		return $this->handle('handle_check');
    }

	/**
	 * Обработка уведомления
	 * Внимание! В настройках проекта в личном кабинете должен быть выбран POST метод уведомления!
	 *
	 * @param string $logTag
	 * @return Mixplat_HandleResult
	 */

	private function handle( $logTag )
	{
		$isSignCorrect =
			isset($_POST['sign'])
			&&
			$_POST['sign'] == $this->calculateSign($_SERVER['REQUEST_URI'], $_POST);

		$this->log($logTag, print_r(array('is_sign_correct' => $isSignCorrect ? 'yes' : 'no', 'data' => $_POST), true));

		if ( $isSignCorrect )
		{
			return new Mixplat_HandleResult(true, $_POST);
		}

		else
		{
			return new Mixplat_HandleResult(false, array());
		}
	}

	/**
	 * Запрос "mc.init"
	 * См. http://mixplat.ru/developers/api
	 *
	 * @param string $phone Номер телефона клиента
	 * @param string $description Описание платежа
	 * @param string $amount Цена услуги
	 * @param string $currency Валюта платежа
	 * @param string $merchantOrderId ID платежа в системе продавца
	 * @param string $successMessage Текст успешного SMS-сообщшения
	 *
	 * @return Mixplat_QueryResult
	 */

	public function queryInit( $phone, $description, $amount, $currency, $merchantOrderId = null, $successMessage = null )
	{
		$parameters = array
		(
			'phone'				=> $phone,
			'description'		=> $description,
			'amount'			=> $amount,
			'currency'			=> $currency
		);

		if ( $merchantOrderId !== null )
		{
			$parameters['merchant_order_id'] = $merchantOrderId;
		}

		if ( $successMessage !== null )
		{
			$parameters['success_message'] = $successMessage;
		}

		return $this->query('mc.init', $parameters);
	}

	/**
	 * Запрос "mc.get"
	 * См. http://mixplat.ru/developers/api
	 *
	 * @param int	$orderId			ID платежа в Mixplat (обязательный, если отсутствует $merchantOrderId)
	 * @param int	$merchantOrderId	ID платежа в системе продавца (обязательный, если отсутствует $orderId)
	 *
	 * @return Mixplat_QueryResult
	 */

	public function queryGet( $orderId = null, $merchantOrderId = null )
	{
		$parameters = array();

		if ( $orderId !== null )
		{
			$parameters['order_id'] = $orderId;
		}

		if ( $merchantOrderId !== null )
		{
			$parameters['merchant_order_id'] = $merchantOrderId;
		}

		return $this->query('mc.get', $parameters);
	}

	/**
	 * Запрос к API
	 *
	 * @param string $method Метод
	 * @param array $additionalParameters Доп. параметры (service_id, date, test, sign передаются автоматически)
	 *
	 * @return Mixplat_QueryResult
	 */

    private function query( $method, $additionalParameters = array() )
    {
		$parameters = $this->buildQueryParameters($method, $additionalParameters);

		$url = self::API_BASE_URL . $method;

		$this->log('query', '--> ' . print_r(array('url' => $url, 'parameters' => $parameters), true));

		$context = stream_context_create
		(
			array
			(
				'http' => array
				(
					'method'  => 'POST',
					'header'  => 'Content-type: application/x-www-form-urlencoded',
					'content' => http_build_query($parameters)
				)
			)
		);

		$response = @file_get_contents($url, false, $context);

		if ( $response !== null )
		{
			$this->log('query', '<-- ' . $response);

			$json = json_decode($response, true);
			if ( $json !== null )
			{
				if ( isset($json['error']) )
				{
					return new Mixplat_QueryResult(false, array(), $json['error']['message'], $json['error']['code']);
				}

				else
				{
					return new Mixplat_QueryResult(true, $json, null, null);
				}
			}

			else
			{
				return new Mixplat_QueryResult(false, array(), 'Некорректный JSON от сервера', null);
			}
		}

		else
		{
			$this->log('query', '<-- Ошибка при выполнении запроса');
			return new Mixplat_QueryResult(false, array(), 'Ошибка при выполнении запроса', null);
		}
	}

	/**
	 * Отправляет ответ об успешной обработке
	 *
	 * @return string
	 */

	public function sendOk()
	{
		header('Content-Type: application/json');
		echo json_encode(array('answer' => 'ok'));
	}

	/**
	 * @return int
	 */

	public function getServiceId()
	{
		return $this->serviceId;
	}

	/**
	 * @param int $_serviceId
	 */

	public function setServiceId( $_serviceId )
	{
		$this->serviceId = $_serviceId;
	}

	/**
	 * @return string
	 */

	public function getSecretKey()
	{
		return $this->secretKey;
	}

	/**
	 * @param string $_secretKey
	 */

	public function setSecretKey( $_secretKey )
	{
		$this->secretKey = $_secretKey;
	}

	/**
	 * @return bool
	 */

	public function isTestMode()
	{
		return $this->isTestMode;
	}

	/**
	 * @param bool $_isTestMode
	 */

	public function setIsTestMode( $_isTestMode )
	{
		$this->isTestMode = $_isTestMode;
	}

	/**
	 * @param string $method
	 * @param array $additionalParameters
	 * @return mixed
	 */

	private function buildQueryParameters( $method, $additionalParameters )
	{
		$result = $additionalParameters;

		$result['service_id'] = $this->serviceId;
		$result['date'] = date('Y-m-d\TH:i:s');
		$result['test'] = $this->isTestMode ? 1 : 0;
		$result['sign'] = $this->calculateSign('/api/' . $method, $result);

		return $result;
	}

	/**
	 * @param string $path
	 * @param array $parameters
	 * @return string
	 */

	private function calculateSign( $path, $parameters )
	{
		unset($parameters['sign']);

		return md5($path . '?' . urldecode(http_build_query($parameters)) . $this->secretKey);
	}

	/**
	 * @param string $tag
	 * @param string $message
	 */

    private function log( $tag, $message )
    {
        if ( $this->logDirectory !== null )
		{
			$string = sprintf("[%s] %s\r\n", date('Y-m-d H:i:s'), $message);

			$h = fopen($this->logDirectory . $tag . '.txt', 'a');
			fwrite($h, $string);
			fclose($h);
		}
    }
}