$.fn.cuscarousel = function(num, resizeHeight) {
	var resizeIt = false;
	if (resizeHeight === 1) {
		resizeIt = true;
	}
	var $container = $(this),
		$child = $container.children(),
		$allChildrens = $child.find('li'),
		elementHeight = $container.height(),
		scrolledHeight = $child.height(),
		containerHeight = $child.height(),
		difference = 0,
		containerW = 0,
		elementWidth = 0,
		time,
		modulDif,
		modulMargin,
		width = 0,
		margin = 0;
	$allChildrens.each(function(){
		width = $(this).outerWidth() + width;
	});
	var permanentW = width;
	$child.css('width', width + 'px');
	if (num < $allChildrens.length){
		//Insert Buttons
		$container.append('<span class="icon icon-arrow_left quest-prev js-prev"><span class="icon icon-arrow_left-empty"></span></span><span class="icon quest-next icon-arrow_right js-next"><span class="icon icon-arrow_right-empty"></span></span>');
		var $next = $container.find(".js-next");
		var $prev = $container.find(".js-prev");
		resizedw();
		//Button Next
		$next.on('click', function(e){
			var $this = $(this);
			margin = margin - elementWidth;
			modulMargin = Math.abs(margin);
			$child.css('margin-left', margin + 'px');
			if(modulMargin >= modulDif){
				$this.hide();
			} else {
				$prev.show();
			}
		});
		//Button Previous
		$prev.on('click', function(e){
			var $this = $(this);
			margin = margin + elementWidth;
			modulMargin = Math.abs(margin);
			$child.css('margin-left', margin + 'px');
			if (modulMargin < elementWidth){
				$this.hide();
			} else {
				$next.show();
			}
		});
	}
	resizedw();

	// Function for find width of all list content with resize
	function resizedw(){
		//window widh for all browsers
		var x = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
		if (x < 2100 && resizeIt) {
			if ($allChildrens.length % 2 === 0 ){
				width = permanentW / 2;
			} else {
				width = (permanentW / 2) + $allChildrens.first().width();
			}
		} else {
			width = permanentW;
		}
		margin = 0;
		containerW = $container.outerWidth();
		difference = containerW - width;
		modulDif = Math.abs(difference);
		$child.css('width', width + 'px');
		//width of 1 li element
		elementWidth = $allChildrens.first().outerWidth();
		if (num < $allChildrens.length){
			$child.css('margin-left', 0);
		} else {
			$child.css('margin', '0 auto');
		}
		if (num < $allChildrens.length){
			$prev.hide();
			$next.show();
		}
	}
	$(window).on('resize', function(){
		clearTimeout(time);
		time = setTimeout(resizedw, 200);
	});
};