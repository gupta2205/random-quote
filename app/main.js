/**
 * @fileoverview Basic random quote displaying angular2 app
 * @author <a href="mailto:megha.gupta2205@gmail.com">Megha Gupta</a>
 */

 // IIFE function 
(function(app) {
	// all variables are angular2 component, modules, platform 
	var Component = ng.core.Component;
	var NgModule  = ng.core.NgModule;
	var BrowserModule = ng.platformBrowser.BrowserModule ;
	var platformBrowserDynamic = ng.platformBrowserDynamic.platformBrowserDynamic; 
	var QuoteService = app.QuoteService;
	var RandomQuoteComponent = app.RandomQuoteComponent;
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

	})(window.app || (window.app ={}));