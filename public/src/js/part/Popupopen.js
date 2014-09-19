QuestZenit.PopupOpen = function(){
	var popupNumber = window.location.hash.substring(1),
		hash = window.location.pathname;
	$('.icon-close').on('click', function(){
		window.location.hash = '';
	});
	$(window).load(function(){
		$(".js-renderOther").each(function(){
			var $this = $(this);
			if (popupNumber === $this.attr('data-id')) {
				var $button = $this.find('.js-openPopup');
				$button.trigger('click');
			}
		});	
	});
};