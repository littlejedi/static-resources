define([
        'jquery',
        'knockout',
        'backbone',
        'app/viewmodel/registrationViewModel',
        'text!app/templates/registration.ko',
        'easing'
], function($, ko, backbone, viewModel, template) {	
	'use strict';
	
	var view = backbone.View.extend({
		initialize: function(options) {
			this.render();
			this.viewModel = new viewModel(this.options);
			ko.applyBindings(this.viewModel, this.$el[0]);
		},
		
		render: function() {
			this.$el.html(template);
			return this;
		}
	});
	
	return view;
});