define([
        'jquery',
        'underscore',
        'knockout',
        'app/viewmodel/middleSchoolList',
        'easing'
], function($, _, ko, middleSchoolList) {	
	var appViewModel = function(options) {
		this.municipalCityMap = {1 : true};
		
		this.username = ko.observable();
		this.email = ko.observable();
		this.password = ko.observable();
		this.cpassword = ko.observable();
		this.paypassword = ko.observable();
		this.cpaypassword = ko.observable();
		this.isPasswordFocus = ko.observable(false);
		this.countryList = ko.observable();
		/**
		 * 1 - elementary school
		 * 2 - middle school
		 * 3 - high school
		 * 4 - university
		 */
		this.selectedSchoolType = ko.observable(null);
		this.selectedCountry = ko.observable(null);
		this.selectedProvinceOrState = ko.observable(null);
		this.selectedCity = ko.observable(null);
		this.selectedDistrict = ko.observable(null);
		this.selectedSchool = ko.observable(null);
		
		this.provinceOrStates = ko.observable(null);
		this.cities = ko.observable(null);
		this.districts = ko.observable(null);
		this.schools = ko.observable(null);

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
		
		this.paypasswordError = ko.computed(function() {
			if (this.paypassword()) {
				if (this.paypassword().length < 6) {
					return '密码至少需要包含6个字符';
				}
				if (!this.paypassword().match(/[0-9]/)) {
					return '密码至少需要包含一个数字';
				}
				if (!this.paypassword().match(/[a-z]/) && !this.paypassword().match(/[A-Z]/)) {
					return '密码至少需要包含一个字母';
				}
			}
			return '';
		}, this);
		
		this.cpaypasswordError = ko.computed(function() {
			if (this.paypassword() && this.cpaypassword()) {
				if (this.paypassword() !== this.cpaypassword()) {
					return '两次密码输入不一致';
				}
			}
			return '';
		}, this);
		
		this.clearSelectedSubregions = _.bind(function() {
			this.selectedCountry(null);
			this.selectedProvinceOrState(null);
			this.selectedCity(null);
			this.selectedDistrict(null);
			this.provinceOrStates(null);
			this.cities(null);
			this.districts(null);
			this.schools(null);
		}, this);
		
		this.selectMiddleSchool = _.bind(function() {
			this.selectedSchoolType('MIDDLE_SCHOOL');
			this.countryList(middleSchoolList.list);
			this.clearSelectedSubregions();
		}, this);
		
		this.selectHighSchool = _.bind(function() {
			this.selectedSchoolType('HIGH_SCHOOL');
			this.countryList(null);
			this.clearSelectedSubregions();
		}, this);
		
		this.selectCountry = _.bind(function(country) {
			this.selectedCountry(country);
			if (country.subregions) {
				this.provinceOrStates(country.subregions);
			}
		}, this);
		
		this.selectStateOrProvince = _.bind(function(prov) {
			this.selectedProvinceOrState(prov);
			// Check if city is a municipality
			if (prov.id in this.municipalCityMap) {
				this.cities(null);
				this.districts(prov.subregions);
			} else {
				this.cities(prov.subregions);
			}
		}, this);
		
		this.selectCity = _.bind(function(city) {
			this.selectedCity(city);
			if (city.subregions) {
				this.districts(prov.subregions);
			}
		}, this);
		
		this.selectDistrict = _.bind(function(district) {
			this.selectedDistrict(district);
			if (district.schools) {
				this.schools(district.schools);
			}
		}, this);
		
		this.test = ko.computed(function() {
			var a = this.selectedSchool();
		}, this);
	};
	
	return appViewModel;
});