require.config({
	baseUrl: '../js'
});

require(['jquery'], function ($, View) {
	$('#loginFormLink').click(function() {
		require(['app/view/loginView'], function (View) {
			var element = $("#loginFormContainer");
			var view = new View({ el: element });
		});
	});
});
