@extends(Helper::layout())


@section('style')
@stop


@section('content')


    {{ Helper::tad_($room) }}

<?
$obj = $room;
#Helper::tad($obj);

$photo = false;
if (@is_numeric($obj->image)) {
    $photo = Photo::find($obj->image) ?: false;
}

$gallery = array();
if (@is_numeric($obj->gallery)) {
    $gallery = Gallery::where('id', $obj->gallery)->with('photos')->first() ?: array();
}
#Helper::tad($gallery);

$photos = array($photo);
if (@is_object($gallery) && @count($gallery->photos)) {
    foreach ($gallery->photos as $gphoto) {
        $photos[] = $gphoto;
    }
}
#Helper::dd($photos);
?>

    <main role="main">
        <div class="slideshow" id="slideshow">

            @if (@count($photos))
            @foreach ($photos as $photo)
            <div class="slide" style="background-image: url({{ $photo->full() }})">
                <section class="slide-cont">
                    <header>
                        <div class="slide-logo">

                        </div>
                        <h2 class="slide-head">
                            {{ $room->name }}
                        </h2>
                        <div class="desc">
                            {{ $room->price }} {{ trans('interface.currency_short') }}
                        </div>
                    </header>
                    <div class="slide-desc"></div>
                </section>
            </div>
            @endforeach
            @endif

            <div class="arrow arrow-left"><span class="icon icon-angle-left"></span></div>
            <div class="arrow arrow-right"><span class="icon icon-angle-right"></span></div>
        </div>
        <section class="sect-wrap">
            <h1>
                {{ $room->name }}
            </h1>
            <h2>
                {{ $room->price }} {{ trans('interface.currency_short') }}
            </h2>
            <div class="row clearfix">
                <div class="column half">
                    <div class="row clearfix">
                        <div class="column">
                            {{ $room->description }}
                        </div>
                    </div>
                </div>
            </div>
            <button class="btn btn-primary reserve_room" data-room_id="{{ $room->id }}">
                <span class="icon icon-booking"></span> Забронировать номер
            </button>
        </section>
    </main>

@stop


@section('scripts')
@stop