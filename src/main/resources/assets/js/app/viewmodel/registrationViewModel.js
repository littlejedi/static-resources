define([
        'jquery',
        'underscore',
        'knockout',
        'easing'
], function($, _, ko) {	
	var appViewModel = function(options) {	
		this.username = ko.observable();
		this.email = ko.observable();
		this.password = ko.observable();
		this.cpassword = ko.observable();
		this.isPasswordFocus = ko.observable(false);

		this.passwordInfo = _.bind(function() {
			return '密码应该包含至少6个字符，其中至少包含1个数字和1个字母';
		}, this);
		
		this.usernameError = ko.computed(function() {
			if (this.username()) {
				var chars = this.username().length;
				var usernameRegex = /^[a-zA-Z0-9]+$/;
				if (chars > 15 || chars < 1) {
					return '用户名应在1到15个字符之间';
				}
				if (!this.username().match(usernameRegex)) {
					return '用户名包含非法字符，有效字符为字母或数字';
				};
			}
			return '';
		}, this);
		this.emailError = ko.computed(function() {
			var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
			if (this.email() && !this.email().match(emailRegex)) {
				return '请输入有效的电子邮箱地址';
			}
			return '';
		}, this);
		this.passwordError = ko.computed(function() {
			if (this.password()) {
				if (this.password().length < 6) {
					return '密码至少需要包含6个字符';
				}
				if (!this.password().match(/[0-9]/)) {
					return '密码至少需要包含一个数字';
				}
				if (!this.password().match(/[a-z]/) && !this.password().match(/[A-Z]/)) {
					return '密码至少需要包含一个字母';
				}
			}
			return '';
		}, this);
		this.cpasswordError = ko.computed(function() {
			if (this.password() && this.cpassword()) {
				if (this.password() !== this.cpassword()) {
					return '两次密码输入不一致';
				}
			}
			return '';
		}, this);
	};
	
	return appViewModel;
});