
/*/var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
// conf.js
exports.config = {
 // framework: 'jasmine',
 // seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['pom.js']

};
onPrepare =function() {

	browser.driver.manage().window().maximize();   // Launches browser and Maximises the window
	 jasmine.getEnv().addReporter(
		        new Jasmine2HtmlReporter({
		          savePath: 'target/screenshots'
		        })
		      );
	};

var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');





allScriptsTimeout:2500000;
getPageTimeout:2500000;
exports.config = {
 //seleniumAddress: 'http://localhost:4444/wd/hub',//direct connect
  //specs: ['psc2.0.js','Meal.js','Fees.js','Reports.js','fund.js','Autoreplenish.js'],
  specs: ['Meal.js'],
chromeDriver : 'C:/Users/Ranjitha/Desktop/projects/PSC2/PSC2/node_modules/webdriver-manager/selenium/chromedriver.exe',
seleniumServerJar: 'C:/Users/Ranjitha/Desktop/projects/PSC2/PSC2/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.141.59.jar',

 //multiCapabilities: [{
	//  browserName: 'internet explorer'
	// },{
	//   browserName: 'chrome'
	// }],
  
  
 //capabilities: {
//'browserName': 'firefox',
//'moz:firefoxOptions': {
//	args: ['-P "Default"']
//}
      
// },
 
 
 // capabilities: {
	//  'browserName': 'firefox',
	//  'moz:firefoxOptions': {
	//    'args': ['--safe-mode']
	//  }
	//},

 
  

  
  
  
  
  
  
  
  
 onPrepare :function()
 {
		browser.driver.manage().window().maximize();
		 jasmine.getEnv().addReporter(
			        new Jasmine2HtmlReporter({
			          savePath: 'target/screenshots'
			        })
			      );
		 
	
 },
 
	
	jasmineNodeOpts: {
	    showColors: true, // Use colors in the command line report.
	 },
	

	  jasmineNodeOpts: {
		  defaultTimeoutInterval: 2500000
		  },	  
	  
	/* jasmineNodeOpts: {
		// If true, print colors to the terminal.
		showColors: true,
		// Default time to wait in ms before a test fails.
		defaultTimeoutInterval: 30000,
		// Function called to print jasmine results.
		print: function() {},
		// If set, only execute specs whose names match the pattern, which is
		// internally compiled to a RegExp.
		grep: 'pattern',
		// Inverts 'grep' matches
		invertGrep: false
	  }  */
	  
	  
	//Options to be passed to Jasmine.
	 // jasmineNodeOpts: {
	  //  defaultTimeoutInterval: 30000
	 // }
	 //var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
	 //var Jasmine2HtmlReporter = require('protractor-jasmine2-screenshot-reporter');
	 var HtmlReporter = require('protractor-beautiful-reporter');

	// var reporter = new HtmlReporter({
	   //dest: '/target/screenshots',
	  // filename: 'my-report.html'
	 //});  
	 
	 exports.config = {
		 directConnect: true,
		 
		 // Capabilities to be passed to the webdriver instance.
		 Capabilities: {

		   'browserName': 'chrome',
		 },
		 
		 // Framework to use. Jasmine is recommended.
		 framework: 'jasmine',
	   
		 // Spec patterns are relative to the current working directory when
		 // protractor is called.
		 //specs: ['preorder.js','Digital.js'],
		specs: ['digital.js'],

		chromeDriver:'C:/Users/revathip/Desktop/Automation/digital/Preorder and digital/node_modules/webdriver-manager/selenium/chromedriver_85.0.4183.87.exe',
		seleniumServerJar :'C:/Users/revathip/Desktop/Automation/digital/Preorder and digital/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.141.59.jar',
	 // Options to be passed to Jasmine.
		 jasmineNodeOpts: {
		   defaultTimeoutInterval: 25000000
		 },
		 //beforeLaunch: function() {
		  // return new Promise(function(resolve){
			// reporter.beforeLaunch(resolve);
		  // });
		 //},
		 /*onPrepare: function() {
			browser.driver.manage().window().maximize();

			jasmine.getEnv().addReporter(
			  new HtmlReporter({
				savePath: 'target/screenshots'
		 // Assign the test reporter to each running instance
		// onPrepare: function() {
		   //jasmine.getEnv().addReporter(reporter);
		})
		);	
	},   */ 
	onPrepare: function() {
		browser.driver.manage().window().maximize();

		// Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
		jasmine.getEnv().addReporter(new HtmlReporter({
			preserveDirectory: false,

		   baseDirectory: 'Reports/screenshots'
		   	  , filename: 'my-report.html'

		   , docName: 'index.html'

		}).getJasmine2Reporter());
	 }
	/*prefs: {
		download: {
		prompt_for_download: false,
		default_directory: '/Downloads/',
		}
	}  */
		 // Close the report after all tests finish
		 //afterLaunch: function(exitCode) {
		   //return new Promise(function(resolve){
		  // });
		 //}
	 
	   };
