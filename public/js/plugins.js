/*!
	Colorbox v1.5.13 - 2014-08-04
	jQuery lightbox and modal window plugin
	(c) 2014 Jack Moore - http://www.jacklmoore.com/colorbox
	license: http://www.opensource.org/licenses/mit-license.php
*/
!function(a,b,c){function d(c,d,e){var f=b.createElement(c);return d&&(f.id=_+d),e&&(f.style.cssText=e),a(f)}function e(){return c.innerHeight?c.innerHeight:a(c).height()}function f(b,c){c!==Object(c)&&(c={}),this.cache={},this.el=b,this.value=function(b){var d;return void 0===this.cache[b]&&(d=a(this.el).attr("data-cbox-"+b),void 0!==d?this.cache[b]=d:void 0!==c[b]?this.cache[b]=c[b]:void 0!==Z[b]&&(this.cache[b]=Z[b])),this.cache[b]},this.get=function(b){var c=this.value(b);return a.isFunction(c)?c.call(this.el,this):c}}function g(a){var b=A.length,c=(R+a)%b;return 0>c?b+c:c}function h(a,b){return Math.round((/%/.test(a)?("x"===b?B.width():e())/100:1)*parseInt(a,10))}function i(a,b){return a.get("photo")||a.get("photoRegex").test(b)}function j(a,b){return a.get("retinaUrl")&&c.devicePixelRatio>1?b.replace(a.get("photoRegex"),a.get("retinaSuffix")):b}function k(a){"contains"in t[0]&&!t[0].contains(a.target)&&a.target!==s[0]&&(a.stopPropagation(),t.focus())}function l(a){l.str!==a&&(t.add(s).removeClass(l.str).addClass(a),l.str=a)}function m(b){R=0,b&&b!==!1&&"nofollow"!==b?(A=a("."+ab).filter(function(){var c=a.data(this,$),d=new f(this,c);return d.get("rel")===b}),R=A.index(M.el),-1===R&&(A=A.add(M.el),R=A.length-1)):A=a(M.el)}function n(c){a(b).trigger(c),hb.triggerHandler(c)}function o(c){var e;if(!V){if(e=a(c).data($),M=new f(c,e),m(M.get("rel")),!T){T=U=!0,l(M.get("className")),t.css({visibility:"hidden",display:"block",opacity:""}),C=d(ib,"LoadedContent","width:0; height:0; overflow:hidden; visibility:hidden"),v.css({width:"",height:""}).append(C),N=w.height()+z.height()+v.outerHeight(!0)-v.height(),O=x.width()+y.width()+v.outerWidth(!0)-v.width(),P=C.outerHeight(!0),Q=C.outerWidth(!0);var g=h(M.get("initialWidth"),"x"),i=h(M.get("initialHeight"),"y"),j=M.get("maxWidth"),o=M.get("maxHeight");M.w=(j!==!1?Math.min(g,h(j,"x")):g)-Q-O,M.h=(o!==!1?Math.min(i,h(o,"y")):i)-P-N,C.css({width:"",height:M.h}),X.position(),n(bb),M.get("onOpen"),L.add(F).hide(),t.focus(),M.get("trapFocus")&&b.addEventListener&&(b.addEventListener("focus",k,!0),hb.one(fb,function(){b.removeEventListener("focus",k,!0)})),M.get("returnFocus")&&hb.one(fb,function(){a(M.el).focus()})}var p=parseFloat(M.get("opacity"));s.css({opacity:p===p?p:"",cursor:M.get("overlayClose")?"pointer":"",visibility:"visible"}).show(),M.get("closeButton")?K.html(M.get("close")).appendTo(v):K.appendTo("<div/>"),r()}}function p(){!t&&b.body&&(Y=!1,B=a(c),t=d(ib).attr({id:$,"class":a.support.opacity===!1?_+"IE":"",role:"dialog",tabindex:"-1"}).hide(),s=d(ib,"Overlay").hide(),E=a([d(ib,"LoadingOverlay")[0],d(ib,"LoadingGraphic")[0]]),u=d(ib,"Wrapper"),v=d(ib,"Content").append(F=d(ib,"Title"),G=d(ib,"Current"),J=a('<button type="button"/>').attr({id:_+"Previous"}),I=a('<button type="button"/>').attr({id:_+"Next"}),H=d("button","Slideshow"),E),K=a('<button type="button"/>').attr({id:_+"Close"}),u.append(d(ib).append(d(ib,"TopLeft"),w=d(ib,"TopCenter"),d(ib,"TopRight")),d(ib,!1,"clear:left").append(x=d(ib,"MiddleLeft"),v,y=d(ib,"MiddleRight")),d(ib,!1,"clear:left").append(d(ib,"BottomLeft"),z=d(ib,"BottomCenter"),d(ib,"BottomRight"))).find("div div").css({"float":"left"}),D=d(ib,!1,"position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"),L=I.add(J).add(G).add(H),a(b.body).append(s,t.append(u,D)))}function q(){function c(a){a.which>1||a.shiftKey||a.altKey||a.metaKey||a.ctrlKey||(a.preventDefault(),o(this))}return t?(Y||(Y=!0,I.click(function(){X.next()}),J.click(function(){X.prev()}),K.click(function(){X.close()}),s.click(function(){M.get("overlayClose")&&X.close()}),a(b).bind("keydown."+_,function(a){var b=a.keyCode;T&&M.get("escKey")&&27===b&&(a.preventDefault(),X.close()),T&&M.get("arrowKey")&&A[1]&&!a.altKey&&(37===b?(a.preventDefault(),J.click()):39===b&&(a.preventDefault(),I.click()))}),a.isFunction(a.fn.on)?a(b).on("click."+_,"."+ab,c):a("."+ab).live("click."+_,c)),!0):!1}function r(){var b,e,f,g=X.prep,k=++jb;if(U=!0,S=!1,n(gb),n(cb),M.get("onLoad"),M.h=M.get("height")?h(M.get("height"),"y")-P-N:M.get("innerHeight")&&h(M.get("innerHeight"),"y"),M.w=M.get("width")?h(M.get("width"),"x")-Q-O:M.get("innerWidth")&&h(M.get("innerWidth"),"x"),M.mw=M.w,M.mh=M.h,M.get("maxWidth")&&(M.mw=h(M.get("maxWidth"),"x")-Q-O,M.mw=M.w&&M.w<M.mw?M.w:M.mw),M.get("maxHeight")&&(M.mh=h(M.get("maxHeight"),"y")-P-N,M.mh=M.h&&M.h<M.mh?M.h:M.mh),b=M.get("href"),W=setTimeout(function(){E.show()},100),M.get("inline")){var l=a(b);f=a("<div>").hide().insertBefore(l),hb.one(gb,function(){f.replaceWith(l)}),g(l)}else M.get("iframe")?g(" "):M.get("html")?g(M.get("html")):i(M,b)?(b=j(M,b),S=new Image,a(S).addClass(_+"Photo").bind("error",function(){g(d(ib,"Error").html(M.get("imgError")))}).one("load",function(){k===jb&&setTimeout(function(){var b;a.each(["alt","longdesc","aria-describedby"],function(b,c){var d=a(M.el).attr(c)||a(M.el).attr("data-"+c);d&&S.setAttribute(c,d)}),M.get("retinaImage")&&c.devicePixelRatio>1&&(S.height=S.height/c.devicePixelRatio,S.width=S.width/c.devicePixelRatio),M.get("scalePhotos")&&(e=function(){S.height-=S.height*b,S.width-=S.width*b},M.mw&&S.width>M.mw&&(b=(S.width-M.mw)/S.width,e()),M.mh&&S.height>M.mh&&(b=(S.height-M.mh)/S.height,e())),M.h&&(S.style.marginTop=Math.max(M.mh-S.height,0)/2+"px"),A[1]&&(M.get("loop")||A[R+1])&&(S.style.cursor="pointer",S.onclick=function(){X.next()}),S.style.width=S.width+"px",S.style.height=S.height+"px",g(S)},1)}),S.src=b):b&&D.load(b,M.get("data"),function(b,c){k===jb&&g("error"===c?d(ib,"Error").html(M.get("xhrError")):a(this).contents())})}var s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z={html:!1,photo:!1,iframe:!1,inline:!1,transition:"elastic",speed:300,fadeOut:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,opacity:.9,preloading:!0,className:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:void 0,closeButton:!0,fastIframe:!0,open:!1,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,retinaImage:!1,retinaUrl:!1,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",returnFocus:!0,trapFocus:!0,onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,rel:function(){return this.rel},href:function(){return a(this).attr("href")},title:function(){return this.title}},$="colorbox",_="cbox",ab=_+"Element",bb=_+"_open",cb=_+"_load",db=_+"_complete",eb=_+"_cleanup",fb=_+"_closed",gb=_+"_purge",hb=a("<a/>"),ib="div",jb=0,kb={},lb=function(){function a(){clearTimeout(g)}function b(){(M.get("loop")||A[R+1])&&(a(),g=setTimeout(X.next,M.get("slideshowSpeed")))}function c(){H.html(M.get("slideshowStop")).unbind(i).one(i,d),hb.bind(db,b).bind(cb,a),t.removeClass(h+"off").addClass(h+"on")}function d(){a(),hb.unbind(db,b).unbind(cb,a),H.html(M.get("slideshowStart")).unbind(i).one(i,function(){X.next(),c()}),t.removeClass(h+"on").addClass(h+"off")}function e(){f=!1,H.hide(),a(),hb.unbind(db,b).unbind(cb,a),t.removeClass(h+"off "+h+"on")}var f,g,h=_+"Slideshow_",i="click."+_;return function(){f?M.get("slideshow")||(hb.unbind(eb,e),e()):M.get("slideshow")&&A[1]&&(f=!0,hb.one(eb,e),M.get("slideshowAuto")?c():d(),H.show())}}();a[$]||(a(p),X=a.fn[$]=a[$]=function(b,c){var d,e=this;if(b=b||{},a.isFunction(e))e=a("<a/>"),b.open=!0;else if(!e[0])return e;return e[0]?(p(),q()&&(c&&(b.onComplete=c),e.each(function(){var c=a.data(this,$)||{};a.data(this,$,a.extend(c,b))}).addClass(ab),d=new f(e[0],b),d.get("open")&&o(e[0])),e):e},X.position=function(b,c){function d(){w[0].style.width=z[0].style.width=v[0].style.width=parseInt(t[0].style.width,10)-O+"px",v[0].style.height=x[0].style.height=y[0].style.height=parseInt(t[0].style.height,10)-N+"px"}var f,g,i,j=0,k=0,l=t.offset();if(B.unbind("resize."+_),t.css({top:-9e4,left:-9e4}),g=B.scrollTop(),i=B.scrollLeft(),M.get("fixed")?(l.top-=g,l.left-=i,t.css({position:"fixed"})):(j=g,k=i,t.css({position:"absolute"})),k+=M.get("right")!==!1?Math.max(B.width()-M.w-Q-O-h(M.get("right"),"x"),0):M.get("left")!==!1?h(M.get("left"),"x"):Math.round(Math.max(B.width()-M.w-Q-O,0)/2),j+=M.get("bottom")!==!1?Math.max(e()-M.h-P-N-h(M.get("bottom"),"y"),0):M.get("top")!==!1?h(M.get("top"),"y"):Math.round(Math.max(e()-M.h-P-N,0)/2),t.css({top:l.top,left:l.left,visibility:"visible"}),u[0].style.width=u[0].style.height="9999px",f={width:M.w+Q+O,height:M.h+P+N,top:j,left:k},b){var m=0;a.each(f,function(a){return f[a]!==kb[a]?void(m=b):void 0}),b=m}kb=f,b||t.css(f),t.dequeue().animate(f,{duration:b||0,complete:function(){d(),U=!1,u[0].style.width=M.w+Q+O+"px",u[0].style.height=M.h+P+N+"px",M.get("reposition")&&setTimeout(function(){B.bind("resize."+_,X.position)},1),c&&c()},step:d})},X.resize=function(a){var b;T&&(a=a||{},a.width&&(M.w=h(a.width,"x")-Q-O),a.innerWidth&&(M.w=h(a.innerWidth,"x")),C.css({width:M.w}),a.height&&(M.h=h(a.height,"y")-P-N),a.innerHeight&&(M.h=h(a.innerHeight,"y")),a.innerHeight||a.height||(b=C.scrollTop(),C.css({height:"auto"}),M.h=C.height()),C.css({height:M.h}),b&&C.scrollTop(b),X.position("none"===M.get("transition")?0:M.get("speed")))},X.prep=function(c){function e(){return M.w=M.w||C.width(),M.w=M.mw&&M.mw<M.w?M.mw:M.w,M.w}function h(){return M.h=M.h||C.height(),M.h=M.mh&&M.mh<M.h?M.mh:M.h,M.h}if(T){var k,m="none"===M.get("transition")?0:M.get("speed");C.remove(),C=d(ib,"LoadedContent").append(c),C.hide().appendTo(D.show()).css({width:e(),overflow:M.get("scrolling")?"auto":"hidden"}).css({height:h()}).prependTo(v),D.hide(),a(S).css({"float":"none"}),l(M.get("className")),k=function(){function c(){a.support.opacity===!1&&t[0].style.removeAttribute("filter")}var d,e,h=A.length;T&&(e=function(){clearTimeout(W),E.hide(),n(db),M.get("onComplete")},F.html(M.get("title")).show(),C.show(),h>1?("string"==typeof M.get("current")&&G.html(M.get("current").replace("{current}",R+1).replace("{total}",h)).show(),I[M.get("loop")||h-1>R?"show":"hide"]().html(M.get("next")),J[M.get("loop")||R?"show":"hide"]().html(M.get("previous")),lb(),M.get("preloading")&&a.each([g(-1),g(1)],function(){var c,d=A[this],e=new f(d,a.data(d,$)),g=e.get("href");g&&i(e,g)&&(g=j(e,g),c=b.createElement("img"),c.src=g)})):L.hide(),M.get("iframe")?(d=b.createElement("iframe"),"frameBorder"in d&&(d.frameBorder=0),"allowTransparency"in d&&(d.allowTransparency="true"),M.get("scrolling")||(d.scrolling="no"),a(d).attr({src:M.get("href"),name:(new Date).getTime(),"class":_+"Iframe",allowFullScreen:!0}).one("load",e).appendTo(C),hb.one(gb,function(){d.src="//about:blank"}),M.get("fastIframe")&&a(d).trigger("load")):e(),"fade"===M.get("transition")?t.fadeTo(m,1,c):c())},"fade"===M.get("transition")?t.fadeTo(m,0,function(){X.position(0,k)}):X.position(m,k)}},X.next=function(){!U&&A[1]&&(M.get("loop")||A[R+1])&&(R=g(1),o(A[R]))},X.prev=function(){!U&&A[1]&&(M.get("loop")||R)&&(R=g(-1),o(A[R]))},X.close=function(){T&&!V&&(V=!0,T=!1,n(eb),M.get("onCleanup"),B.unbind("."+_),s.fadeTo(M.get("fadeOut")||0,0),t.stop().fadeTo(M.get("fadeOut")||0,0,function(){t.hide(),s.hide(),n(gb),C.remove(),setTimeout(function(){V=!1,n(fb),M.get("onClosed")},1)}))},X.remove=function(){t&&(t.stop(),a[$].close(),t.stop(!1,!0).remove(),s.remove(),V=!1,t=null,a("."+ab).removeData($).removeClass(ab),a(b).unbind("click."+_).unbind("keydown."+_))},X.element=function(){return a(M.el)},X.settings=Z)}(jQuery,document,window),function(){var a=this,b=a._,c=Array.prototype,d=Object.prototype,e=Function.prototype,f=c.push,g=c.slice,h=c.concat,i=d.toString,j=d.hasOwnProperty,k=Array.isArray,l=Object.keys,m=e.bind,n=function(a){return a instanceof n?a:this instanceof n?void(this._wrapped=a):new n(a)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=n),exports._=n):a._=n,n.VERSION="1.7.0";var o=function(a,b,c){if(void 0===b)return a;switch(null==c?3:c){case 1:return function(c){return a.call(b,c)};case 2:return function(c,d){return a.call(b,c,d)};case 3:return function(c,d,e){return a.call(b,c,d,e)};case 4:return function(c,d,e,f){return a.call(b,c,d,e,f)}}return function(){return a.apply(b,arguments)}};n.iteratee=function(a,b,c){return null==a?n.identity:n.isFunction(a)?o(a,b,c):n.isObject(a)?n.matches(a):n.property(a)},n.each=n.forEach=function(a,b,c){if(null==a)return a;b=o(b,c);var d,e=a.length;if(e===+e)for(d=0;e>d;d++)b(a[d],d,a);else{var f=n.keys(a);for(d=0,e=f.length;e>d;d++)b(a[f[d]],f[d],a)}return a},n.map=n.collect=function(a,b,c){if(null==a)return[];b=n.iteratee(b,c);for(var d,e=a.length!==+a.length&&n.keys(a),f=(e||a).length,g=Array(f),h=0;f>h;h++)d=e?e[h]:h,g[h]=b(a[d],d,a);return g};var p="Reduce of empty array with no initial value";n.reduce=n.foldl=n.inject=function(a,b,c,d){null==a&&(a=[]),b=o(b,d,4);var e,f=a.length!==+a.length&&n.keys(a),g=(f||a).length,h=0;if(arguments.length<3){if(!g)throw new TypeError(p);c=a[f?f[h++]:h++]}for(;g>h;h++)e=f?f[h]:h,c=b(c,a[e],e,a);return c},n.reduceRight=n.foldr=function(a,b,c,d){null==a&&(a=[]),b=o(b,d,4);var e,f=a.length!==+a.length&&n.keys(a),g=(f||a).length;if(arguments.length<3){if(!g)throw new TypeError(p);c=a[f?f[--g]:--g]}for(;g--;)e=f?f[g]:g,c=b(c,a[e],e,a);return c},n.find=n.detect=function(a,b,c){var d;return b=n.iteratee(b,c),n.some(a,function(a,c,e){return b(a,c,e)?(d=a,!0):void 0}),d},n.filter=n.select=function(a,b,c){var d=[];return null==a?d:(b=n.iteratee(b,c),n.each(a,function(a,c,e){b(a,c,e)&&d.push(a)}),d)},n.reject=function(a,b,c){return n.filter(a,n.negate(n.iteratee(b)),c)},n.every=n.all=function(a,b,c){if(null==a)return!0;b=n.iteratee(b,c);var d,e,f=a.length!==+a.length&&n.keys(a),g=(f||a).length;for(d=0;g>d;d++)if(e=f?f[d]:d,!b(a[e],e,a))return!1;return!0},n.some=n.any=function(a,b,c){if(null==a)return!1;b=n.iteratee(b,c);var d,e,f=a.length!==+a.length&&n.keys(a),g=(f||a).length;for(d=0;g>d;d++)if(e=f?f[d]:d,b(a[e],e,a))return!0;return!1},n.contains=n.include=function(a,b){return null==a?!1:(a.length!==+a.length&&(a=n.values(a)),n.indexOf(a,b)>=0)},n.invoke=function(a,b){var c=g.call(arguments,2),d=n.isFunction(b);return n.map(a,function(a){return(d?b:a[b]).apply(a,c)})},n.pluck=function(a,b){return n.map(a,n.property(b))},n.where=function(a,b){return n.filter(a,n.matches(b))},n.findWhere=function(a,b){return n.find(a,n.matches(b))},n.max=function(a,b,c){var d,e,f=-1/0,g=-1/0;if(null==b&&null!=a){a=a.length===+a.length?a:n.values(a);for(var h=0,i=a.length;i>h;h++)d=a[h],d>f&&(f=d)}else b=n.iteratee(b,c),n.each(a,function(a,c,d){e=b(a,c,d),(e>g||e===-1/0&&f===-1/0)&&(f=a,g=e)});return f},n.min=function(a,b,c){var d,e,f=1/0,g=1/0;if(null==b&&null!=a){a=a.length===+a.length?a:n.values(a);for(var h=0,i=a.length;i>h;h++)d=a[h],f>d&&(f=d)}else b=n.iteratee(b,c),n.each(a,function(a,c,d){e=b(a,c,d),(g>e||1/0===e&&1/0===f)&&(f=a,g=e)});return f},n.shuffle=function(a){for(var b,c=a&&a.length===+a.length?a:n.values(a),d=c.length,e=Array(d),f=0;d>f;f++)b=n.random(0,f),b!==f&&(e[f]=e[b]),e[b]=c[f];return e},n.sample=function(a,b,c){return null==b||c?(a.length!==+a.length&&(a=n.values(a)),a[n.random(a.length-1)]):n.shuffle(a).slice(0,Math.max(0,b))},n.sortBy=function(a,b,c){return b=n.iteratee(b,c),n.pluck(n.map(a,function(a,c,d){return{value:a,index:c,criteria:b(a,c,d)}}).sort(function(a,b){var c=a.criteria,d=b.criteria;if(c!==d){if(c>d||void 0===c)return 1;if(d>c||void 0===d)return-1}return a.index-b.index}),"value")};var q=function(a){return function(b,c,d){var e={};return c=n.iteratee(c,d),n.each(b,function(d,f){var g=c(d,f,b);a(e,d,g)}),e}};n.groupBy=q(function(a,b,c){n.has(a,c)?a[c].push(b):a[c]=[b]}),n.indexBy=q(function(a,b,c){a[c]=b}),n.countBy=q(function(a,b,c){n.has(a,c)?a[c]++:a[c]=1}),n.sortedIndex=function(a,b,c,d){c=n.iteratee(c,d,1);for(var e=c(b),f=0,g=a.length;g>f;){var h=f+g>>>1;c(a[h])<e?f=h+1:g=h}return f},n.toArray=function(a){return a?n.isArray(a)?g.call(a):a.length===+a.length?n.map(a,n.identity):n.values(a):[]},n.size=function(a){return null==a?0:a.length===+a.length?a.length:n.keys(a).length},n.partition=function(a,b,c){b=n.iteratee(b,c);var d=[],e=[];return n.each(a,function(a,c,f){(b(a,c,f)?d:e).push(a)}),[d,e]},n.first=n.head=n.take=function(a,b,c){return null==a?void 0:null==b||c?a[0]:0>b?[]:g.call(a,0,b)},n.initial=function(a,b,c){return g.call(a,0,Math.max(0,a.length-(null==b||c?1:b)))},n.last=function(a,b,c){return null==a?void 0:null==b||c?a[a.length-1]:g.call(a,Math.max(a.length-b,0))},n.rest=n.tail=n.drop=function(a,b,c){return g.call(a,null==b||c?1:b)},n.compact=function(a){return n.filter(a,n.identity)};var r=function(a,b,c,d){if(b&&n.every(a,n.isArray))return h.apply(d,a);for(var e=0,g=a.length;g>e;e++){var i=a[e];n.isArray(i)||n.isArguments(i)?b?f.apply(d,i):r(i,b,c,d):c||d.push(i)}return d};n.flatten=function(a,b){return r(a,b,!1,[])},n.without=function(a){return n.difference(a,g.call(arguments,1))},n.uniq=n.unique=function(a,b,c,d){if(null==a)return[];n.isBoolean(b)||(d=c,c=b,b=!1),null!=c&&(c=n.iteratee(c,d));for(var e=[],f=[],g=0,h=a.length;h>g;g++){var i=a[g];if(b)g&&f===i||e.push(i),f=i;else if(c){var j=c(i,g,a);n.indexOf(f,j)<0&&(f.push(j),e.push(i))}else n.indexOf(e,i)<0&&e.push(i)}return e},n.union=function(){return n.uniq(r(arguments,!0,!0,[]))},n.intersection=function(a){if(null==a)return[];for(var b=[],c=arguments.length,d=0,e=a.length;e>d;d++){var f=a[d];if(!n.contains(b,f)){for(var g=1;c>g&&n.contains(arguments[g],f);g++);g===c&&b.push(f)}}return b},n.difference=function(a){var b=r(g.call(arguments,1),!0,!0,[]);return n.filter(a,function(a){return!n.contains(b,a)})},n.zip=function(a){if(null==a)return[];for(var b=n.max(arguments,"length").length,c=Array(b),d=0;b>d;d++)c[d]=n.pluck(arguments,d);return c},n.object=function(a,b){if(null==a)return{};for(var c={},d=0,e=a.length;e>d;d++)b?c[a[d]]=b[d]:c[a[d][0]]=a[d][1];return c},n.indexOf=function(a,b,c){if(null==a)return-1;var d=0,e=a.length;if(c){if("number"!=typeof c)return d=n.sortedIndex(a,b),a[d]===b?d:-1;d=0>c?Math.max(0,e+c):c}for(;e>d;d++)if(a[d]===b)return d;return-1},n.lastIndexOf=function(a,b,c){if(null==a)return-1;var d=a.length;for("number"==typeof c&&(d=0>c?d+c+1:Math.min(d,c+1));--d>=0;)if(a[d]===b)return d;return-1},n.range=function(a,b,c){arguments.length<=1&&(b=a||0,a=0),c=c||1;for(var d=Math.max(Math.ceil((b-a)/c),0),e=Array(d),f=0;d>f;f++,a+=c)e[f]=a;return e};var s=function(){};n.bind=function(a,b){var c,d;if(m&&a.bind===m)return m.apply(a,g.call(arguments,1));if(!n.isFunction(a))throw new TypeError("Bind must be called on a function");return c=g.call(arguments,2),d=function(){if(!(this instanceof d))return a.apply(b,c.concat(g.call(arguments)));s.prototype=a.prototype;var e=new s;s.prototype=null;var f=a.apply(e,c.concat(g.call(arguments)));return n.isObject(f)?f:e}},n.partial=function(a){var b=g.call(arguments,1);return function(){for(var c=0,d=b.slice(),e=0,f=d.length;f>e;e++)d[e]===n&&(d[e]=arguments[c++]);for(;c<arguments.length;)d.push(arguments[c++]);return a.apply(this,d)}},n.bindAll=function(a){var b,c,d=arguments.length;if(1>=d)throw new Error("bindAll must be passed function names");for(b=1;d>b;b++)c=arguments[b],a[c]=n.bind(a[c],a);return a},n.memoize=function(a,b){var c=function(d){var e=c.cache,f=b?b.apply(this,arguments):d;return n.has(e,f)||(e[f]=a.apply(this,arguments)),e[f]};return c.cache={},c},n.delay=function(a,b){var c=g.call(arguments,2);return setTimeout(function(){return a.apply(null,c)},b)},n.defer=function(a){return n.delay.apply(n,[a,1].concat(g.call(arguments,1)))},n.throttle=function(a,b,c){var d,e,f,g=null,h=0;c||(c={});var i=function(){h=c.leading===!1?0:n.now(),g=null,f=a.apply(d,e),g||(d=e=null)};return function(){var j=n.now();h||c.leading!==!1||(h=j);var k=b-(j-h);return d=this,e=arguments,0>=k||k>b?(clearTimeout(g),g=null,h=j,f=a.apply(d,e),g||(d=e=null)):g||c.trailing===!1||(g=setTimeout(i,k)),f}},n.debounce=function(a,b,c){var d,e,f,g,h,i=function(){var j=n.now()-g;b>j&&j>0?d=setTimeout(i,b-j):(d=null,c||(h=a.apply(f,e),d||(f=e=null)))};return function(){f=this,e=arguments,g=n.now();var j=c&&!d;return d||(d=setTimeout(i,b)),j&&(h=a.apply(f,e),f=e=null),h}},n.wrap=function(a,b){return n.partial(b,a)},n.negate=function(a){return function(){return!a.apply(this,arguments)}},n.compose=function(){var a=arguments,b=a.length-1;return function(){for(var c=b,d=a[b].apply(this,arguments);c--;)d=a[c].call(this,d);return d}},n.after=function(a,b){return function(){return--a<1?b.apply(this,arguments):void 0}},n.before=function(a,b){var c;return function(){return--a>0?c=b.apply(this,arguments):b=null,c}},n.once=n.partial(n.before,2),n.keys=function(a){if(!n.isObject(a))return[];if(l)return l(a);var b=[];for(var c in a)n.has(a,c)&&b.push(c);return b},n.values=function(a){for(var b=n.keys(a),c=b.length,d=Array(c),e=0;c>e;e++)d[e]=a[b[e]];return d},n.pairs=function(a){for(var b=n.keys(a),c=b.length,d=Array(c),e=0;c>e;e++)d[e]=[b[e],a[b[e]]];return d},n.invert=function(a){for(var b={},c=n.keys(a),d=0,e=c.length;e>d;d++)b[a[c[d]]]=c[d];return b},n.functions=n.methods=function(a){var b=[];for(var c in a)n.isFunction(a[c])&&b.push(c);return b.sort()},n.extend=function(a){if(!n.isObject(a))return a;for(var b,c,d=1,e=arguments.length;e>d;d++){b=arguments[d];for(c in b)j.call(b,c)&&(a[c]=b[c])}return a},n.pick=function(a,b,c){var d,e={};if(null==a)return e;if(n.isFunction(b)){b=o(b,c);for(d in a){var f=a[d];b(f,d,a)&&(e[d]=f)}}else{var i=h.apply([],g.call(arguments,1));a=new Object(a);for(var j=0,k=i.length;k>j;j++)d=i[j],d in a&&(e[d]=a[d])}return e},n.omit=function(a,b,c){if(n.isFunction(b))b=n.negate(b);else{var d=n.map(h.apply([],g.call(arguments,1)),String);b=function(a,b){return!n.contains(d,b)}}return n.pick(a,b,c)},n.defaults=function(a){if(!n.isObject(a))return a;for(var b=1,c=arguments.length;c>b;b++){var d=arguments[b];for(var e in d)void 0===a[e]&&(a[e]=d[e])}return a},n.clone=function(a){return n.isObject(a)?n.isArray(a)?a.slice():n.extend({},a):a},n.tap=function(a,b){return b(a),a};var t=function(a,b,c,d){if(a===b)return 0!==a||1/a===1/b;if(null==a||null==b)return a===b;a instanceof n&&(a=a._wrapped),b instanceof n&&(b=b._wrapped);var e=i.call(a);if(e!==i.call(b))return!1;switch(e){case"[object RegExp]":case"[object String]":return""+a==""+b;case"[object Number]":return+a!==+a?+b!==+b:0===+a?1/+a===1/b:+a===+b;case"[object Date]":case"[object Boolean]":return+a===+b}if("object"!=typeof a||"object"!=typeof b)return!1;for(var f=c.length;f--;)if(c[f]===a)return d[f]===b;var g=a.constructor,h=b.constructor;if(g!==h&&"constructor"in a&&"constructor"in b&&!(n.isFunction(g)&&g instanceof g&&n.isFunction(h)&&h instanceof h))return!1;c.push(a),d.push(b);var j,k;if("[object Array]"===e){if(j=a.length,k=j===b.length)for(;j--&&(k=t(a[j],b[j],c,d)););}else{var l,m=n.keys(a);if(j=m.length,k=n.keys(b).length===j)for(;j--&&(l=m[j],k=n.has(b,l)&&t(a[l],b[l],c,d)););}return c.pop(),d.pop(),k};n.isEqual=function(a,b){return t(a,b,[],[])},n.isEmpty=function(a){if(null==a)return!0;if(n.isArray(a)||n.isString(a)||n.isArguments(a))return 0===a.length;for(var b in a)if(n.has(a,b))return!1;return!0},n.isElement=function(a){return!(!a||1!==a.nodeType)},n.isArray=k||function(a){return"[object Array]"===i.call(a)},n.isObject=function(a){var b=typeof a;return"function"===b||"object"===b&&!!a},n.each(["Arguments","Function","String","Number","Date","RegExp"],function(a){n["is"+a]=function(b){return i.call(b)==="[object "+a+"]"}}),n.isArguments(arguments)||(n.isArguments=function(a){return n.has(a,"callee")}),"function"!=typeof/./&&(n.isFunction=function(a){return"function"==typeof a||!1}),n.isFinite=function(a){return isFinite(a)&&!isNaN(parseFloat(a))},n.isNaN=function(a){return n.isNumber(a)&&a!==+a},n.isBoolean=function(a){return a===!0||a===!1||"[object Boolean]"===i.call(a)},n.isNull=function(a){return null===a},n.isUndefined=function(a){return void 0===a},n.has=function(a,b){return null!=a&&j.call(a,b)},n.noConflict=function(){return a._=b,this},n.identity=function(a){return a},n.constant=function(a){return function(){return a}},n.noop=function(){},n.property=function(a){return function(b){return b[a]}},n.matches=function(a){var b=n.pairs(a),c=b.length;return function(a){if(null==a)return!c;a=new Object(a);for(var d=0;c>d;d++){var e=b[d],f=e[0];if(e[1]!==a[f]||!(f in a))return!1}return!0}},n.times=function(a,b,c){var d=Array(Math.max(0,a));b=o(b,c,1);for(var e=0;a>e;e++)d[e]=b(e);return d},n.random=function(a,b){return null==b&&(b=a,a=0),a+Math.floor(Math.random()*(b-a+1))},n.now=Date.now||function(){return(new Date).getTime()};var u={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},v=n.invert(u),w=function(a){var b=function(b){return a[b]},c="(?:"+n.keys(a).join("|")+")",d=RegExp(c),e=RegExp(c,"g");return function(a){return a=null==a?"":""+a,d.test(a)?a.replace(e,b):a}};n.escape=w(u),n.unescape=w(v),n.result=function(a,b){if(null==a)return void 0;var c=a[b];return n.isFunction(c)?a[b]():c};var x=0;n.uniqueId=function(a){var b=++x+"";return a?a+b:b},n.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var y=/(.)^/,z={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},A=/\\|'|\r|\n|\u2028|\u2029/g,B=function(a){return"\\"+z[a]};n.template=function(a,b,c){!b&&c&&(b=c),b=n.defaults({},b,n.templateSettings);var d=RegExp([(b.escape||y).source,(b.interpolate||y).source,(b.evaluate||y).source].join("|")+"|$","g"),e=0,f="__p+='";a.replace(d,function(b,c,d,g,h){return f+=a.slice(e,h).replace(A,B),e=h+b.length,c?f+="'+\n((__t=("+c+"))==null?'':_.escape(__t))+\n'":d?f+="'+\n((__t=("+d+"))==null?'':__t)+\n'":g&&(f+="';\n"+g+"\n__p+='"),b}),f+="';\n",b.variable||(f="with(obj||{}){\n"+f+"}\n"),f="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+f+"return __p;\n";try{var g=new Function(b.variable||"obj","_",f)}catch(h){throw h.source=f,h}var i=function(a){return g.call(this,a,n)},j=b.variable||"obj";return i.source="function("+j+"){\n"+f+"}",i},n.chain=function(a){var b=n(a);return b._chain=!0,b};var C=function(a){return this._chain?n(a).chain():a};n.mixin=function(a){n.each(n.functions(a),function(b){var c=n[b]=a[b];n.prototype[b]=function(){var a=[this._wrapped];return f.apply(a,arguments),C.call(this,c.apply(n,a))}})},n.mixin(n),n.each(["pop","push","reverse","shift","sort","splice","unshift"],function(a){var b=c[a];n.prototype[a]=function(){var c=this._wrapped;return b.apply(c,arguments),"shift"!==a&&"splice"!==a||0!==c.length||delete c[0],C.call(this,c)}}),n.each(["concat","join","slice"],function(a){var b=c[a];n.prototype[a]=function(){return C.call(this,b.apply(this._wrapped,arguments))}}),n.prototype.value=function(){return this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return n})}.call(this),/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */
function(a){"use strict";function b(a){return new RegExp("(^|\\s+)"+a+"(\\s+|$)")}function c(a,b){var c=d(a,b)?f:e;c(a,b)}var d,e,f;"classList"in document.documentElement?(d=function(a,b){return a.classList.contains(b)},e=function(a,b){a.classList.add(b)},f=function(a,b){a.classList.remove(b)}):(d=function(a,c){return b(c).test(a.className)},e=function(a,b){d(a,b)||(a.className=a.className+" "+b)},f=function(a,c){a.className=a.className.replace(b(c)," ")});var g={hasClass:d,addClass:e,removeClass:f,toggleClass:c,has:d,add:e,remove:f,toggle:c};"function"==typeof define&&define.amd?define(g):a.classie=g}(window),/*!
 * Smooth Scroll - v1.5.0 - 2014-08-11
 * https://github.com/kswedberg/jquery-smooth-scroll
 * Copyright (c) 2014 Karl Swedberg
 * Licensed MIT (https://github.com/kswedberg/jquery-smooth-scroll/blob/master/LICENSE-MIT)
 */
function(a){function b(a){return a.replace(/(:|\.)/g,"\\$1")}var c="1.5.0",d={},e={exclude:[],excludeWithin:[],offset:0,direction:"top",scrollElement:null,scrollTarget:null,beforeScroll:function(){},afterScroll:function(){},easing:"swing",speed:400,autoCoefficient:2,preventDefault:!0},f=function(b){var c=[],d=!1,e=b.dir&&"left"===b.dir?"scrollLeft":"scrollTop";return this.each(function(){if(this!==document&&this!==window){var b=a(this);b[e]()>0?c.push(this):(b[e](1),d=b[e]()>0,d&&c.push(this),b[e](0))}}),c.length||this.each(function(){"BODY"===this.nodeName&&(c=[this])}),"first"===b.el&&c.length>1&&(c=[c[0]]),c};a.fn.extend({scrollable:function(a){var b=f.call(this,{dir:a});return this.pushStack(b)},firstScrollable:function(a){var b=f.call(this,{el:"first",dir:a});return this.pushStack(b)},smoothScroll:function(c,d){if(c=c||{},"options"===c)return d?this.each(function(){var b=a(this),c=a.extend(b.data("ssOpts")||{},d);a(this).data("ssOpts",c)}):this.first().data("ssOpts");var e=a.extend({},a.fn.smoothScroll.defaults,c),f=a.smoothScroll.filterPath(location.pathname);return this.unbind("click.smoothscroll").bind("click.smoothscroll",function(c){var d=this,g=a(this),h=a.extend({},e,g.data("ssOpts")||{}),i=e.exclude,j=h.excludeWithin,k=0,l=0,m=!0,n={},o=location.hostname===d.hostname||!d.hostname,p=h.scrollTarget||(a.smoothScroll.filterPath(d.pathname)||f)===f,q=b(d.hash);if(h.scrollTarget||o&&p&&q){for(;m&&i.length>k;)g.is(b(i[k++]))&&(m=!1);for(;m&&j.length>l;)g.closest(j[l++]).length&&(m=!1)}else m=!1;m&&(h.preventDefault&&c.preventDefault(),a.extend(n,h,{scrollTarget:h.scrollTarget||q,link:d}),a.smoothScroll(n))}),this}}),a.smoothScroll=function(b,c){if("options"===b&&"object"==typeof c)return a.extend(d,c);var e,f,g,h,i,j=0,k="offset",l="scrollTop",m={},n={};"number"==typeof b?(e=a.extend({link:null},a.fn.smoothScroll.defaults,d),g=b):(e=a.extend({link:null},a.fn.smoothScroll.defaults,b||{},d),e.scrollElement&&(k="position","static"===e.scrollElement.css("position")&&e.scrollElement.css("position","relative"))),l="left"===e.direction?"scrollLeft":l,e.scrollElement?(f=e.scrollElement,/^(?:HTML|BODY)$/.test(f[0].nodeName)||(j=f[l]())):f=a("html, body").firstScrollable(e.direction),e.beforeScroll.call(f,e),g="number"==typeof b?b:c||a(e.scrollTarget)[k]()&&a(e.scrollTarget)[k]()[e.direction]||0,m[l]=g+j+e.offset,h=e.speed,"auto"===h&&(i=m[l]-f.scrollTop(),0>i&&(i*=-1),h=i/e.autoCoefficient),n={duration:h,easing:e.easing,complete:function(){e.afterScroll.call(e.link,e)}},e.step&&(n.step=e.step),f.length?f.stop().animate(m,n):e.afterScroll.call(e.link,e)},a.smoothScroll.version=c,a.smoothScroll.filterPath=function(a){return a=a||"",a.replace(/^\//,"").replace(/(?:index|default).[a-zA-Z]{3,4}$/,"").replace(/\/$/,"")},a.fn.smoothScroll.defaults=e}(jQuery),window.pluginTest=function(){console.log("test")},function(a){"use strict";function b(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return a}function c(a,c){this.el=a,this.options=b({},this.options),b(this.options,c),this._init()}var d={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd",transition:"transitionend"},e=d[Modernizr.prefixed("transition")],f={transitions:Modernizr.csstransitions};c.prototype.options={closeEl:"",onBeforeOpen:function(){return!1},onAfterOpen:function(){return!1},onBeforeClose:function(){return!1},onAfterClose:function(){return!1}},c.prototype._init=function(){this.button=this.el.querySelector("button"),this.expanded=!1,this.contentEl=this.el.querySelector(".morph-content"),this._initEvents()},c.prototype._initEvents=function(){var a=this;if(this.button.addEventListener("click",function(){a.toggle()}),""!==this.options.closeEl){var b=this.el.querySelector(this.options.closeEl);b&&b.addEventListener("click",function(){a.toggle()})}},c.prototype.toggle=function(){if(this.isAnimating)return!1;this.expanded?this.options.onBeforeClose():(classie.addClass(this.el,"active"),this.options.onBeforeOpen()),this.isAnimating=!0;var a=this,b=function(c){if(c.target!==this)return!1;if(f.transitions){if(a.expanded&&"opacity"!==c.propertyName||!a.expanded&&"width"!==c.propertyName&&"height"!==c.propertyName&&"left"!==c.propertyName&&"top"!==c.propertyName)return!1;this.removeEventListener(e,b)}a.isAnimating=!1,a.expanded?(classie.removeClass(a.el,"active"),a.options.onAfterClose()):a.options.onAfterOpen(),a.expanded=!a.expanded};f.transitions?this.contentEl.addEventListener(e,b):b();var c=this.button.getBoundingClientRect();classie.addClass(this.contentEl,"no-transition"),this.contentEl.style.left="auto",this.contentEl.style.top="auto",setTimeout(function(){a.contentEl.style.left=c.left+"px",a.contentEl.style.top=c.top+"px",a.expanded?(classie.removeClass(a.contentEl,"no-transition"),classie.removeClass(a.el,"open")):setTimeout(function(){classie.removeClass(a.contentEl,"no-transition"),classie.addClass(a.el,"open")},25)},25)},a.UIMorphingButton=c}(window);