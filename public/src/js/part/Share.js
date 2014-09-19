QuestZenit.MainShare = function(){
	var shareLink = window.location.origin + window.location.pathname;
	var shareTitle = $('#ya-shareMain').attr('data-shareTitle');
	var description = $('#ya-shareMain').attr('data-shareDescription');
	var image = window.location.origin + '/' + $('#ya-shareMain').attr('data-shareImage');
	new Ya.share({
		element: 'ya-shareMain',
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
};
