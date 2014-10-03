window.QuestZenit = {};

QuestZenit.Carousel = function() {
    $(".js-scrollableQuests").cuscarousel(6, 1);
    $(".js-scrollableNews").cuscarousel(3, 0);
};

QuestZenit.ColorboxMedia = function() {
    var $container = $("body");
    var closeButton = '<span class="icon icon-close icon-play-close"><span class="icon icon-play-close-empty"></span></span>';
    $container.on("click", ".js-youtube", function(e) {
        e.preventDefault();
        $(this).colorbox({
            className: "modal-colorbox",
            close: closeButton,
            iframe: true,
            innerWidth: 640,
            innerHeight: 390
        });
    });
    $container.on("click", ".js-newsPhoto", function(e) {
        e.preventDefault();
        $(this).colorbox({
            className: "modal-colorbox",
            close: closeButton,
            maxWidth: "80%",
            maxHeight: "80%"
        });
    });
};

QuestZenit.LightBox = function() {
    var renderData = {
        players: [ {
            cash: 5e4,
            "class": "green",
            date: "12.07.2014",
            name: "Черемушкин Иван"
        }, {
            cash: 1e5,
            "class": "lightblue",
            date: "12.07.2014",
            name: "Черемушкин Иван"
        }, {
            cash: 2e3,
            "class": "blue",
            date: "12.07.2014",
            name: "Черемушкин Иван"
        }, {
            cash: 1e3,
            "class": "torquous",
            date: "12.07.2014",
            name: "Черемушкин Иван"
        }, {
            cash: 1e5,
            "class": "orange",
            date: "12.07.2014",
            name: "Черемушкин Иван"
        }, {
            cash: 47e3,
            "class": "red",
            date: "12.07.2014",
            name: "Черемушкин Иван"
        }, {
            cash: 5e4,
            "class": "green",
            date: "12.07.2014",
            name: "Черемушкин Иван"
        }, {
            cash: 1e5,
            "class": "lightblue",
            date: "12.07.2014",
            name: "Черемушкин Иван"
        }, {
            cash: 2e3,
            "class": "blue",
            date: "12.07.2014",
            name: "Черемушкин Иван"
        }, {
            cash: 1e3,
            "class": "torquous",
            date: "12.07.2014",
            name: "Черемушкин Иван"
        }, {
            cash: 1e5,
            "class": "orange",
            date: "12.07.2014",
            name: "Черемушкин Иван"
        }, {
            cash: 47e3,
            "class": "red",
            date: "12.07.2014",
            name: "Черемушкин Иван"
        }, {
            cash: 5e4,
            "class": "green",
            date: "12.07.2014",
            name: "Черемушкин Иван"
        }, {
            cash: 1e5,
            "class": "lightblue",
            date: "12.07.2014",
            name: "Черемушкин Иван"
        }, {
            cash: 2e3,
            "class": "blue",
            date: "12.07.2014",
            name: "Черемушкин Иван"
        }, {
            cash: 1e3,
            "class": "torquous",
            date: "12.07.2014",
            name: "Черемушкин Иван"
        }, {
            cash: 1e5,
            "class": "orange",
            date: "12.07.2014",
            name: "Черемушкин Иван"
        }, {
            cash: 47e3,
            "class": "red",
            date: "12.07.2014",
            name: "Черемушкин Иван"
        }, {
            cash: 5e4,
            "class": "green",
            date: "12.07.2014",
            name: "Черемушкин Иван"
        }, {
            cash: 1e5,
            "class": "lightblue",
            date: "12.07.2014",
            name: "Черемушкин Иван"
        }, {
            cash: 2e3,
            "class": "blue",
            date: "12.07.2014",
            name: "Черемушкин Иван"
        }, {
            cash: 1e3,
            "class": "torquous",
            date: "12.07.2014",
            name: "Черемушкин Иван"
        }, {
            cash: 1e5,
            "class": "orange",
            date: "12.07.2014",
            name: "Черемушкин Иван"
        }, {
            cash: 47e3,
            "class": "red",
            date: "12.07.2014",
            name: "Черемушкин Иван"
        } ],
        quests: [ {
            title: "Победоносный Кришито",
            image: "img/quests/quest_1.jpg",
            price: "400000",
            description: 'Нападающий сборной Бразилии  и ФК "Зенит" Xалк одевается в костюм талисмана Зенита и фотографируется с прохожими на Невском',
            link: "1"
        }, {
            title: "Победоносный Кришито",
            image: "img/quests/quest_2.jpg",
            price: "400000",
            description: 'Нападающий сборной Бразилии  и ФК "Зенит" Xалк одевается в костюм талисмана Зенита и фотографируется с прохожими на Невском',
            link: "2"
        }, {
            title: "Победоносный Кришито",
            image: "img/quests/quest_3.jpg",
            price: "400000",
            description: 'Нападающий сборной Бразилии  и ФК "Зенит" Xалк одевается в костюм талисмана Зенита и фотографируется с прохожими на Невском',
            link: "3"
        }, {
            title: "Победоносный Кришито",
            image: "img/quests/quest_1.jpg",
            price: "400000",
            description: 'Нападающий сборной Бразилии  и ФК "Зенит" Xалк одевается в костюм талисмана Зенита и фотографируется с прохожими на Невском',
            link: "4"
        }, {
            title: "Победоносный Кришито",
            image: "img/quests/quest_2.jpg",
            price: "400000",
            description: 'Нападающий сборной Бразилии  и ФК "Зенит" Xалк одевается в костюм талисмана Зенита и фотографируется с прохожими на Невском',
            link: "5"
        }, {
            title: "Победоносный Кришито",
            image: "img/quests/quest_3.jpg",
            price: "400000",
            description: 'Нападающий сборной Бразилии  и ФК "Зенит" Xалк одевается в костюм талисмана Зенита и фотографируется с прохожими на Невском',
            link: "6"
        }, {
            title: "Победоносный Кришито",
            image: "img/quests/quest_1.jpg",
            price: "400000",
            description: 'Нападающий сборной Бразилии  и ФК "Зенит" Xалк одевается в костюм талисмана Зенита и фотографируется с прохожими на Невском',
            link: "7"
        }, {
            title: "Победоносный Кришито",
            image: "img/quests/quest_2.jpg",
            price: "400000",
            description: 'Нападающий сборной Бразилии  и ФК "Зенит" Xалк одевается в костюм талисмана Зенита и фотографируется с прохожими на Невском',
            link: "8"
        }, {
            title: "Победоносный Кришито",
            image: "img/quests/quest_3.jpg",
            price: "400000",
            description: 'Нападающий сборной Бразилии  и ФК "Зенит" Xалк одевается в костюм талисмана Зенита и фотографируется с прохожими на Невском',
            link: "9"
        }, {
            title: "Победоносный Кришито",
            image: "img/quests/quest_1.jpg",
            price: "400000",
            description: 'Нападающий сборной Бразилии  и ФК "Зенит" Xалк одевается в костюм талисмана Зенита и фотографируется с прохожими на Невском',
            link: "10"
        }, {
            title: "Победоносный Кришито",
            image: "img/quests/quest_2.jpg",
            price: "400000",
            description: 'Нападающий сборной Бразилии  и ФК "Зенит" Xалк одевается в костюм талисмана Зенита и фотографируется с прохожими на Невском',
            link: "11"
        }, {
            title: "Победоносный Кришито",
            image: "img/quests/quest_3.jpg",
            price: "400000",
            description: 'Нападающий сборной Бразилии  и ФК "Зенит" Xалк одевается в костюм талисмана Зенита и фотографируется с прохожими на Невском',
            link: "12"
        } ],
        fullquest: [ {
            id: 1,
            title: "Синегривый ХАЛК1",
            description: 'Нападающий сборной Бразилии  и ФК "Зенит" Халк одевается в костюм талисмана Зенита и фотографируется с прохожими на Невском',
            "start-date": "12.08.2014",
            "end-date": "12.09.2014",
            total: "1200000",
            destination: "500000",
            "action-date": "12.08.2014",
            gamers: "234",
            questImage: "img/quests/quest_1.jpg",
            photos: [ {
                src: "img/advita-photos/photo_1.jpg",
                alt: "Фото1"
            }, {
                src: "img/advita-photos/photo_2.jpg",
                alt: "Фото2"
            }, {
                src: "img/advita-photos/photo_3.jpg",
                alt: "Фото3"
            }, {
                src: "img/advita-photos/photo_1.jpg",
                alt: "Фото4"
            }, {
                src: "img/advita-photos/photo_1.jpg",
                alt: "Фото1"
            }, {
                src: "img/advita-photos/photo_2.jpg",
                alt: "Фото2"
            }, {
                src: "img/advita-photos/photo_3.jpg",
                alt: "Фото3"
            }, {
                src: "img/advita-photos/photo_1.jpg",
                alt: "Фото4"
            } ],
            videos: [ {
                url: "gqMaWqS2FVQ"
            }, {
                url: "w9nEpXIGA2k"
            }, {
                url: "IvdYyil6IEk"
            }, {
                url: "UF37Ouze7LY"
            } ],
            fulldescription: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.\r Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.\r Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.\r Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.\r Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.\r Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
        }, {
            id: 2,
            title: "Синегривый ХАЛК2",
            description: 'Нападающий сборной Бразилии  и ФК "Зенит" Халк одевается в костюм талисмана Зенита и фотографируется с прохожими на Невском',
            "start-date": "12.08.2014",
            "end-date": "12.09.2014",
            total: "1200000",
            destination: "500000",
            "action-date": "12.08.2014",
            gamers: "234",
            questImage: "img/quests/quest_2.jpg",
            photos: [ {
                src: "img/advita-photos/photo_1.jpg",
                alt: "Фото1"
            }, {
                src: "img/advita-photos/photo_2.jpg",
                alt: "Фото2"
            }, {
                src: "img/advita-photos/photo_3.jpg",
                alt: "Фото3"
            }, {
                src: "img/advita-photos/photo_1.jpg",
                alt: "Фото4"
            } ],
            videos: [ {
                url: "gqMaWqS2FVQ"
            }, {
                url: "w9nEpXIGA2k"
            }, {
                url: "IvdYyil6IEk"
            }, {
                url: "UF37Ouze7LY"
            } ],
            fulldescription: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.\r Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.\r Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.\r Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.\r Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.\r Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
        }, {
            id: 3,
            title: "Синегривый ХАЛК3",
            description: 'Нападающий сборной Бразилии  и ФК "Зенит" Халк одевается в костюм талисмана Зенита и фотографируется с прохожими на Невском',
            "start-date": "12.08.2014",
            "end-date": "12.09.2014",
            total: "1200000",
            destination: "500000",
            "action-date": "12.08.2014",
            gamers: "234",
            questImage: "img/quests/quest_3.jpg",
            photos: [ {
                src: "img/advita-photos/photo_1.jpg",
                alt: "Фото1"
            }, {
                src: "img/advita-photos/photo_2.jpg",
                alt: "Фото2"
            }, {
                src: "img/advita-photos/photo_3.jpg",
                alt: "Фото3"
            }, {
                src: "img/advita-photos/photo_1.jpg",
                alt: "Фото4"
            } ],
            videos: [ {
                url: "gqMaWqS2FVQ"
            }, {
                url: "w9nEpXIGA2k"
            }, {
                url: "IvdYyil6IEk"
            }, {
                url: "UF37Ouze7LY"
            } ],
            fulldescription: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.\r Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.\r Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.\r Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.\r Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.\r Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
        } ]
    };
    var render = function(data, destination) {
        var template = $(destination).html();
        Mustache.parse(template);
        return Mustache.render(template, data);
    };
    $("#main-render").html(render(renderData, "#mainTpl"));
    $("#latestQuests").html(render(renderData, "#otherTpl"));
    var docElem = window.document.documentElement, didScroll, scrollPosition;
    function noScrollFn() {
        window.scrollTo(scrollPosition ? scrollPosition.x : 0, scrollPosition ? scrollPosition.y : 0);
    }
    function noScroll() {
        window.removeEventListener("scroll", scrollHandler);
        window.addEventListener("scroll", noScrollFn);
    }
    function scrollFn() {
        window.addEventListener("scroll", scrollHandler);
    }
    function canScroll() {
        window.removeEventListener("scroll", noScrollFn);
        scrollFn();
    }
    function scrollHandler() {
        if (!didScroll) {
            didScroll = true;
            setTimeout(function() {
                scrollPage();
            }, 60);
        }
    }
    function scrollPage() {
        scrollPosition = {
            x: window.pageXOffset || docElem.scrollLeft,
            y: window.pageYOffset || docElem.scrollTop
        };
        didScroll = false;
    }
    scrollFn();
    var el = document.querySelector(".morph-button");
    [].slice.call(document.querySelectorAll(".morph-button")).forEach(function(bttn) {
        new UIMorphingButton(bttn, {
            closeEl: ".icon-close",
            onBeforeOpen: function() {
                noScroll();
                if ($(bttn).hasClass("js-renderOther")) {
                    var dataLink = parseInt($(bttn).attr("data-id"));
                    var $destination = $(bttn).find(".js-renderedContainer");
                    var g = _.find(renderData.fullquest, function(x) {
                        return x.id === dataLink;
                    });
                    $destination.html(render(g, "#otherFullTpl").replace(/\r/g, "<br/>"));
                    var shareLink = window.location.href;
                    var shareTitle = $("#ya-share").attr("data-shareTitle");
                    var description = $("#ya-share").attr("data-shareDescription");
                    var image = window.location.origin + "/" + $("#ya-share").attr("data-shareImage");
                    new Ya.share({
                        element: "ya-share",
                        theme: "counter",
                        elementStyle: {
                            type: "none",
                            quickServices: [ "vkontakte", "facebook", "odnoklassniki", "twitter", "gplus" ]
                        },
                        title: shareTitle,
                        description: description,
                        link: shareLink,
                        image: image
                    });
                    $("#lastRendered").html(render(renderData, "#mainTpl"));
                    if ($("#latestPhoto").length) {
                        $("#latestPhoto").cuscarousel(6, 0);
                    }
                }
            },
            onAfterOpen: function() {
                canScroll();
                classie.addClass(document.body, "noscroll");
                classie.addClass(bttn, "scroll");
                if ($(bttn).hasClass("js-renderOther")) {
                    $("#renderedQuest").timeline();
                    var group = $(".cbox-photo").attr("data-group"), closeButton = '<span class="icon icon-close icon-play-close"><span class="icon icon-play-close-empty"></span></span>', nextButton = '<span class="icon quest-next icon-arrow_right"><span class="icon icon-arrow_right-empty"></span></span>', prevButton = '<span class="icon icon-arrow_left quest-prev"><span class="icon icon-arrow_left-empty"></span></span>';
                    $(".cbox-photo").colorbox({
                        next: nextButton,
                        previous: prevButton,
                        className: "modal-colorbox",
                        close: closeButton,
                        maxWidth: "80%",
                        maxHeight: "80%",
                        rel: group
                    });
                    $(".js-otherQuestList .js-columnizer").columnize({
                        columns: 2
                    });
                }
            },
            onBeforeClose: function() {
                classie.removeClass(document.body, "noscroll");
                classie.removeClass(bttn, "scroll");
                noScroll();
                if ($(bttn).hasClass("js-renderOther")) {
                    $(bttn).find(".js-renderedContainer").html("");
                }
            },
            onAfterClose: function() {
                canScroll();
            }
        });
    });
};

