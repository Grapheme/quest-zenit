
	<!-- templates -->
	<script id="mainTpl" type="x-tmpl-mustache">
		<ul class="game-statistic__colored-list js-paymentList">				
			{{ #players }}
	        <li class="game-statistic__colored-item game-statistic__colored-item_{{ class }} js-showEach" data-size="{{ cash }}">
	            <div class="dropdown-window dropdown-window_{{ class }}">
	                <p class="dropdown-window__text little-font little-font_white">{{ name }}</p>
	                <p class="dropdown-window__text little-font little-font_white">{{ date }}</p>
	                <p class="dropdown-window__text little-font little-font_white little-font_bold">{{ cash }} Р</p>
	            </div>
	        </li>
	        {{ /players }}
	    </ul>
    </script>

	<script id="otherTpl" type="x-tmpl-mustache">
		{{ #quests }}
		<li class="other-quests__item morph-button morph-button-overlay morph-button-fixed morph-button_other-quest carousel__item js-renderOther" data-id="{{ link }}">
			<button class="other-quests__link js-openPopup" onclick="location.href='#{{ link }}'">
				<span class="other-quests__title main-font main-font_white main-font_light">{{ title }}</span>
					<span class="other-quests__each-container">
					<img class="other-quests__image" src="{{ image }}" alt="quest" />
					<span class="other-quests__overflow">
						<span class="other-quests__price main-font main-font_white main-font_light">{{ price }} <span class="icon icon_rub-small icon_rub-small_biger"></span></span>
						<span class="other-quests__description little-font little-font_white">{{ description }}</span>
					</span>
				</span>
			</button>
			<div class="morph-content morph-content_renderMe">
				<div>
					<span class="icon icon-close icon-play-close">
						<span class="icon icon-play-close-empty"></span>
					</span>
					<div class="js-renderedContainer">
					</div>
				</div>
			</div>
		</li>
		{{ /quests }}
	</script>

	<script id="otherFullTpl" type="x-tmpl-mustache">
		<section class="quest-renderMe">
			<div class="wrp wrp_quest">
				<div class="past-quests" id="renderedQuest" data-status="ofline">
					<h1 class="quest__title">{{ title }}</h1>
					<p class="quest__description main-font main-font_gray main-font_light">{{ description }}</p>
					<!--  Quest container -->
					<div class="quest__container">
						<div class="game-info">
							<div class="game-info__container">
								<div class="game-info__left">
									<div class="game-info__information game-info__information_right">
										<p class="little-font little-font_white">Начало сбора: <span class="js-temimelineStart" data-start="{{ start-date }}">{{ start-date }}</span></p>
										<p class="little-font little-font_white">Окончание сбора: <span  class="js-temimelineEnd" data-end="{{ end-date }}">{{ end-date }}</span></p>

									</div>
									<i class="icon line-icon line-icon_right"></i>
								</div>
								<div class="game-info__center">
									<p class="main-font main-font_gray main-font_light">Собрано</p>
									<p class="big-font js-totalCash" data-total="{{ total }}">{{ total }}<span class="icon icon_rub-big"></span></p>
									<p class="main-font main-font_gray main-font_light">Цель <span class="js-destination" data-destination="{{ destination }}">{{ destination }}</span><span class="icon icon_rub-little"></span></p>
								</div>
								<div class="game-info__right">
									<i class="icon line-icon line-icon_left"></i>
									<div class="game-info__information game-info__information_left">
										<p class="little-font little-font_white">Дата проведения: <span>{{ action-date }}</span></p>
										<p class="little-font little-font_white">Участники: <span>{{ gamers }}</span> человека</p>
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
									<span>{{ destination }}</span>
									<span class="icon icon_rub-small"></span>
									<span class="icon-star icon-star_green"></span>
								</p>
								<div class="game-statistic__total little-font little-font_white js-totalButton">
									<span>{{ total }}</span>
									<span class="icon icon_rub-small"></span>
								</div>
								<div class="game-statistic__dateStart little-font little-font_white js-startButton">
									<span></span>
								</div>
								<div class="game-statistic__dateEnd little-font little-font_white js-endButton">
									<span></span>
								</div>
							</div>
							<span class="icon-question icon-question_green js-xDate game-statistic__xDay" style="display: none;"></span>
							<div class="game-statistic__colored-container">
								<div class="game-statistic__colored-line" id="lastRendered">
								</div>
							</div>
						</div>
					</div>
					<a class="little-font little-font_white little-font_center quest-renderMe__under-link" href="#">Скачать принт для печати</a>
					<a href="#" target="_blank" class="quest__take-part quest-button">Купить футболку</a>
					<!--  Share -->
					<div class="quest__share-container">
		                <div class="social-share__list quest__share-yaShare" id='ya-share' data-shareTitle="{{ title }}" data-shareDescription="{{ description }}" data-shareImage="{{ questImage }}">
		                </div>
					</div>
				</div>
			</div>
		</section>
		<section class="quest-renderMe-media">
			<div class="wrp">
				<h2 class="block-title main-font main-font_gray main-font_light">Фото</h2>
			</div>
			<div class="carousel__container carousel__container_green quest-renderMe-media__container js-scrollableNews" id="latestPhoto">
				<ul class="carousel__list">
					{{ #photos }}
					<li class="quest-renderMe-media__item carousel__item">
						<a class="cbox-photo" href="{{ src }}" data-group="{{ id }}">
							<img src="{{ src }}" alt="{{ alt }}">
						</a>
					</li>
					{{ /photos }}
				</ul>
			</div>
			<div class="wrp wrp_short render-video">
				<h2 class="block-title main-font main-font_gray main-font_light">Видео</h2>
				<ul class="render-video__list">
					{{ #videos }}
					<li class="render-video__item">
						<a class="js-youtube render-video__link" href="http://www.youtube.com/embed/{{ url }}?rel=0&amp;wmode=transparent">
							<img class="render-video__thumbnail" src="http://img.youtube.com/vi/{{ url }}/hqdefault.jpg" alt="video">
							<span class="news__date-icon news__date-icon_red">
								<span class="icon icon-play-button render-video__video-button">
									<span class="icon icon-play-button-empty"></span>
								</span>
							</span>
						</a>
					</li>
					{{ /videos }}
				</ul>
			</div>
			<div class="wrp wrp_short render-description">
				<h2 class="block-title main-font main-font_gray main-font_light">Описание</h2>
				<div class="render-description__container js-columnizer">
					<p class="middle-font middle-font_white middle-font__span render-description__text"> {{ fulldescription }}</p>
				</div>
			</div>
		</section>
	</script>