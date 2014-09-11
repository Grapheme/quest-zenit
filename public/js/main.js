window.QuestZenit = {};

QuestZenit.Carousel = function() {
    $(".js-scrollableQuests").cuscarousel(6, 1);
    $(".js-scrollableNews").cuscarousel(3, 0);
};

QuestZenit.LightBox = function() {
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
            },
            onAfterOpen: function() {
                canScroll();
                classie.addClass(document.body, "noscroll");
                classie.addClass(el, "scroll");
            },
            onBeforeClose: function() {
                classie.removeClass(document.body, "noscroll");
                classie.removeClass(el, "scroll");
                noScroll();
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
        smi = $("#smi").offset().top - 200;
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
            if (scrolled >= aboutProject && scrolled < smi) {
                $(".js-easyScroll").removeClass("m-active");
                $('.js-easyScroll[data-scroll="3"]').addClass("m-active");
                $(".js-easyScroll").addClass("m-gray");
            } else {
                $(".js-easyScroll").removeClass("m-gray");
            }
            if (scrolled >= smi && scrolled < parthers) {
                $(".js-easyScroll").removeClass("m-active");
                $('.js-easyScroll[data-scroll="4"]').addClass("m-active");
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

QuestZenit.Render = function() {
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
            link: "#"
        }, {
            title: "Победоносный Кришито",
            image: "img/quests/quest_2.jpg",
            price: "400000",
            description: 'Нападающий сборной Бразилии  и ФК "Зенит" Xалк одевается в костюм талисмана Зенита и фотографируется с прохожими на Невском',
            link: "#"
        }, {
            title: "Победоносный Кришито",
            image: "img/quests/quest_3.jpg",
            price: "400000",
            description: 'Нападающий сборной Бразилии  и ФК "Зенит" Xалк одевается в костюм талисмана Зенита и фотографируется с прохожими на Невском',
            link: "#"
        }, {
            title: "Победоносный Кришито",
            image: "img/quests/quest_1.jpg",
            price: "400000",
            description: 'Нападающий сборной Бразилии  и ФК "Зенит" Xалк одевается в костюм талисмана Зенита и фотографируется с прохожими на Невском',
            link: "#"
        }, {
            title: "Победоносный Кришито",
            image: "img/quests/quest_2.jpg",
            price: "400000",
            description: 'Нападающий сборной Бразилии  и ФК "Зенит" Xалк одевается в костюм талисмана Зенита и фотографируется с прохожими на Невском',
            link: "#"
        }, {
            title: "Победоносный Кришито",
            image: "img/quests/quest_3.jpg",
            price: "400000",
            description: 'Нападающий сборной Бразилии  и ФК "Зенит" Xалк одевается в костюм талисмана Зенита и фотографируется с прохожими на Невском',
            link: "#"
        }, {
            title: "Победоносный Кришито",
            image: "img/quests/quest_1.jpg",
            price: "400000",
            description: 'Нападающий сборной Бразилии  и ФК "Зенит" Xалк одевается в костюм талисмана Зенита и фотографируется с прохожими на Невском',
            link: "#"
        }, {
            title: "Победоносный Кришито",
            image: "img/quests/quest_2.jpg",
            price: "400000",
            description: 'Нападающий сборной Бразилии  и ФК "Зенит" Xалк одевается в костюм талисмана Зенита и фотографируется с прохожими на Невском',
            link: "#"
        }, {
            title: "Победоносный Кришито",
            image: "img/quests/quest_3.jpg",
            price: "400000",
            description: 'Нападающий сборной Бразилии  и ФК "Зенит" Xалк одевается в костюм талисмана Зенита и фотографируется с прохожими на Невском',
            link: "#"
        }, {
            title: "Победоносный Кришито",
            image: "img/quests/quest_1.jpg",
            price: "400000",
            description: 'Нападающий сборной Бразилии  и ФК "Зенит" Xалк одевается в костюм талисмана Зенита и фотографируется с прохожими на Невском',
            link: "#"
        }, {
            title: "Победоносный Кришито",
            image: "img/quests/quest_2.jpg",
            price: "400000",
            description: 'Нападающий сборной Бразилии  и ФК "Зенит" Xалк одевается в костюм талисмана Зенита и фотографируется с прохожими на Невском',
            link: "#"
        }, {
            title: "Победоносный Кришито",
            image: "img/quests/quest_3.jpg",
            price: "400000",
            description: 'Нападающий сборной Бразилии  и ФК "Зенит" Xалк одевается в костюм талисмана Зенита и фотографируется с прохожими на Невском',
            link: "#"
        } ]
    };
    var render = function(data, destination) {
        var template = $(destination).html();
        Mustache.parse(template);
        return Mustache.render(template, data);
    };
    $("#main-render").html(render(renderData, "#mainTpl"));
    $("#latestQuests").html(render(renderData, "#otherTpl"));
};