QuestZenit.Pagescroll = function() {
    var mainquest, otherquest, aboutProject, smi, parthers, contacts, bottomS;
    $(".js-scrollTop").on("click", function() {
        $.smoothScroll({
            scrollTarget: "#"
        });
        return false;
    });
    $(".js-easyScroll").smoothScroll().on("click", function(e) {
        e.preventDefault();
        $(".js-easyScroll").removeClass("m-active");
        $(this).addClass("m-active");
    });
    $(window).load(function() {
        mainquest = $("#mainQuest").offset().top;
        otherquest = $("#otherQuests").offset().top - 200;
        aboutProject = $("#aboutProject").offset().top - 200;
        parthers = $("#parthers").offset().top - 200;
        contacts = $("#contacts").offset().top - 200;
    });
    $(window).on("scroll", function() {
        var scrolled = $(window).scrollTop();
        clearTimeout($.data(this, "scrollTimer"));
        $.data(this, "scrollTimer", setTimeout(function() {
            scrollMe();
        }, 200));
        var scrollMe = function() {
            if (scrolled >= 0 && scrolled < otherquest) {
                $(".js-easyScroll").removeClass("m-active");
                $('.js-easyScroll[data-scroll="1"]').addClass("m-active");
            }
            if (scrolled >= otherquest && scrolled < aboutProject) {
                $(".js-easyScroll").removeClass("m-active");
                $('.js-easyScroll[data-scroll="2"]').addClass("m-active");
            }
            if (scrolled >= aboutProject && scrolled < parthers) {
                $(".js-easyScroll").removeClass("m-active");
                $('.js-easyScroll[data-scroll="3"]').addClass("m-active");
                $(".js-easyScroll").addClass("m-gray");
            } else {
                $(".js-easyScroll").removeClass("m-gray");
            }
            if (scrolled >= parthers && scrolled < parthers + 500) {
                $(".js-easyScroll").removeClass("m-active");
                $('.js-easyScroll[data-scroll="5"]').addClass("m-active");
            }
            if (scrolled >= parthers + 500) {
                $(".js-easyScroll").removeClass("m-active");
                $('.js-easyScroll[data-scroll="6"]').addClass("m-active");
            }
        };
    });
};

