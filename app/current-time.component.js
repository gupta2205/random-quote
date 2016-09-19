// /**
//  * @fileoverview Basic random quote displaying angular2 app
//  * @author <a href="mailto:megha.gupta2205@gmail.com">Megha Gupta</a>
//  */

//  // IIFE function 
// (function(app) {
// 	// all variables are angular2 component, modules, platform 
// 	var Class = ng.core.Class;
// 	var Component = ng.core.Component;
// 	var TimeService = app.TimeService;

// 	// Componet are used only for view, just like directive used in angular 1
// 	app.CurrentTimeComponent = Component({
// 	//metadata of componnet include sleector which is name of tag we will be using in view
// 	//Templae is display, It could be URL
// 	selector: 'current-time',
//   template: '<p><em>{{time}}</em></p>'
// 	})
// 	// Classes of componet usinally create data for template using other component and services. 
// 	.Class({
// 		//Here constructor used service, in this case it's an ARRAY 
// 		constructor: [TimeService, function CurrentTimeComponent(timeService){
// 			var self = this;
// 			timeService.getTime(function(time){
// 			self.time = time.toLocaleTimeString();
// 			});
// 		}]
// 	});

// 	})(window.app || (window.app ={}));


(function(app) {
  var Component = ng.core.Component;
  var TimeService = app.TimeService;

  app.CurrentTimeComponent = Component({
    selector: 'current-time',
    template: '<strong>{{time}}</strong>'
  })
  .Class({
    constructor: [TimeService, function TimeComponent(timeService) {
      var self = this;
      timeService.subscribe(function(time) {
        self.time = time.toLocaleTimeString();
      });
    }]
  });

})(window.app || (window.app = {}));
