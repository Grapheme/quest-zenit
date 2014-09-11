QuestZenit.TimeLine = function() {
	$.fn.timeline = function() {
		var finalPrice = 0;
		var currentPrice = 0;
		var $container = $(this),
			$list = $container.find('.js-paymentList'),
			status = $container.attr("data-status"),
			destination = parseInt($container.find(".js-destination").attr("data-destination")),
			total = parseInt($container.find(".js-totalCash").attr("data-total")),
			buttonWidth,
			$to = $container.find(".js-destinationButton"),
			x = '',
			$button = $container.find('.js-totalButton'),
			$xDate = $container.find(".js-xDate"),
			$each = $container.find(".js-showEach"),
			$line = $container.find(".js-line"),
			$overline = $container.find(".js-overline");
		if (destination >= total) {
			buttonWidth = (total / destination) * 100;
			x = '';
		} else {
			buttonWidth = (destination / total) * 100;
			x = 'yes';
		}
		setTimeout(function() {
			gameStatus();
		}, 3000);

		var gameStatus = function(){
			if (status === 'online'){
				timeline(80);
				$list.css('padding-right', '20%');
				if (destination < total) {
					$xDate.show();
					$line.addClass('m-online');
				}
			} else {
				timeline(100);
				if (destination < total) {
					$xDate.hide();
					$line.addClass('m-online');
				}
			}
		};
		var timeline = function(persent){
			if (x === 'yes'){
				$button.css({
					"left": persent + "%",
					"opacity": 1
				});
				$overline.css('width', persent + '%').addClass('m-active');
				$to.css("left", buttonWidth + '%');
			} else {
				$overline.css('width', buttonWidth + '%').addClass('m-active');
				$button.css({
					"left": buttonWidth + "%",
					"opacity": 1
				});
			}
			$each.each(function(){
				var $this = $(this),
					prise = $this.attr("data-size"),
					width;

				if (destination >= total) {
					width = prise / destination * 100;
				} else {
					width = prise / total * 100;
				}
				$this.css('width', width + '%');
				
			});
		};
	};

	$("#mainQuest").timeline();
	
	//Converter into usefull format
	var b = '### ### ### ###';
	function ConvertNumber(a, b){
		var tail=format.lastIndexOf('.');number=number.toString();
		tail=tail>-1?format.substr(tail):'';
		if(tail.length>0){if(tail.charAt(1)=='#'){
			tail=number.substr(number.lastIndexOf('.'),tail.length);
		}}
		number=number.replace(/\..*|[^0-9]/g,'').split('');
		format=format.replace(/\..*/g,'').split('');
		for(var i=format.length-1;i>-1;i--){
			if(format[i]=='#'){
				format[i]=number.pop();
			}
		}
		return number.join('')+format.join('')+tail;
	}
};