QuestZenit.PopupOpen = function() {
    var popupNumber = window.location.hash.substring(1), hash = window.location.pathname;
    $(".icon-close").on("click", function() {
        window.location.hash = "";
    });
    $(window).load(function() {
        $(".js-renderOther").each(function() {
            var $this = $(this);
            if (popupNumber === $this.attr("data-id")) {
                var $button = $this.find(".js-openPopup");
                $button.trigger("click");
            }
        });
    });
};

QuestZenit.Render = function() {};

QuestZenit.MainShare = function() {
    var shareLink = window.location.origin + window.location.pathname;
    var shareTitle = $("#ya-shareMain").attr("data-shareTitle");
    var description = $("#ya-shareMain").attr("data-shareDescription");
    var image = window.location.origin + "/" + $("#ya-shareMain").attr("data-shareImage");
    new Ya.share({
        element: "ya-shareMain",
        theme: "counter",
        elementStyle: {
            type: "none",
            quickServices: [ "vkontakte", "facebook", "odnoklassniki", "twitter", "gplus" ]
        },
        title: shareTitle,
        description: description,
        link: shareLink,
        image: image
    });
};

QuestZenit.Tabs = function() {
    $("#paymentTabs").tabs({
        active: 0
    });
};

QuestZenit.TimeLine = function() {
    $.fn.timeline = function() {
        var finalPrice = 0;
        var currentPrice = 0;
        var $container = $(this), $list = $container.find(".js-paymentList"), status = $container.attr("data-status"), destination = parseInt($container.find(".js-destination").attr("data-destination")), total = parseInt($container.find(".js-totalCash").attr("data-total")), buttonWidth, $to = $container.find(".js-destinationButton"), x = "", $button = $container.find(".js-totalButton"), $xDate = $container.find(".js-xDate"), $each = $container.find(".js-showEach"), $line = $container.find(".js-line"), $startDate = $container.find(".js-temimelineStart"), $endDate = $container.find(".js-temimelineEnd"), startDate = moment($startDate.attr("data-start"), "DD.MM.YYYY"), endDate = moment($endDate.attr("data-end"), "DD.MM.YYYY"), today = moment(), firstDate = today.diff(startDate, "days") + " дн.", secondDate = endDate.diff(today, "days") + " дн.", $renderDataStart = $container.find(".js-startButton"), $renderDataEnd = $container.find(".js-endButton"), positionright = "10%", $startPrice = $container.find(".js-startPrice"), refStatus1 = endDate.diff(today, "days"), refStatus2 = today.diff(startDate, "days"), $overline = $container.find(".js-overline");
        if (destination >= total) {
            buttonWidth = total / destination * 100;
            x = "";
        } else {
            buttonWidth = destination / total * 100;
            x = "yes";
        }
        setTimeout(function() {
            gameStatus();
        }, 3e3);
        var gameStatus = function() {
            if (refStatus1 > 0 && refStatus2 > 0) {
                status = "online";
            } else {
                status = "offline";
            }
            if (status === "online") {
                timeline(80);
                $list.css("padding-right", "20%");
                $renderDataStart.addClass("m-active").find("span").html(firstDate);
                $renderDataEnd.addClass("m-active").find("span").html(secondDate);
                if (destination < total) {
                    $xDate.show();
                    $line.addClass("m-online");
                }
            } else {
                timeline(100);
                if (destination < total) {
                    $xDate.hide();
                    $line.addClass("m-online");
                }
            }
        };
        var timeline = function(persent) {
            if (x === "yes") {
                $button.css({
                    left: persent + "%",
                    opacity: 1
                });
                $overline.css("width", persent + "%").addClass("m-active");
                $to.css("left", buttonWidth + "%");
                $renderDataStart.css("left", "40%");
                $renderDataEnd.css("right", "10%");
                $to.addClass("m-active");
            } else {
                $overline.css("width", buttonWidth + "%").addClass("m-active");
                $button.css({
                    left: buttonWidth + "%",
                    opacity: 1
                });
                if (buttonWidth > 80) {
                    $to.addClass("m-disactive");
                }
                if (buttonWidth >= 20) {
                    $renderDataStart.css("left", buttonWidth / 2 + "%");
                } else {
                    $renderDataStart.css("display", "none");
                    $startPrice.css("display", "none");
                }
                if (buttonWidth <= 80) {
                    positionright = (100 - buttonWidth) / 2 + "%";
                    $renderDataEnd.css("right", positionright);
                } else {
                    $renderDataEnd.css("display", "none");
                }
            }
            $each.each(function() {
                var $this = $(this), prise = $this.attr("data-size"), width;
                if (destination >= total) {
                    width = prise / destination * 100;
                } else {
                    width = prise / total * 100;
                }
                $this.css("width", width + "%");
            });
        };
    };
    $("#mainQuest").timeline();
    var b = "### ### ### ###";
    function ConvertNumber(a, b) {
        var tail = format.lastIndexOf(".");
        number = number.toString();
        tail = tail > -1 ? format.substr(tail) : "";
        if (tail.length > 0) {
            if (tail.charAt(1) == "#") {
                tail = number.substr(number.lastIndexOf("."), tail.length);
            }
        }
        number = number.replace(/\..*|[^0-9]/g, "").split("");
        format = format.replace(/\..*/g, "").split("");
        for (var i = format.length - 1; i > -1; i--) {
            if (format[i] == "#") {
                format[i] = number.pop();
            }
        }
        return number.join("") + format.join("") + tail;
    }
};

$(document).ready(function() {
    QuestZenit.LightBox();
    QuestZenit.MainShare();
    QuestZenit.TimeLine();
    QuestZenit.Carousel();
    QuestZenit.Pagescroll();
    QuestZenit.Tabs();
    QuestZenit.ColorboxMedia();
    QuestZenit.PopupOpen();
});
//# sourceMappingURL=main.map