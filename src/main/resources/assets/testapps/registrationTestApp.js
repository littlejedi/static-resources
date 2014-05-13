require.config({
	baseUrl: '../js'
});

require(['jquery','app/view/registrationView'], function ($, View) {
	var element = $("#appContainer");
	var view = new View({ el: element });
});