QuestZenit.Pagescroll = function() {
	var mainquest,
		otherquest,
		aboutProject,
		smi,
		parthers,
		contacts,
		bottomS;
	$(".js-scrollTop").on('click', function() {
		$.smoothScroll({
			scrollTarget: '#'
		});
		return false;
	});
	$('.js-easyScroll').smoothScroll().on('click', function(e){
		e.preventDefault();
		$('.js-easyScroll').removeClass("m-active");
		$(this).addClass("m-active");
	});

	$(window).load(function() {
		mainquest = $('#mainQuest').offset().top;
		otherquest = $('#otherQuests').offset().top - 200;
		aboutProject = $('#aboutProject').offset().top - 200;
		smi = $('#smi').offset().top - 200;
		parthers = $('#parthers').offset().top - 200;
		contacts = $('#contacts').offset().top - 200;
	});
	$(window).on('scroll', function(){
		var scrolled = $(window).scrollTop();
		clearTimeout(
			$.data(this, 'scrollTimer')
		);
		$.data(this, 'scrollTimer', setTimeout(function() {
			scrollMe();
		}, 200));
		var scrollMe = function(){
			if ( scrolled >= 0 && scrolled < otherquest) {
				$('.js-easyScroll').removeClass("m-active");
				$('.js-easyScroll[data-scroll="1"]').addClass("m-active");
			}
			if ( scrolled >= otherquest && scrolled < aboutProject) {
				$('.js-easyScroll').removeClass("m-active");
				$('.js-easyScroll[data-scroll="2"]').addClass("m-active");
				
			}

			if ( scrolled >= aboutProject && scrolled < smi) {
				$('.js-easyScroll').removeClass("m-active");
				$('.js-easyScroll[data-scroll="3"]').addClass("m-active");
				$('.js-easyScroll').addClass('m-gray');
			} else {
				$('.js-easyScroll').removeClass('m-gray');
			}

			if ( scrolled >= smi && scrolled < parthers) {
				$('.js-easyScroll').removeClass("m-active");
				$('.js-easyScroll[data-scroll="4"]').addClass("m-active");
			}
			if ( scrolled >= parthers  && scrolled < parthers + 500) {
				$('.js-easyScroll').removeClass("m-active");
				$('.js-easyScroll[data-scroll="5"]').addClass("m-active");
			}
			if ( scrolled >= parthers + 500) {
				$('.js-easyScroll').removeClass("m-active");
				$('.js-easyScroll[data-scroll="6"]').addClass("m-active");
			}
		};
	});
};