/**
 * @fileoverview Basic random quote displaying angular2 app
 * @author <a href="mailto:megha.gupta2205@gmail.com">Megha Gupta</a>
 */

 // IIFE function 
(function(app) {
	// all variables are angular2 component, modules, platform 
	var platformBrowserDynamic = ng.platformBrowserDynamic.platformBrowserDynamic;
	var AppModule = app.AppModule;
  // To Bootstarp module of app 
	platformBrowserDynamic().bootstrapModule(AppModule);

	})(window.app || (window.app ={}));