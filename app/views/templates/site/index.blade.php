@extends(Helper::layout())


@section('style')
@stop


@section('content')

    
	<!-- Content -->
	<!--  Main Question -->
		<section class="quest" id="mainQuest" data-status="online">
			<div class="wrp wrp_quest">
				<h1 class="quest__title">Халк cпоет на стадионе</h1>
				<p class="quest__description main-font main-font_gray main-font_light">Да, тот самый Халк умеет не только играть в футбол. Мы обещаем — если до конца октября нам удастся собрать 200 тысяч рублей для пациентов «АдВиты», Халк сменит бутсы на микрофон и споет перед началом одного из домашних матчей СКА в «Ледовом дворце»! Ему не будет легко, ему будет даже страшно, но он готов! Дело за вами! Давай!</p>
				<!--  Quest container -->
				<div class="quest__container">
					<div class="game-info">
						<div class="game-info__container">
							<div class="game-info__left">
								<div class="game-info__information game-info__information_right">
									<p class="little-font little-font_white">Начало сбора: <span class="js-temimelineStart" data-start="12.09.2014">12.08.2014</span></p>
									<p class="little-font little-font_white">Окончание сбора: <span  class="js-temimelineEnd" data-end="18.10.2014">12.09.2014</span></p>
								</div>
								<i class="icon line-icon line-icon_right"></i>
							</div>
							<div class="game-info__center">
								<p class="main-font main-font_gray main-font_light">Собрано</p>
								<p class="big-font js-totalCash" data-total="1200000">1200 000 <span class="icon icon_rub-big"></span></p>
								<p class="main-font main-font_gray main-font_light">Цель <span class="js-destination" data-destination="500000">500 000</span><span class="icon icon_rub-little"></span></p>
							</div>
							<div class="game-info__right">
								<i class="icon line-icon line-icon_left"></i>
								<div class="game-info__information game-info__information_left">
									<p class="little-font little-font_white">Дата проведения: <span>12.08.2014</span></p>
									<p class="little-font little-font_white">Участники: <span>234</span> человека</p>
								</div>
							</div>
						</div>
					</div>
					<div class="game-statistic">
						<div class="game-statistic__line-container">
							<div class="game-statistic__line js-line">
								<div class="game-statistic__overline js-overline"></div>
							</div>
							<p class="game-statistic__from little-font little-font_white js-startPrice">
								<span>0</span>
								<span class="icon icon_rub-small"></span>
							</p>
							<p class="game-statistic__to little-font little-font_white js-destinationButton">
								<span>500 000</span>
								<span class="icon icon_rub-small"></span>
								<span class="icon-star icon-star_blue"></span>
							</p>
							<div class="game-statistic__total little-font little-font_white js-totalButton">
								<span>1200 000</span>
								<span class="icon icon_rub-small"></span>
							</div>
							<div class="game-statistic__dateStart little-font little-font_white js-startButton">
								<span></span>
							</div>
							<div class="game-statistic__dateEnd little-font little-font_white js-endButton">
								<span></span>
							</div>
						</div>
						<span class="icon-question icon-question_blue js-xDate game-statistic__xDay" style="display: none;"></span>
						<div class="game-statistic__colored-container">
							<div class="game-statistic__colored-line" id="main-render">
							</div>
						</div>
					</div>
				</div>

				<!--  Lightbox open button -->
				<div class="morph-button morph-button-overlay morph-button-fixed morph-button_quest">
					<button class="quest__take-part quest-button js-participate">Давай-давай!</button>
					<div class="morph-content morph-content_participate">
						<div>
							<!-- LightBox content -->
							<section class="quest-participate">
								<span class="icon icon-close icon-play-close">
									<span class="icon icon-play-close-empty"></span>
								</span>
								<div class="wrp wrp_quest">
									<h2 class="quest-participate__title">
										Принять участие
									</h2>
									<div id="paymentTabs" class="quest-participate__container">
										<ul class="quest-participate__list">
											<li class="quest-participate__item"><a href="#internetPayment" class="quest-participate__link">Оплатить через интернет</a></li>
											<li class="quest-participate__item"><a href="#smsPayment" class="quest-participate__link">Оплатить с помощью СМС</a></li>
										</ul>
										<div id="internetPayment" class="quest-participate__content">
											<form action="#" class="quest-participate__form  js-formClear">
												<p class="quest-participate__font">MasterCard, VISA, Яндекс Деньги, WebMoney, QIWI, Мобильные платежи Билайн, Мегафон, МТС и многое другое</p>
												<input class="quest-participate__input" type="text" placeholder="Отправитель (необязательно)">
												<input type="submit" value="Продолжить" class="quest-button quest-participate__submit">	
											</form>
											<p class="middle-font middle-font_white middle-font__span quest-participate__info">На сайте-партнере ДеньгиОнлайн</p>
										</div>
										<div id="smsPayment" class="quest-participate__content js-formClear">
											<form action="#" class="quest-participate__form">
												<input class="quest-participate__input" type="text" placeholder="Отправитель (необязательно)">
												<input type="submit" value="Продолжить" class="quest-button quest-participate__submit">	
											</form>
										</div>
									</div>
								</div>
							</section>
							<!-- LightBox end -->
						</div>
					</div>
				</div>
				<!--  Share -->
				<div class="quest__share-container">
	                <div class="social-share__list quest__share-yaShare" id="ya-shareMain"  data-shareTitle="Синегривый ХАЛК" data-shareDescription="Нападающий сборной Бразилии  и ФК <<Зенит>> Халк одевается в костюм талисмана Зенита и фотографируется с прохожими на Невском" data-shareImage="img/quests/quest_1.jpg"></div>
				</div>
			</div>
		</section>
	<!--  Other Questions -->
		<section class="other-quests" id="otherQuests">
			<h2 class="block-title main-font main-font_gray main-font_light">Прошедние квесты</h2>
			<div class="carousel__container carousel__container_gray other-quests__container js-scrollableQuests">
				<ul class="carousel__list js-otherQuestList" id="latestQuests">
				</ul>
			</div>
		</section>
	<!--  About -->
		<section class="about-proj" id="aboutProject">
			<div class="wrp">
				<h2 class="block-title main-font main-font_gray main-font_light">О проекте</h2>
				<div class="about-proj__container">
					<div class="about-proj__block about-proj__block_gray fl-l">
						<p class="middle-font middle-font_white">«Давай-давай!» — совместный проект благотворительного фонда «АдВита» и футбольного клуба «Зенит». Раз в месяц мы объявляем о начале очередного квеста, по условиям которого наш игрок, тренер или известный болельщик готов сделать что-то очень необычное при одном условии: необходимо набрать определенную сумму, которая полностью будет переведена в помощь пациентам «АдВиты».</p>
					</div>
					<div class="about-proj__block fl-r">
						<p class="little-font little-font_gray">Для того, чтобы помочь, наши герои действительно готовы на все. Дело за вами! Мы хотим не просто заниматься благотворительностью — мы хотим делать это самым невероятным образом.<br><br>Присоединяйтесь! Будет интересно!</p>
					</div>
				</div>
			</div>
		</section>
	<!-- SMI -->
		<section class="smi" id="smi">
			<div class="wrp">
				<h2 class="block-title main-font main-font_gray main-font_light">СМИ о нас</h2>
			</div>
			<div class="carousel__container carousel__container_green smi__container js-scrollableNews">
				<ul class="carousel__list" id="latestNews">
					<li class="smi__item news carousel__item">
						<div class="news__container news__container_video">
							<!-- here is variable "BKorP55Aqvg" -->
							<div class="news__full-container">
								<div class="news__top">
									<a class="js-youtube icon icon-play-button news__video-button" href="http://www.youtube.com/embed/BKorP55Aqvg?rel=0&amp;wmode=transparent">
										<span class="icon icon-play-button-empty"></span>
									</a>
									<div class="news__title-info">
										<h3 class="news__title">Самый веселый способ помочь</h3>
										<a href="http://www.youtube.com/watch?v=BKorP55Aqvg" class="middle-font middle-font_white middle-font__span news__link"><span class="icon-link"></span>Официальный сайт ХК "Динамо" (Рига)</a>
									</div>
								</div>
								<a href="http://www.youtube.com/embed/BKorP55Aqvg?rel=0&amp;wmode=transparent" class="js-youtube news__media-container">
									<img class="news__image" src="http://img.youtube.com/vi/BKorP55Aqvg/hqdefault.jpg" alt="video">
									<span class="news__date-icon">
										<span class="news__date">12</span>
										<span class="news__month">/08</span>
									</span>
								</a>
								<div class="news__information">
									<p class="middle-font middle-font_white middle-font__span">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas reiciendis, culpa quasi cumque quidem obcaecati mollitia dolores itaque consectetur nisi facere sed quis earum nobis repellat provident cum sunt ducimus?</p>
								</div>
							</div>
						</div>
						<div class="news__container news__container_article">
							<div class="news__full-container">
								<div class="news__top">
									<div class="news__title-info">
										<h3 class="news__title">Самый веселый способ помочь</h3>
										<a href="#" class="middle-font middle-font_white middle-font__span news__link"><span class="icon-link"></span>Официальный сайт ХК "Динамо" (Рига)</a>
									</div>
								</div>
								<div class="news__information">
									<div class="news__date-icon">
										<span class="news__date">12</span>
										<span class="news__month">/08</span>
									</div>
									<p class="middle-font middle-font_white middle-font__span news__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas reiciendis, culpa quasi cumque quidem obcaecati mollitia dolores itaque consectetur nisi facere sed quis earum nobis repellat provident cum sunt ducimus?</p>
								</div>
							</div>
						</div>
					</li>
					<li class="smi__item news carousel__item">
						<div class="news__container news__container_photo">
							<div class="news__halph-container">
								<div class="news__top">
									<div class="news__title-info">
										<h3 class="news__title">Самый веселый способ помочь</h3>
										<a href="#" class="middle-font middle-font_white middle-font__span news__link"><span class="icon-link"></span>Официальный сайт ХК "Динамо" (Рига)</a>
									</div>
								</div>
								<a href="img/news/news.jpg" class="js-newsPhoto news__media-container">
									<img class="news__image" src="img/news/news.jpg" alt="news-image">
									<span class="news__date-icon">
										<span class="news__date">12</span>
										<span class="news__month">/08</span>
									</span>
								</a>
								<div class="news__information">
									<p class="middle-font middle-font_white middle-font__span">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas reiciendis, culpa quasi cumque quidem obcaecati mollitia dolores itaque consectetur nisi facere sed quis earum nobis repellat provident cum sunt ducimus?</p>
								</div>
							</div>
							<div class="news__halph-container">
								<div class="news__top">
									<div class="news__title-info">
										<h3 class="news__title">Самый веселый способ помочь</h3>
										<a href="#" class="middle-font middle-font_white middle-font__span news__link"><span class="icon-link"></span>Официальный сайт ХК "Динамо" (Рига)</a>
									</div>
								</div>
								<a href="img/news/news.jpg" class="js-newsPhoto news__media-container">
									<img class="news__image" src="img/news/news.jpg" alt="news-image">
									<span class="news__date-icon">
										<span class="news__date">12</span>
										<span class="news__month">/08</span>
									</span>
								</a>
								<div class="news__information">
									<p class="middle-font middle-font_white middle-font__span">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas reiciendis, culpa quasi cumque quidem obcaecati mollitia dolores itaque consectetur nisi facere sed quis earum nobis repellat provident cum sunt ducimus?</p>
								</div>
							</div>
						</div>
					</li>
					<li class="smi__item news carousel__item">
						<div class="news__container news__container_article">
							<div class="news__full-container">
								<div class="news__top">
									<div class="news__title-info">
										<h3 class="news__title">Самый веселый способ помочь</h3>
										<a href="#" class="middle-font middle-font_white middle-font__span news__link"><span class="icon-link"></span>Официальный сайт ХК "Динамо" (Рига)</a>
									</div>
								</div>
								<div class="news__information">
									<div class="news__date-icon">
										<span class="news__date">12</span>
										<span class="news__month">/08</span>
									</div>
									<p class="middle-font middle-font_white middle-font__span news__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas reiciendis, culpa quasi cumque quidem obcaecati mollitia dolores itaque consectetur nisi facere sed quis earum nobis repellat provident cum sunt ducimus?</p>
								</div>
							</div>
						</div>
						<div class="news__container news__container_video">
							<!-- here is variable "ZBAGEeOms-8" -->
							<div class="news__full-container">
								<div class="news__top">
									<a class="js-youtube icon icon-play-button news__video-button" href="http://www.youtube.com/embed/ZBAGEeOms-8?rel=0&amp;wmode=transparent">
										<span class="icon icon-play-button-empty"></span>
									</a>
									<div class="news__title-info">
										<h3 class="news__title">Самый веселый способ помочь</h3>
										<a href="http://www.youtube.com/watch?v=ZBAGEeOms-8" class="middle-font middle-font_white middle-font__span news__link"><span class="icon-link"></span>Официальный сайт ХК "Динамо" (Рига)</a>
									</div>
								</div>
								<a href="http://www.youtube.com/embed/ZBAGEeOms-8?rel=0&amp;wmode=transparent" class="js-youtube news__media-container">
									<img class="news__image" src="http://img.youtube.com/vi/ZBAGEeOms-8/hqdefault.jpg" alt="video">
									<span class="news__date-icon">
										<span class="news__date">12</span>
										<span class="news__month">/08</span>
									</span>
								</a>
								<div class="news__information">
									<p class="middle-font middle-font_white middle-font__span">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas reiciendis, culpa quasi cumque quidem obcaecati mollitia dolores itaque consectetur nisi facere sed quis earum nobis repellat provident cum sunt ducimus?</p>
								</div>
							</div>
						</div>
					</li>
					<li class="smi__item news carousel__item">
						<div class="news__container news__container_video">
							<!-- here is variable "ZBAGEeOms-8" -->
							<div class="news__full-container">
								<div class="news__top">
									<a class="js-youtube icon icon-play-button news__video-button" href="http://www.youtube.com/embed/ZBAGEeOms-8?rel=0&amp;wmode=transparent">
										<span class="icon icon-play-button-empty"></span>
									</a>
									<div class="news__title-info">
										<h3 class="news__title">Самый веселый способ помочь</h3>
										<a href="http://www.youtube.com/watch?v=ZBAGEeOms-8" class="middle-font middle-font_white middle-font__span news__link"><span class="icon-link"></span>Официальный сайт ХК "Динамо" (Рига)</a>
									</div>
								</div>
								<a href="http://www.youtube.com/embed/ZBAGEeOms-8?rel=0&amp;wmode=transparent" class="js-youtube news__media-container">
									<img class="news__image" src="http://img.youtube.com/vi/ZBAGEeOms-8/hqdefault.jpg" alt="video">
									<span class="news__date-icon">
										<span class="news__date">12</span>
										<span class="news__month">/08</span>
									</span>
								</a>
								<div class="news__information">
									<p class="middle-font middle-font_white middle-font__span">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas reiciendis, culpa quasi cumque quidem obcaecati mollitia dolores itaque consectetur nisi facere sed quis earum nobis repellat provident cum sunt ducimus?</p>
								</div>
							</div>
						</div>
						<div class="news__container news__container_article">
							<div class="news__full-container">
								<div class="news__top">
									<div class="news__title-info">
										<h3 class="news__title">Самый веселый способ помочь</h3>
										<a href="#" class="middle-font middle-font_white middle-font__span news__link"><span class="icon-link"></span>Официальный сайт ХК "Динамо" (Рига)</a>
									</div>
								</div>
								<div class="news__information">
									<div class="news__date-icon">
										<span class="news__date">12</span>
										<span class="news__month">/08</span>
									</div>
									<p class="middle-font middle-font_white middle-font__span news__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas reiciendis, culpa quasi cumque quidem obcaecati mollitia dolores itaque consectetur nisi facere sed quis earum nobis repellat provident cum sunt ducimus?</p>
								</div>
							</div>
						</div>
					</li>
					<li class="smi__item news carousel__item">
						<div class="news__container news__container_photo">
							<div class="news__halph-container">
								<div class="news__top">
									<div class="news__title-info">
										<h3 class="news__title">Самый веселый способ помочь</h3>
										<a href="#" class="middle-font middle-font_white middle-font__span news__link"><span class="icon-link"></span>Официальный сайт ХК "Динамо" (Рига)</a>
									</div>
								</div>
								<a href="img/news/news.jpg" class="js-newsPhoto news__media-container">
									<img class="news__image" src="img/news/news.jpg" alt="news-image">
									<span class="news__date-icon">
										<span class="news__date">12</span>
										<span class="news__month">/08</span>
									</span>
								</a>
								<div class="news__information">
									<p class="middle-font middle-font_white middle-font__span">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas reiciendis, culpa quasi cumque quidem obcaecati mollitia dolores itaque consectetur nisi facere sed quis earum nobis repellat provident cum sunt ducimus?</p>
								</div>
							</div>
							<div class="news__halph-container">
								<div class="news__top">
									<div class="news__title-info">
										<h3 class="news__title">Самый веселый способ помочь</h3>
										<a href="#" class="middle-font middle-font_white middle-font__span news__link"><span class="icon-link"></span>Официальный сайт ХК "Динамо" (Рига)</a>
									</div>
								</div>
								<a href="img/news/news.jpg" class="js-newsPhoto news__media-container">
									<img class="news__image" src="img/news/news.jpg" alt="news-image">
									<span class="news__date-icon">
										<span class="news__date">12</span>
										<span class="news__month">/08</span>
									</span>
								</a>
								<div class="news__information">
									<p class="middle-font middle-font_white middle-font__span">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas reiciendis, culpa quasi cumque quidem obcaecati mollitia dolores itaque consectetur nisi facere sed quis earum nobis repellat provident cum sunt ducimus?</p>
								</div>
							</div>
						</div>
					</li>
					<li class="smi__item news carousel__item">
						<div class="news__container news__container_article">
							<div class="news__full-container">
								<div class="news__top">
									<div class="news__title-info">
										<h3 class="news__title">Самый веселый способ помочь</h3>
										<a href="#" class="middle-font middle-font_white middle-font__span news__link"><span class="icon-link"></span>Официальный сайт ХК "Динамо" (Рига)</a>
									</div>
								</div>
								<div class="news__information">
									<div class="news__date-icon">
										<span class="news__date">12</span>
										<span class="news__month">/08</span>
									</div>
									<p class="middle-font middle-font_white middle-font__span news__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas reiciendis, culpa quasi cumque quidem obcaecati mollitia dolores itaque consectetur nisi facere sed quis earum nobis repellat provident cum sunt ducimus?</p>
								</div>
							</div>
						</div>
						<div class="news__container news__container_video">
							<!-- here is variable "ZBAGEeOms-8" -->
							<div class="news__full-container">
								<div class="news__top">
									<a class="js-youtube icon icon-play-button news__video-button" href="http://www.youtube.com/embed/ZBAGEeOms-8?rel=0&amp;wmode=transparent">
										<span class="icon icon-play-button-empty"></span>
									</a>
									<div class="news__title-info">
										<h3 class="news__title">Самый веселый способ помочь</h3>
										<a href="http://www.youtube.com/watch?v=ZBAGEeOms-8" class="middle-font middle-font_white middle-font__span news__link"><span class="icon-link"></span>Официальный сайт ХК "Динамо" (Рига)</a>
									</div>
								</div>
								<a href="http://www.youtube.com/embed/ZBAGEeOms-8?rel=0&amp;wmode=transparent" class="js-youtube news__media-container">
									<img class="news__image" src="http://img.youtube.com/vi/ZBAGEeOms-8/hqdefault.jpg" alt="video">
									<span class="news__date-icon">
										<span class="news__date">12</span>
										<span class="news__month">/08</span>
									</span>
								</a>
								<div class="news__information">
									<p class="middle-font middle-font_white middle-font__span">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas reiciendis, culpa quasi cumque quidem obcaecati mollitia dolores itaque consectetur nisi facere sed quis earum nobis repellat provident cum sunt ducimus?</p>
								</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</section>
	<!-- Partners -->
		<section class="partners" id="parthers">
			<div class="wrp">
				<h2 class="block-title main-font main-font_gray main-font_light">Партнеры</h2>
				<ul class="partners__container">
					<li class="partners__each-partner"></li>
					<li class="partners__each-partner"></li>
					<li class="partners__each-partner"></li>
					<li class="partners__each-partner"></li>
					<li class="partners__each-partner"></li>
					<li class="partners__each-partner"></li>
					<li class="partners__each-partner"></li>
					<li class="partners__each-partner"></li>
					<li class="partners__each-partner"></li>
					<li class="partners__each-partner"></li>
					<li class="partners__each-partner"></li>
					<li class="partners__each-partner"></li>
				</ul>
			</div>
		</section>
		<!-- End of content -->
		<nav class="quest-navigation">
			<ul class="quest-navigation__list">
				<li class="quest-navigation__item">
					<a href="#mainQuest" class="js-easyScroll m-active" data-scroll="1"></a>
				</li>
				<li class="quest-navigation__item">
					<a href="#otherQuests" class="js-easyScroll" data-scroll="2"></a>
				</li>
				<li class="quest-navigation__item">
					<a href="#aboutProject" class="js-easyScroll" data-scroll="3"></a>
				</li>
				<li class="quest-navigation__item">
					<a href="#smi" class="js-easyScroll" data-scroll="4"></a>
				</li>
				<li class="quest-navigation__item">
					<a href="#parthers" class="js-easyScroll" data-scroll="5"></a>
				</li>
				<li class="quest-navigation__item">
					<a href="#contacts" class="js-easyScroll" data-scroll="6"></a>
				</li>
			</ul>
		</nav>

@stop


@section('scripts')
@stop