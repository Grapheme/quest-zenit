@extends('templates.'.AuthAccount::getStartPage())


@section('content')

    <h1>Видеофайлы</h1>

    <div style="margin: 10px 0 25px;">
    	<a class="btn btn-primary" data-toggle="modal" data-target="#gallery">Добавить галерею</a>
    </div>
    
    @if (@is_object($videos) && $videos->count())
    <table class="table table-bordered table-striped min-table">
    <thead>
    	<tr>
    		<th>Название</th>
    		<th style="width: 100px;"></th>
    		<th style="width: 100px;"></th>
    	</tr>
    </thead>
    <tbody>
    
    	@foreach($videos as $video)
    	<tr>
    		<td>{{ $video->title }}</td>
    		<td><a href="{{ link::to('admin/galleries/edit/'.$video->id) }}" class="btn btn-default">Редактировать</a></td>
    		<td><a class="gallery-delete-btn btn btn-default" href="#" data-id="{{ $video->id }}">Удалить</a></td>
    	</tr>
    
    	@endforeach
    </tbody>
    </table>
    @else
    	There are no galleries.
    @endif

@stop


@section('scripts')

	<script>
	$(function(){
		$('.form-ajax-submit').on('submit', function(event){

			event.preventDefault();

			var $_form = $(this);
			var $data = {};

			$_form.find('input').not('input[type=submit]').each(function(){
				$data[$(this).attr('name')] = $(this).val();
			});

			$.ajax({
				url: $_form.attr('action'),
				data: $data,
				type: 'post',
            }).done(function(href){
            	window.location.href = href;
            }).fail(function(data){
            	var $errors = data.responseJSON;

                $.bigBox({
                    title : "Error!",
                    content : $errors,
                    color : "#C46A69",
                    timeout: 15000,
                    icon : "fa fa-warning shake animated",
                });
            });

		});

		$('.gallery-delete-btn').click(function(){

			var $that = $(this).parent().parent();
			var $id = $(this).attr('data-id');

			$.ajax({
				url: '{{ URL::to('admin/galleries/delete') }}',
				data: { id: $id },
				type: 'post',
            }).done(function(){
            	$that.fadeOut('fast');
            });

			return false;
		});
	});
	</script>

@stop