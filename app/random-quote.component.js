/**
 * @fileoverview Basic random quote displaying angular2 app
 * @author <a href="mailto:megha.gupta2205@gmail.com">Megha Gupta</a>
 */

 // IIFE function 
(function(app) {
	// all variables are angular2 component, modules, platform 
	var Class = ng.core.Class;
	var Component = ng.core.Component;
	var QuoteService = app.QuoteService;

	// Componet are used only for view, just like directive used in angular 1
	app.RandomQuoteComponent = Component({
	//metadata of componnet include sleector which is name of tag we will be using in view
	//Templae is display, It could be URL
	selector: 'random-quote',
  template: '<p><em>{{quote.line}}</em> - {{quote.author}}</p>'
	})
	// Classes of componet usinally create data for template using other component and services. 
	.Class({
		//Here constructor used service, in this case it's an ARRAY 
		constructor: [QuoteService, function RandomQuoteComponent(quoteService){
			var self = this;
			quoteService.generateQuote(3000, function(quote){
			self.quote = quote;
			});
		}]
	});

	})(window.app || (window.app ={}));