QuestZenit.ColorboxMedia = function(){
	var $container = $('body');
	var closeButton = '<span class="icon icon-close icon-play-close"><span class="icon icon-play-close-empty"></span></span>';
	$container.on("click", ".js-youtube", function(e){
		e.preventDefault();
		$(this).colorbox({
			className: 'modal-colorbox',
			close: closeButton,
			iframe:true,
			innerWidth:640,
			innerHeight:390
		});
	});
	$container.on("click", ".js-newsPhoto", function(e){
		e.preventDefault();
		$(this).colorbox({
			className: 'modal-colorbox',
			close: closeButton,
			maxWidth: '80%',
			maxHeight: '80%'
		});
	});
};