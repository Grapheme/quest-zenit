@if (@is_object($page->meta->seo))
@section('title'){{ $page->meta->seo->title ? $page->meta->seo->title : $page->name }}@stop
@section('description'){{ $page->meta->seo->description }}@stop
@section('keywords'){{ $page->meta->seo->keywords }}@stop
@elseif (@is_object($page->meta))
@section('title')
{{{ $page->name }}}@stop
@elseif (@is_object($seo))
@section('title'){{ $seo->title }}@stop
@section('description'){{ $seo->description }}@stop
@section('keywords'){{ $seo->keywords }}@stop
@endif
<html>
    <head>
	@include(Helper::layout('head'))
	@yield('style')
    </head>
<body>
	<div class="content-wrapper">
    @include(Helper::layout('header'))
    @yield('content', @$content)
    </div>

    @include(Helper::layout('footer'))
    @include(Helper::layout('scripts'))
    @yield('overlays')
    @yield('scripts')

</body>
</html>