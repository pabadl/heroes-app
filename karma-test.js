Error.stackTraceLimit = Infinity;
var appContext = require.context('./src', true, /\.spec\.ts/);
appContext.keys().forEach(appContext);
var testing = require('@angular/core/testing');
var browser = require('@angular/platform-browser-dynamic/testing');
testing.TestBed.initTestEnvironment(browser.BrowserDynamicTestingModule, browser.platformBrowserDynamicTesting());