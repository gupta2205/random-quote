/**
 * @fileoverview Basic random quote displaying angular2 app
 * @author <a href="mailto:megha.gupta2205@gmail.com">Megha Gupta</a>
 */

 // IIFE function 
(function(app) {
	// all variables are angular2 component, modules, platform 
	
	var Component = ng.core.Component;
	var TimeService = app.TimeService;

	// Componet are used only for view, just like directive used in angular 1

app.CurrentTimeComponent = Component({
    selector: 'current-time',
    template: '<strong>{{time}}</strong>'
  })
  .Class({
    constructor: [TimeService, function TimeComponent(timeService) {
      var self = this;
      timeService.getTime(function(time) {
        self.time = time.toLocaleTimeString();
      });
    }]
  });

})(window.app || (window.app = {}));
