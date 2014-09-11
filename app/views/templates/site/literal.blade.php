
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
		<li class="other-quests__item morph-button morph-button-overlay morph-button-fixed morph-button_other-quest">
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
					<section class="quest-renderMe" data-id="{{ link }}">
						<span class="icon icon-close icon-play-close">
							<span class="icon icon-play-close-empty"></span>
						</span>
					</section>
				</div>
			</div>
		</li>
		{{ /quests }}
	</script>