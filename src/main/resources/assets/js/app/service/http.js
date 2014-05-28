define([
        'jquery',
        'underscore',
        'knockout',
], function($, _, ko) {
	var baseUrl = 'http://localhost:8888/api/';
	
	var getMiddleSchoolsMapping = function(successCb, failCb) {
		$.ajax({
    		type:"GET",
    		url:baseUrl + 'schools/middleschools/map';
    	})
    	.done(function (result, statusText, xhr) {
    		successCb(result, statusText, xhr);
    	})
    	.fail(function (result, statusText, xhr) {
    		failCb(result, statusText, xhr);
    		return {};
    	});
	};
	
	var getMiddleSchoolList = function(successCb, failCb) {
		$.ajax({
    		type:"GET",
    		url:baseUrl + 'schools/middleschools/list';
    	})
    	.done(function (result, statusText, xhr) {
    		successCb(result, statusText, xhr);
    	})
    	.fail(function (result, statusText, xhr) {
    		failCb(result, statusText, xhr);
    		return {};
    	});
	};
	
	var getHighSchoolsMapping = function(successCb, failCb) {
		$.ajax({
    		type:"GET",
    		url:baseUrl + 'schools/highschools/map';
    	})
    	.done(function (result, statusText, xhr) {
    		successCb(result, statusText, xhr);
    	})
    	.fail(function (result, statusText, xhr) {
    		failCb(result, statusText, xhr);
    		return {};
    	});
	};
	
	var getHighSchoolsList = function(successCb, failCb) {
		$.ajax({
    		type:"GET",
    		url:baseUrl + 'schools/highschools/map';
    	})
    	.done(function (result, statusText, xhr) {
    		successCb(result, statusText, xhr);
    	})
    	.fail(function (result, statusText, xhr) {
    		failCb(result, statusText, xhr);
    		return {};
    	});
	};
	
	return {
		getMiddleSchoolsMapping : getMiddleSchoolsMapping,
		getMiddleSchoolsList : getMiddleSchoolsList,
		getHighSchoolsMapping : getHighSchoolsMapping,
		getHighSchoolsList : getHighSchoolsList
	}
});