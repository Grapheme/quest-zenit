QuestZenit.Social = {
    getUrl: {
        twitter: function(o) {
            var ar = [];
            ar.push('https://twitter.com/intent/tweet?');
            if (o.title) {
                ar.push('text=', encodeURIComponent(o.title), '&');
            }
            ar.push('url=', encodeURIComponent(o.url));
            return ar.join('');
        },
        vk: function(o) {
            var ar = [];
            ar.push('http://vk.com/share.php?');
            ar.push('url=', encodeURIComponent(o.url));
            if (o.title) {
                ar.push('&title=', encodeURIComponent(o.title));
            }
            if (o.description) {
                ar.push('&description=', encodeURIComponent(o.description));
            }
            if (o.image) {
                ar.push('&image=', encodeURIComponent(o.image));
            }
            ar.push('&noparse=true');
            return ar.join('');
        },
        fb: function(o) {
            var ar = [];
            ar.push('http://www.facebook.com/sharer.php?s=100');
            ar.push('&p[url]=', encodeURIComponent(o.url));
            if (o.title) {
                ar.push('&p[title]=', encodeURIComponent(o.title));
            }
            if (o.description) {
                ar.push('&p[summary]=', encodeURIComponent(o.description));
            }
            if (o.image) {
                ar.push('&p[images][0]=', encodeURIComponent(o.image));
            }
            return ar.join('');
        },
        ok: function(o) {
            var ar = [];
            ar.push('http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1');
            ar.push('&st._surl=', encodeURIComponent(o.url));
            ar.push('&st.comments=', encodeURIComponent(o.description));
            return ar.join('');
        },
        gp: function(o) {
            var ar = [];
            ar.push('https://plus.google.com/share');
            ar.push('?url=', encodeURIComponent(o.url));
            return ar.join('');
        }
    },
    updateBlock: function($block, url) {
        url = url || $block.data('url');
        /*$.ajax({
            url: SKADictionary.main.socialUrl,
            type: 'get',
            dataType: 'json',
            data: {
                url: url
            }
        }).done(function(data) {
            $block.find('.js-count').each(function() {
                $(this).text(data[$(this).data('type')]);
                // Webkit hack
                this.style.display = 'none';
                this.offsetHeight1 = this.offsetHeight;
                this.style.display = 'inline-block';
            });
        });*/
    },
    prepareLinks: function($block, params) {
        $block.on('click', '.js-shareButton', function() {
            window.open(QuestZenit.Social.getUrl[this.getAttribute('data-type')](params), '', 'toolbar=0,status=0,width=626,height=436');
        });
    },
    updateStatic: function() {
        $('.js-shareBlock').each(function() {
            QuestZenit.Social.updateBlock($(this));
        });
    }
};