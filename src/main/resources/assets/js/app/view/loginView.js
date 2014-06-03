define([
        'jquery',
        'knockout',
        'backbone',
        'app/viewmodel/loginViewModel',
        'text!app/templates/login.ko',
        'bootstrap',
        'easing'
], function($, ko, backbone, viewModel, template) {	
	'use strict';
	
	var view = backbone.View.extend({
		initialize: function(options) {
			this.render(options);
			this.viewModel = new viewModel(this.options);
			ko.applyBindings(this.viewModel, this.$el[0]);
		},
		
		render: function(options){
			this.$el.html(template);
			$('#loginModal').modal(null);
			return this;
		}
	});
	
	return view;
});