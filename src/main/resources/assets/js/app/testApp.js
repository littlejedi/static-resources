require(['main'], function() {
	require(['jquery','knockout','easing'], function($, ko, easing) {
		var a = $;
		var b = ko;
		$.easing.def = 'string';
		//$('#appContainer').html(tmpl);
		//ko.applyBindings(new appViewModel(), document.getElementById('appContainer'));
	});
});


