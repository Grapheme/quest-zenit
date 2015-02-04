<?php

/**
 * Результат обработки запроса
 */

class Mixplat_HandleResult
{
	/**
	 * @var bool
	 */

	private $isSignCorrect;

	/**
	 * @var array
	 */

	private $data;

	/**
	 * @param bool $isSignCorrect
	 * @param array $data
	 */

	public function __construct( $isSignCorrect, $data )
	{
		$this->isSignCorrect	= $isSignCorrect;
		$this->data				= $data;
	}

	/**
	 * Флаг корректности подписи
	 * @return bool
	 */

	public function isSignCorrect()
	{
		return $this->isSignCorrect;
	}

	/**
	 * Данные
	 * @return array
	 */

	public function getData()
	{
		return $this->data;
	}
}