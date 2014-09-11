QuestZenit.LightBox = function() {
//Render
	var renderData = {
		players: [
			{ 'cash':50000, 'class': 'green', 'date': '12.07.2014', 'name': 'Черемушкин Иван'},
			{ 'cash':100000, 'class': 'lightblue', 'date': '12.07.2014', 'name': 'Черемушкин Иван' },
			{ 'cash':2000, 'class': 'blue', 'date': '12.07.2014', 'name': 'Черемушкин Иван' },
			{ 'cash':1000, 'class': 'torquous', 'date': '12.07.2014', 'name': 'Черемушкин Иван' },
			{ 'cash':100000, 'class': 'orange', 'date': '12.07.2014', 'name': 'Черемушкин Иван' },
			{ 'cash':47000, 'class': 'red', 'date': '12.07.2014', 'name': 'Черемушкин Иван' },
			{ 'cash':50000, 'class': 'green', 'date': '12.07.2014', 'name': 'Черемушкин Иван'},
			{ 'cash':100000, 'class': 'lightblue', 'date': '12.07.2014', 'name': 'Черемушкин Иван' },
			{ 'cash':2000, 'class': 'blue', 'date': '12.07.2014', 'name': 'Черемушкин Иван' },
			{ 'cash':1000, 'class': 'torquous', 'date': '12.07.2014', 'name': 'Черемушкин Иван' },
			{ 'cash':100000, 'class': 'orange', 'date': '12.07.2014', 'name': 'Черемушкин Иван' },
			{ 'cash':47000, 'class': 'red', 'date': '12.07.2014', 'name': 'Черемушкин Иван' },
			{ 'cash':50000, 'class': 'green', 'date': '12.07.2014', 'name': 'Черемушкин Иван'},
			{ 'cash':100000, 'class': 'lightblue', 'date': '12.07.2014', 'name': 'Черемушкин Иван' },
			{ 'cash':2000, 'class': 'blue', 'date': '12.07.2014', 'name': 'Черемушкин Иван' },
			{ 'cash':1000, 'class': 'torquous', 'date': '12.07.2014', 'name': 'Черемушкин Иван' },
			{ 'cash':100000, 'class': 'orange', 'date': '12.07.2014', 'name': 'Черемушкин Иван' },
			{ 'cash':47000, 'class': 'red', 'date': '12.07.2014', 'name': 'Черемушкин Иван' },
			{ 'cash':50000, 'class': 'green', 'date': '12.07.2014', 'name': 'Черемушкин Иван'},
			{ 'cash':100000, 'class': 'lightblue', 'date': '12.07.2014', 'name': 'Черемушкин Иван' },
			{ 'cash':2000, 'class': 'blue', 'date': '12.07.2014', 'name': 'Черемушкин Иван' },
			{ 'cash':1000, 'class': 'torquous', 'date': '12.07.2014', 'name': 'Черемушкин Иван' },
			{ 'cash':100000, 'class': 'orange', 'date': '12.07.2014', 'name': 'Черемушкин Иван' },
			{ 'cash':47000, 'class': 'red', 'date': '12.07.2014', 'name': 'Черемушкин Иван' }
		],
		quests: [
			{ 'title': 'Победоносный Кришито',
			'image': 'img/quests/quest_1.jpg',
			'price': '400000',
			'description': 'Нападающий сборной Бразилии  и ФК "Зенит" Xалк одевается в костюм талисмана Зенита и фотографируется с прохожими на Невском',
			'link': '1'
			},
			{ 'title': 'Победоносный Кришито',
			'image': 'img/quests/quest_2.jpg',
			'price': '400000',
			'description': 'Нападающий сборной Бразилии  и ФК "Зенит" Xалк одевается в костюм талисмана Зенита и фотографируется с прохожими на Невском',
			'link': '2'
			},
			{ 'title': 'Победоносный Кришито',
			'image': 'img/quests/quest_3.jpg',
			'price': '400000',
			'description': 'Нападающий сборной Бразилии  и ФК "Зенит" Xалк одевается в костюм талисмана Зенита и фотографируется с прохожими на Невском',
			'link': '3'
			},
			{ 'title': 'Победоносный Кришито',
			'image': 'img/quests/quest_1.jpg',
			'price': '400000',
			'description': 'Нападающий сборной Бразилии  и ФК "Зенит" Xалк одевается в костюм талисмана Зенита и фотографируется с прохожими на Невском',
			'link': '1'
			},
			{ 'title': 'Победоносный Кришито',
			'image': 'img/quests/quest_2.jpg',
			'price': '400000',
			'description': 'Нападающий сборной Бразилии  и ФК "Зенит" Xалк одевается в костюм талисмана Зенита и фотографируется с прохожими на Невском',
			'link': '2'
			},
			{ 'title': 'Победоносный Кришито',
			'image': 'img/quests/quest_3.jpg',
			'price': '400000',
			'description': 'Нападающий сборной Бразилии  и ФК "Зенит" Xалк одевается в костюм талисмана Зенита и фотографируется с прохожими на Невском',
			'link': '3'
			},{ 'title': 'Победоносный Кришито',
			'image': 'img/quests/quest_1.jpg',
			'price': '400000',
			'description': 'Нападающий сборной Бразилии  и ФК "Зенит" Xалк одевается в костюм талисмана Зенита и фотографируется с прохожими на Невском',
			'link': '1'
			},
			{ 'title': 'Победоносный Кришито',
			'image': 'img/quests/quest_2.jpg',
			'price': '400000',
			'description': 'Нападающий сборной Бразилии  и ФК "Зенит" Xалк одевается в костюм талисмана Зенита и фотографируется с прохожими на Невском',
			'link': '2'
			},
			{ 'title': 'Победоносный Кришито',
			'image': 'img/quests/quest_3.jpg',
			'price': '400000',
			'description': 'Нападающий сборной Бразилии  и ФК "Зенит" Xалк одевается в костюм талисмана Зенита и фотографируется с прохожими на Невском',
			'link': '3'
			},
			{ 'title': 'Победоносный Кришито',
			'image': 'img/quests/quest_1.jpg',
			'price': '400000',
			'description': 'Нападающий сборной Бразилии  и ФК "Зенит" Xалк одевается в костюм талисмана Зенита и фотографируется с прохожими на Невском',
			'link': '1'
			},
			{ 'title': 'Победоносный Кришито',
			'image': 'img/quests/quest_2.jpg',
			'price': '400000',
			'description': 'Нападающий сборной Бразилии  и ФК "Зенит" Xалк одевается в костюм талисмана Зенита и фотографируется с прохожими на Невском',
			'link': '2'
			},
			{ 'title': 'Победоносный Кришито',
			'image': 'img/quests/quest_3.jpg',
			'price': '400000',
			'description': 'Нападающий сборной Бразилии  и ФК "Зенит" Xалк одевается в костюм талисмана Зенита и фотографируется с прохожими на Невском',
			'link': '3'
			}
		],
		fullquest: [{
			'id': 1,
			'title': 'Синегривый ХАЛК1',
			'description': 'Нападающий сборной Бразилии  и ФК "Зенит" Халк одевается в костюм талисмана Зенита и фотографируется с прохожими на Невском',
			'start-date': '12.08.2014',
			'end-date': '12.09.2014',
			'total': '1200000',
			'destination': '500000',
			'action-date': '12.08.2014',
			'gamers': '234',
			'photos': [
				{
					'src': '../img/advita-photos/photo_1.jpg',
					'alt': 'Фото1'
				},{
					'src': '../img/advita-photos/photo_2.jpg',
					'alt': 'Фото2'
				},{
					'src': '../img/advita-photos/photo_3.jpg',
					'alt': 'Фото3'
				},{
					'src': '../img/advita-photos/photo_1.jpg',
					'alt': 'Фото4'
				},
				{
					'src': '../img/advita-photos/photo_1.jpg',
					'alt': 'Фото1'
				},{
					'src': '../img/advita-photos/photo_2.jpg',
					'alt': 'Фото2'
				},{
					'src': '../img/advita-photos/photo_3.jpg',
					'alt': 'Фото3'
				},{
					'src': '../img/advita-photos/photo_1.jpg',
					'alt': 'Фото4'
				}
			],
			'videos': [
				{
					'url': '../img/advita-photos/photo_1.jpg'
				},{
					'url': '../img/advita-photos/photo_1.jpg'
				},{
					'url': '../img/advita-photos/photo_1.jpg'
				},{
					'url': '../img/advita-photos/photo_1.jpg'
				}
			]

		},{
			'id': 2,
			'title': 'Синегривый ХАЛК2',
			'description': 'Нападающий сборной Бразилии  и ФК "Зенит" Халк одевается в костюм талисмана Зенита и фотографируется с прохожими на Невском',
			'start-date': '12.08.2014',
			'end-date': '12.09.2014',
			'total': '1200000',
			'destination': '500000',
			'action-date': '12.08.2014',
			'gamers': '234',
			'photos': [
				{
					'src': '../img/advita-photos/photo_1.jpg',
					'alt': 'Фото1'
				},{
					'src': '../img/advita-photos/photo_2.jpg',
					'alt': 'Фото2'
				},{
					'src': '../img/advita-photos/photo_3.jpg',
					'alt': 'Фото3'
				},{
					'src': '../img/advita-photos/photo_1.jpg',
					'alt': 'Фото4'
				}
			],
			'videos': [
				{
					'url': '../img/advita-photos/photo_1.jpg'
				},{
					'url': '../img/advita-photos/photo_1.jpg'
				},{
					'url': '../img/advita-photos/photo_1.jpg'
				},{
					'url': '../img/advita-photos/photo_1.jpg'
				}
			]
		},{	
			'id': 3,
			'title': 'Синегривый ХАЛК3',
			'description': 'Нападающий сборной Бразилии  и ФК "Зенит" Халк одевается в костюм талисмана Зенита и фотографируется с прохожими на Невском',
			'start-date': '12.08.2014',
			'end-date': '12.09.2014',
			'total': '1200000',
			'destination': '500000',
			'action-date': '12.08.2014',
			'gamers': '234',
			'photos': [
				{
					'src': '../img/advita-photos/photo_1.jpg',
					'alt': 'Фото1'
				},{
					'src': '../img/advita-photos/photo_2.jpg',
					'alt': 'Фото2'
				},{
					'src': '../img/advita-photos/photo_3.jpg',
					'alt': 'Фото3'
				},{
					'src': '../img/advita-photos/photo_1.jpg',
					'alt': 'Фото4'
				}
			],
			'videos': [
				{
					'url': '../img/advita-photos/photo_1.jpg'
				},{
					'url': '../img/advita-photos/photo_1.jpg'
				},{
					'url': '../img/advita-photos/photo_1.jpg'
				},{
					'url': '../img/advita-photos/photo_1.jpg'
				}
			]
		}]
	};

	var render = function (data, destination) {
		var template = $(destination).html();
		Mustache.parse(template);
		return Mustache.render(template, data);
	};
	$("#main-render").html(render(renderData, '#mainTpl'));
	$('#latestQuests').html(render(renderData, '#otherTpl'));



	var docElem = window.document.documentElement, didScroll, scrollPosition;
	// trick to prevent scrolling when opening/closing button
	function noScrollFn() {
		window.scrollTo( scrollPosition ? scrollPosition.x : 0, scrollPosition ? scrollPosition.y : 0 );
	}
	function noScroll() {
		window.removeEventListener( 'scroll', scrollHandler );
		window.addEventListener( 'scroll', noScrollFn );
	}
	function scrollFn() {
		window.addEventListener( 'scroll', scrollHandler );
	}
	function canScroll() {
		window.removeEventListener( 'scroll', noScrollFn );
		scrollFn();
	}
	function scrollHandler() {
		if( !didScroll ) {
			didScroll = true;
			setTimeout( function() { scrollPage(); }, 60 );
		}
	}
	function scrollPage() {
		scrollPosition = { x : window.pageXOffset || docElem.scrollLeft, y : window.pageYOffset || docElem.scrollTop };
		didScroll = false;
	}
	scrollFn();

	var el = document.querySelector( '.morph-button' );
	[].slice.call( document.querySelectorAll( '.morph-button' ) ).forEach( function(bttn) {
		new UIMorphingButton( bttn, {
			closeEl : '.icon-close',
			onBeforeOpen : function() {
				// don't allow to scroll
				noScroll();
				if ($(bttn).hasClass("js-renderOther")){
					var dataLink = parseInt($(bttn).attr("data-id"));
					var $destination = $(bttn).find(".js-renderedContainer");
					var g = _.find(renderData.fullquest, function(x) {
						return x.id === dataLink;
					});
					$destination.html(render(g, '#otherFullTpl'));
					$("#lastRendered").html(render(renderData, '#mainTpl'));
					if ($('#latestPhoto').length) {
						$('#latestPhoto').cuscarousel(6, 0);
					}
				}
			},
			onAfterOpen : function() {
				// can scroll again
				canScroll();
				// add class "noscroll" to body
				classie.addClass( document.body, 'noscroll' );
				// add scroll class to main el
				classie.addClass( bttn, 'scroll' );
				if ($(bttn).hasClass("js-renderOther")){
					$("#renderedQuest").timeline();

				}
			},
			onBeforeClose : function() {
				// remove class "noscroll" to body
				classie.removeClass( document.body, 'noscroll' );
				// remove scroll class from main el
				classie.removeClass( bttn, 'scroll' );
				// don't allow to scroll
				noScroll();
				if ($(bttn).hasClass("js-renderOther")){
					$(bttn).find(".js-renderedContainer").html('');
				}
			},
			onAfterClose : function() {
				// can scroll again
				canScroll();
			}
		} );
	});
};