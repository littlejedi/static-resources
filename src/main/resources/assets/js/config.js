/**
 * This file is the application bootstrap. It contains RequireJS configuration and Backbone bootstrap.
 */
require.config({
  /**
   * Require 2.0 introduced shim config which allows to configure dependencies for
   * scripts that do not call define() to register a module
   */
  shim:{
    "underscore":{
      exports:"_"
    },
    "backbone":{
      deps:[
        "underscore",
        "jquery"
      ],
      exports:"Backbone"
    },
    "easing":{
      deps:[
        "jquery"
      ],
      exports:"easing"
    },
    "bootstrap":{
      deps:[
        "jquery"
      ],
      exports:"jQuery"
    }
  },
  /**
   * Shortcut configuration for libs
   */
  paths:{
    jquery:"libs/jquery-1.8.0/jquery.min",
    easing:"libs/jquery.easing-1.3/jquery.easing.1.3",
    bootstrap:"libs/bootstrap-2.1.0/js/bootstrap.min",
    underscore:"libs/underscore-1.3.3/underscore",
    backbone:"libs/backbone-0.9.2/backbone",
    text:"libs/require-2.0.6/text",
    knockout:"libs/knockout-3.1.0/knockout"
  }
});
