@section('title')
{{{ isset($page_title) ? $page_title : Config::get('app.default_page_title') }}}
@stop
@section('description')
{{{ isset($page_description) ? $page_description : Config::get('app.default_page_description') }}}
@stop
@section('keywords')
{{{ isset($page_keywords) ? $page_keywords : Config::get('app.default_page_keywords') }}}
@stop
    <meta charset="UTF-8">
    <title>@yield('title')</title>
    <meta name="description" content="@yield('description')">
    <meta name="keywords" content="@yield('keywords')">
    <!--[if IE]><meta http-equiv='X-UA-Compatible' content='IE=edge,chrome=1'><![endif]-->
    <meta name="viewport" content="width=1300,initial-scale=1">
    <link rel="shortcut icon" type="image/x-icon" href="favicon.ico">
    
    <!-- Open Graph Meta Data -->
    <meta property="og:url" content="http://davai.fc-zenit.ru">
    <meta property="og:title" content="{{ isset($quest) && is_object($quest) ? $quest->name : '' }}">
    <meta property="og:description" content="{{ isset($quest) && is_object($quest) ? $quest->short : '' }}">
    <meta property="og:image" content="{{ isset($quest) && is_object($quest) && is_object($quest->photo_id) ? $quest->photo_id->thumb() : 'http://davai.fc-zenit.ru/img/quests/quest_share.jpg' }}">
    <meta property="og:site_name" content="ДАВАЙ-ДАВАЙ">
    <meta property="og:type" content="website">
    
    {{ HTML::scriptmod('js/vendor/modernizr-2.6.2.min.js') }}
    {{ HTML::stylemod('css/style.css') }}
    <script type="text/javascript" src="//yandex.st/share/share.js" charset="utf-8"></script>
    
    {{ HTML::scriptmod("js/vendor/jquery.min.js") }}
    {{ HTML::scriptmod("js/vendor/jquery.mustache.js") }}

    <!-- svg icon loader -->
        <script>
            //<![CDATA[
            window.grunticon=function(e){if(e&&3===e.length){var t=window,n=!!t.document.createElementNS&&!!t.document.createElementNS("//www.w3.org/2000/svg","svg").createSVGRect&&!!document.implementation.hasFeature("//www.w3.org/TR/SVG11/feature#Image","1.1"),A=function(A){var o=t.document.createElement("link"),r=t.document.getElementsByTagName("script")[0];o.rel="stylesheet",o.href=e[A&&n?0:A?1:2],r.parentNode.insertBefore(o,r)},o=new t.Image;o.onerror=function(){A(!1)},o.onload=function(){A(1===o.width&&1===o.height)},o.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="}};
            grunticon( [ "img/svgout/icons.data.svg.css", "img/svgout/icons.data.png.css", "img/svgout/icons.fallback.css" ] );
            //]]>
        </script>
        <noscript>
            <link href="img/svgout/icons.fallback.css" rel='stylesheet'>
        </noscript>
        <link href='http://fonts.googleapis.com/css?family=Open+Sans:300,400italic,400,600,700&subset=latin,cyrillic-ext' rel='stylesheet' type='text/css'>