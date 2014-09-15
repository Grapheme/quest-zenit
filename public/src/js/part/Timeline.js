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
			$button = $container.find(".js-totalButton"),
			$xDate = $container.find(".js-xDate"),
			$each = $container.find(".js-showEach"),
			$line = $container.find(".js-line"),
			$startDate = $container.find(".js-temimelineStart"),
			$endDate = $container.find(".js-temimelineEnd"),
			startDate = moment($startDate.attr('data-start'), 'DD.MM.YYYY'),
			endDate = moment($endDate.attr('data-end'), 'DD.MM.YYYY'),
			today = moment(),
			firstDate = today.diff(startDate, 'days') + ' дн.',
			secondDate = endDate.diff(today, 'days') + ' дн.',
			$renderDataStart = $container.find(".js-startButton"),
			$renderDataEnd = $container.find(".js-endButton"),
			positionright = '10%',
			$startPrice = $container.find('.js-startPrice'),
			refStatus1 = endDate.diff(today, 'days'),
			refStatus2 = today.diff(startDate, 'days'),
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
			console.log(refStatus1, refStatus2);
			if (refStatus1 > 0 && refStatus2 > 0){
				status = 'online';
			} else {
				status = 'offline';
			}
			if (status === 'online'){
				timeline(80);
				$list.css('padding-right', '20%');
				$renderDataStart.addClass('m-active').find('span').html(firstDate);
				$renderDataEnd.addClass('m-active').find('span').html(secondDate);
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
				$renderDataStart.css('left', '40%');
				$renderDataEnd.css('right', '10%');
				$to.addClass('m-active');
			} else {
				$overline.css('width', buttonWidth + '%').addClass('m-active');

				$button.css({
					"left": buttonWidth + "%",
					"opacity": 1
				});
				if (buttonWidth > 80){
					$to.addClass('m-disactive');
				}
				if (buttonWidth >= 20){
					$renderDataStart.css('left', (buttonWidth / 2) + '%');
				} else {
					$renderDataStart.css('display', 'none');
					$startPrice.css('display', 'none');
				}

				if (buttonWidth <= 80){
					positionright = (100 - buttonWidth)/2 + '%';
					$renderDataEnd.css('right', positionright);
				} else {
					$renderDataEnd.css('display', 'none');
				}
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