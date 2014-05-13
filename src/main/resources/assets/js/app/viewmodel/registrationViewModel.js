define([
        'jquery',
        'knockout',
        'easing'
], function($, ko) {	
	var appViewModel = function(options) {
		this.username = ko.observable('');
	};
	
	return appViewModel;
});