QuestZenit.Social = {
    getUrl: {
        twitter: function(o) {
            var ar = [];
            ar.push("https://twitter.com/intent/tweet?");
            if (o.title) {
                ar.push("text=", encodeURIComponent(o.title), "&");
            }
            ar.push("url=", encodeURIComponent(o.url));
            return ar.join("");
        },
        vk: function(o) {
            var ar = [];
            ar.push("http://vk.com/share.php?");
            ar.push("url=", encodeURIComponent(o.url));
            if (o.title) {
                ar.push("&title=", encodeURIComponent(o.title));
            }
            if (o.description) {
                ar.push("&description=", encodeURIComponent(o.description));
            }
            if (o.image) {
                ar.push("&image=", encodeURIComponent(o.image));
            }
            ar.push("&noparse=true");
            return ar.join("");
        },
        fb: function(o) {
            var ar = [];
            ar.push("http://www.facebook.com/sharer.php?s=100");
            ar.push("&p[url]=", encodeURIComponent(o.url));
            if (o.title) {
                ar.push("&p[title]=", encodeURIComponent(o.title));
            }
            if (o.description) {
                ar.push("&p[summary]=", encodeURIComponent(o.description));
            }
            if (o.image) {
                ar.push("&p[images][0]=", encodeURIComponent(o.image));
            }
            return ar.join("");
        },
        ok: function(o) {
            var ar = [];
            ar.push("http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1");
            ar.push("&st._surl=", encodeURIComponent(o.url));
            ar.push("&st.comments=", encodeURIComponent(o.description));
            return ar.join("");
        },
        gp: function(o) {
            var ar = [];
            ar.push("https://plus.google.com/share");
            ar.push("?url=", encodeURIComponent(o.url));
            return ar.join("");
        }
    },
    updateBlock: function($block, url) {
        url = url || $block.data("url");
    },
    prepareLinks: function($block, params) {
        $block.on("click", ".js-shareButton", function() {
            window.open(QuestZenit.Social.getUrl[this.getAttribute("data-type")](params), "", "toolbar=0,status=0,width=626,height=436");
        });
    },
    updateStatic: function() {
        $(".js-shareBlock").each(function() {
            QuestZenit.Social.updateBlock($(this));
        });
    }
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
        var $container = $(this), $list = $container.find(".js-paymentList"), status = $container.attr("data-status"), destination = parseInt($container.find(".js-destination").attr("data-destination")), total = parseInt($container.find(".js-totalCash").attr("data-total")), buttonWidth, $to = $container.find(".js-destinationButton"), x = "", $button = $container.find(".js-totalButton"), $xDate = $container.find(".js-xDate"), $each = $container.find(".js-showEach"), $line = $container.find(".js-line"), $overline = $container.find(".js-overline");
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
            if (status === "online") {
                timeline(80);
                $list.css("padding-right", "20%");
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
            } else {
                $overline.css("width", buttonWidth + "%").addClass("m-active");
                $button.css({
                    left: buttonWidth + "%",
                    opacity: 1
                });
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
    QuestZenit.Render();
    QuestZenit.TimeLine();
    QuestZenit.Social.updateStatic();
    QuestZenit.Carousel();
    QuestZenit.Pagescroll();
    QuestZenit.LightBox();
    QuestZenit.Tabs();
});
//# sourceMappingURL=main.map