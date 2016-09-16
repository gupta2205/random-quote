/**
 * @fileoverview Basic random quote displaying angular2 app
 * @author <a href="mailto:megha.gupta2205@gmail.com">Megha Gupta</a>
 */

 // IIFE function 
(function() {
	// all variables are angular2 component, modules, platform 
	var Class = ng.core.Class;
	var Component = ng.core.Component;
	var NgModule  = ng.core.NgModule;
	var BrowserModule = ng.platformBrowser.BrowserModule ;
	var platformBrowserDynamic = ng.platformBrowserDynamic.platformBrowserDynamic; 
	/**
	 *Services are for havung business rules 
	 * Services are only classes 
	 *It have constructor and differnt functions 
	 */
	var QuoteService = Class({
		constructor: function QuoteService() {
			// body...
			this.quote = sampleQuotesList;
		},
		getQuote: function() {
      var randomIndex = Math.floor(Math.random() * this.quote.length);
      return this.quote[randomIndex];
    },
    generateQuote: function(delay, callback){
    	var self = this;
    	callback(self.getQuote());
    	setTimeout(function() {
    		callback(self.getQuote());
    	}, delay);
    }
	});

	// Componet are used only for view, just like directive used in angular 1
	var RandomQuoteComponent = Component({
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

	// it's root component with it's selector metadata and template. 
	var AppComponent = Component({
		//Metadata
		selector: 'my-app',
   	template:
      '<h1>Random Quote</h1>' +
      '<random-quote></random-quote>'
  })
	.Class({
		constructor: function AppComponent() {

		}
	});

	// Every app should have module and components, odule and provider dependency 
	//  Imports => Modules, Declaratiosn=> all components, Providers=> All services,, Bootstarp=> root component 
  var AppModule = NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, RandomQuoteComponent],
    providers: [QuoteService],
    bootstrap: [AppComponent]
  })
  .Class({
    constructor: function() { }
  });

  // To Bootstarp module of app 
	platformBrowserDynamic().bootstrapModule(AppModule);

	var sampleQuotesList = [
	    {
	      "line": "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
	      "author": "Brian W. Kernighan"
	    },
	    {
	      "line": "Walking on water and developing software from a specification are easy if both are frozen.",
	      "author": "Edward V Berard"
	    },
	    {
	      "line": "It always takes longer than you expect, even when you take into account Hofstadter's Law.",
	      "author": "Hofstadter's Law"
	    },
	    {
	      "line": "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
	      "author": "Rick Osborne"
	    },
	    {
	      "line": "In theory, there is no difference between theory and practice. But, in practice, there is.",
	      "author": "Jan L. A. van de Snepscheut"
	    },
	    {
	      "line": "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.",
	      "author": "Bill Gates"
	    },
	    {
	      "line": "There are 2 hard problems in computer science: cache invalidation, naming things, and off-by-1 errors.",
	      "author": "Leon Bambrick"
	    },
	    {
	      "line": "Nine people can't make a baby in a month.",
	      "author": "Fred Brooks"
	    },
	    {
	      "line": "If debugging is the process of removing software bugs, then programming must be the process of putting them in.",
	      "author": "Edsger Dijkstra"
	    },
	    {
	      "line": "The first 90% of the code accounts for the first 90% of the development time. The remaining 10% of the code accounts for the other 90% of the development time.",
	      "author": "Tom Cargill"
	    }
	  ];

	})();