// /**
//  * @fileoverview Basic random quote displaying angular2 app
//  * @author <a href="mailto:megha.gupta2205@gmail.com">Megha Gupta</a>
//  */

//  // IIFE function 
// (function(app) {
// 	// all variables are angular2 component, modules, platform 
// 	var Component = ng.core.Component;
// 	// it's root component with it's selector metadata and template. 
// 	app.AppComponent = Component({
// 		//Metadata
// 		selector: 'my-app',
//    	template:
//       '<h1>Random Quote</h1>' +
//       '<random-quote></random-quote>'+
//       '<h1>The Time</h1>' +
//       '<p>It\'s <current-time></current-time> and all is well.</p>'

//   })
// 	.Class({
// 		constructor: function AppComponent() {
// 		}
// 	});
// 	})(window.app || (window.app ={}));

(function(app) {
  var Component = ng.core.Component;

  app.AppComponent = Component({
    selector: 'time-app',
    template:
      '<h1>The Time</h1>' +
      '<p>It\'s <current-time></current-time> and all is well.</p>'
  })
  .Class({
    constructor: function AppComponent() { }
  });

})(window.app || (window.app = {}));
