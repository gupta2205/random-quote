/**
 * @fileoverview Basic random quote displaying angular2 app
 * @author <a href="mailto:megha.gupta2205@gmail.com">Megha Gupta</a>
 */

 // IIFE function 
(function(app) {
	// all variables are angular2 component, modules, platform 
	var Class = ng.core.Class;
	/**
	 *Services are for havung business rules 
	 * Services are only classes 
	 * It have constructor and differnt functions 
	 */
	app.TimeService = Class({
		constructor: function TimeService() {
			this.timeNow = new Date();
		},
    //Angular 2 chnage detection feature by using ZONE.js to track asyn call
    // Here unlike angular-1 we dont' need apply $scope.apply to run digest cycle to track changes because of 
    // Settimeout and setInterval. 
    getTime: function(callback){
    	var self = this;
    	callback(this.timeNow);
    	setInterval(function() {
    		callback(new Date());
    	}, 1000);
    }
	});

	})(window.app || (window.app ={}));

