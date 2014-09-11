
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
			<button class="other-quests__link">
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
										<p class="little-font little-font_white">Начало сбора: <span>{{ start-date }}</span></p>
										<p class="little-font little-font_white">Окончание сбора: <span>{{ end-date }}</span></p>
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
								<p class="game-statistic__from little-font little-font_white">
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
							</div>
							<span class="icon-question icon-question_green js-xDate game-statistic__xDay" style="display: none;"></span>
							<div class="game-statistic__colored-container">
								<div class="game-statistic__colored-line" id="lastRendered">
								</div>
							</div>
						</div>
					</div>

					<a href="#" target="_blank" class="quest__take-part quest-button">Купить футболку</a>
					<!--  Share -->
					<div class="quest__share-container">
		                <div class="social-share social-share_long js-shareBlock" data-url="#" data-controller-url="/share_count">
		                	<ul class="social-share__list">
		                		<li class="social-share__item">
		                			<span onclick="window.open('http://vk.com/share.php?url=%23&amp;title=%D0%97%D0%B0%D1%80%D1%8F%D0%B4%D0%B8%D0%BC%20%D0%B2%D1%81%D0%B5%20%D0%B2%D0%BC%D0%B5%D1%81%D1%82%D0%B5.%20%D0%91%D0%BB%D0%B0%D0%B3%D0%BE%D1%82%D0%B2%D0%BE%D1%80%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9%20%D0%BA%D0%B2%D0%B5%D1%81%D1%82&amp;description=%D0%A1%D0%B8%D0%BD%D0%B5%D0%B3%D1%80%D0%B8%D0%B2%D1%8B%D0%B9%20%D0%A5%D0%B0%D0%BB%D0%BA&amp;image=%7B%7B%20asset%28%27frontend%2Fimg%2Fquest-back.jpg%27%29%20%7D%7D&amp;noparse=true', '_blank')" class="js-shareButton social-share__link social-share__link_vk">
		                				<svg class="social-share__icon icon_social-vk">
		                					<use xlink:href="img/svg/icons.svg#icon_social-vk"></use>
		                				</svg>
		                				<span data-type="vk" class="social-share__counter js-count"> </span>
		                			</span>
		                		</li>
		                		<li class="social-share__item">
		                			<span onclick="window.open('http://www.facebook.com/sharer.php?s=100&amp;p[title]=%D0%97%D0%B0%D1%80%D1%8F%D0%B4%D0%B8%D0%BC%20%D0%B2%D1%81%D0%B5%20%D0%B2%D0%BC%D0%B5%D1%81%D1%82%D0%B5.%20%D0%91%D0%BB%D0%B0%D0%B3%D0%BE%D1%82%D0%B2%D0%BE%D1%80%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9%20%D0%BA%D0%B2%D0%B5%D1%81%D1%82&amp;p[summary]=%D0%A1%D0%B8%D0%BD%D0%B5%D0%B3%D1%80%D0%B8%D0%B2%D1%8B%D0%B9%20%D0%A5%D0%B0%D0%BB%D0%BA&amp;p[url]=%23&amp;p[images][0]=%7B%7B%20asset%28%27frontend%2Fimg%2Fquest-back.jpg%27%29%20%7D%7D', '_blank')" class="js-shareButton social-share__link social-share__link_fb">
		                				<svg class="social-share__icon icon_social-fb">
		                					<use xlink:href="img/svg/icons.svg#icon_social-fb"></use>
		                				</svg>
		                				<span data-type="fb" class="social-share__counter js-count"> </span>
		                			</span>
		                		</li>
		                		<li class="social-share__item">
		                			<span onclick="window.open('http://www.odnoklassniki.ru/dk?st.cmd=addShare&amp;st.s=1&amp;st.comments=%D0%A1%D0%B8%D0%BD%D0%B5%D0%B3%D1%80%D0%B8%D0%B2%D1%8B%D0%B9%20%D0%A5%D0%B0%D0%BB%D0%BA&amp;st._surl=%23', '_blank')" class="js-shareButton social-share__link social-share__link_ok">
		                				<svg class="social-share__icon icon_social-ok">
		                					<use xlink:href="img/svg/icons.svg#icon_social-ok"></use>
		                				</svg>
		                				<span data-type="ok" class="social-share__counter js-count"> </span>
		                			</span>
		                		</li>
		                		<li class="social-share__item">
		                			<span onclick="window.open('https://twitter.com/intent/tweet?text=%D0%A1%D0%B8%D0%BD%D0%B5%D0%B3%D1%80%D0%B8%D0%B2%D1%8B%D0%B9%20%D0%A5%D0%B0%D0%BB%D0%BA&amp;url=%23', '_blank')" class="js-shareButton social-share__link social-share__link_twitter">
		                				<svg class="social-share__icon icon_social-twitter">
		                					<use xlink:href="img/svg/icons.svg#icon_social-twitter"></use>
		                				</svg>
		                				<span data-type="twitter" class="social-share__counter js-count"> </span>
		                			</span>
		                		</li>
		                		<li class="social-share__item">
		                			<span onclick="window.open('https://plus.google.com/share?url=%23', '_blank')" class="js-shareButton social-share__link social-share__link_gp">
		                				<svg class="social-share__icon icon_social-gp">
		                					<use xlink:href="img/svg/icons.svg#icon_social-gp"></use>
		                				</svg>
		                				<span data-type="gp" class="social-share__counter js-count"> </span>
		                			</span>
		                		</li>
		                	</ul>
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
						<img src="{{ src }}" alt=" {{ alt }} ">
					</li>
					{{ /photos }}
				</ul>
			</div>
		</section>
	</script>