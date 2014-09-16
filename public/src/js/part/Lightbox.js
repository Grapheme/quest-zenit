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
			'link': '4'
			},
			{ 'title': 'Победоносный Кришито',
			'image': 'img/quests/quest_2.jpg',
			'price': '400000',
			'description': 'Нападающий сборной Бразилии  и ФК "Зенит" Xалк одевается в костюм талисмана Зенита и фотографируется с прохожими на Невском',
			'link': '5'
			},
			{ 'title': 'Победоносный Кришито',
			'image': 'img/quests/quest_3.jpg',
			'price': '400000',
			'description': 'Нападающий сборной Бразилии  и ФК "Зенит" Xалк одевается в костюм талисмана Зенита и фотографируется с прохожими на Невском',
			'link': '6'
			},{ 'title': 'Победоносный Кришито',
			'image': 'img/quests/quest_1.jpg',
			'price': '400000',
			'description': 'Нападающий сборной Бразилии  и ФК "Зенит" Xалк одевается в костюм талисмана Зенита и фотографируется с прохожими на Невском',
			'link': '7'
			},
			{ 'title': 'Победоносный Кришито',
			'image': 'img/quests/quest_2.jpg',
			'price': '400000',
			'description': 'Нападающий сборной Бразилии  и ФК "Зенит" Xалк одевается в костюм талисмана Зенита и фотографируется с прохожими на Невском',
			'link': '8'
			},
			{ 'title': 'Победоносный Кришито',
			'image': 'img/quests/quest_3.jpg',
			'price': '400000',
			'description': 'Нападающий сборной Бразилии  и ФК "Зенит" Xалк одевается в костюм талисмана Зенита и фотографируется с прохожими на Невском',
			'link': '9'
			},
			{ 'title': 'Победоносный Кришито',
			'image': 'img/quests/quest_1.jpg',
			'price': '400000',
			'description': 'Нападающий сборной Бразилии  и ФК "Зенит" Xалк одевается в костюм талисмана Зенита и фотографируется с прохожими на Невском',
			'link': '10'
			},
			{ 'title': 'Победоносный Кришито',
			'image': 'img/quests/quest_2.jpg',
			'price': '400000',
			'description': 'Нападающий сборной Бразилии  и ФК "Зенит" Xалк одевается в костюм талисмана Зенита и фотографируется с прохожими на Невском',
			'link': '11'
			},
			{ 'title': 'Победоносный Кришито',
			'image': 'img/quests/quest_3.jpg',
			'price': '400000',
			'description': 'Нападающий сборной Бразилии  и ФК "Зенит" Xалк одевается в костюм талисмана Зенита и фотографируется с прохожими на Невском',
			'link': '12'
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
			'questImage': 'img/quests/quest_1.jpg',
			'photos': [
				{
					'src': 'img/advita-photos/photo_1.jpg',
					'alt': 'Фото1'
				},{
					'src': 'img/advita-photos/photo_2.jpg',
					'alt': 'Фото2'
				},{
					'src': 'img/advita-photos/photo_3.jpg',
					'alt': 'Фото3'
				},{
					'src': 'img/advita-photos/photo_1.jpg',
					'alt': 'Фото4'
				},
				{
					'src': 'img/advita-photos/photo_1.jpg',
					'alt': 'Фото1'
				},{
					'src': 'img/advita-photos/photo_2.jpg',
					'alt': 'Фото2'
				},{
					'src': 'img/advita-photos/photo_3.jpg',
					'alt': 'Фото3'
				},{
					'src': 'img/advita-photos/photo_1.jpg',
					'alt': 'Фото4'
				}
			],
			'videos': [
				{
					'url': 'gqMaWqS2FVQ'
				},{
					'url': 'w9nEpXIGA2k'
				},{
					'url': 'IvdYyil6IEk'
				},{
					'url': 'UF37Ouze7LY'
				}
			],
			'fulldescription': 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.\r Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.\r Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.\r Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.\r Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.\r Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
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
			'questImage': 'img/quests/quest_2.jpg',
			'photos': [
				{
					'src': 'img/advita-photos/photo_1.jpg',
					'alt': 'Фото1'
				},{
					'src': 'img/advita-photos/photo_2.jpg',
					'alt': 'Фото2'
				},{
					'src': 'img/advita-photos/photo_3.jpg',
					'alt': 'Фото3'
				},{
					'src': 'img/advita-photos/photo_1.jpg',
					'alt': 'Фото4'
				}
			],
			'videos': [
				{
					'url': 'gqMaWqS2FVQ'
				},{
					'url': 'w9nEpXIGA2k'
				},{
					'url': 'IvdYyil6IEk'
				},{
					'url': 'UF37Ouze7LY'
				}
			],
			'fulldescription': 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.\r Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.\r Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.\r Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.\r Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.\r Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
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
			'questImage': 'img/quests/quest_3.jpg',
			'photos': [
				{
					'src': 'img/advita-photos/photo_1.jpg',
					'alt': 'Фото1'
				},{
					'src': 'img/advita-photos/photo_2.jpg',
					'alt': 'Фото2'
				},{
					'src': 'img/advita-photos/photo_3.jpg',
					'alt': 'Фото3'
				},{
					'src': 'img/advita-photos/photo_1.jpg',
					'alt': 'Фото4'
				}
			],
			'videos': [
				{
					'url': 'gqMaWqS2FVQ'
				},{
					'url': 'w9nEpXIGA2k'
				},{
					'url': 'IvdYyil6IEk'
				},{
					'url': 'UF37Ouze7LY'
				}
			],
			'fulldescription': 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.\r Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.\r Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.\r Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.\r Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.\r Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
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
				noScroll();
				//for rendered other past quest only
				if ($(bttn).hasClass("js-renderOther")){
					var dataLink = parseInt($(bttn).attr("data-id"));
					var $destination = $(bttn).find(".js-renderedContainer");

					//get right quest
					var g = _.find(renderData.fullquest, function(x) {
						return x.id === dataLink;
					});

					

					//rendered each past quest
					$destination.html(render(g, '#otherFullTpl').replace(/\r/g, "<br/>"));

					
					//Add share
					var shareLink = window.location.href;
					var shareTitle = $('#ya-share').attr('data-shareTitle');
					var description = $('#ya-share').attr('data-shareDescription');
					var image = window.location.origin + '/' + $('#ya-share').attr('data-shareImage');
					new Ya.share({
						element: 'ya-share',
						theme: 'counter',
						elementStyle: {
							'type': 'none',
							'quickServices': ['vkontakte','facebook','odnoklassniki','twitter','gplus']
						},
						title: shareTitle,
						description: description,
						link: shareLink,
						image: image
					});

					//Render statistic for timeline (colored li into ul)
					$("#lastRendered").html(render(renderData, '#mainTpl'));

					//Carousel for images
					if ($('#latestPhoto').length) {
						$('#latestPhoto').cuscarousel(6, 0);
					}
				}
			},
			onAfterOpen : function() {
				canScroll();
				classie.addClass( document.body, 'noscroll' );
				classie.addClass( bttn, 'scroll' );

				//for rendered other past quest only
				if ($(bttn).hasClass("js-renderOther")){
					$("#renderedQuest").timeline();

					//Colorbox for images
					var group = $(".cbox-photo").attr('data-group'),
						closeButton = '<span class="icon icon-close icon-play-close"><span class="icon icon-play-close-empty"></span></span>',
						nextButton = '<span class="icon quest-next icon-arrow_right"><span class="icon icon-arrow_right-empty"></span></span>',
						prevButton = '<span class="icon icon-arrow_left quest-prev"><span class="icon icon-arrow_left-empty"></span></span>';
					$(".cbox-photo").colorbox({
						next: nextButton,
						previous: prevButton,
						className: 'modal-colorbox',
						close: closeButton,
						maxWidth: '80%',
						maxHeight: '80%',
						rel: group
					});
					$(".js-otherQuestList .js-columnizer").columnize({
						columns: 2
					});
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
