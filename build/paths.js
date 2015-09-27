var path = require('path');

var appRoot = 'src/application';
var outputRoot = 'cordova/www';

module.exports = {
	root: appRoot,
	source: appRoot + '**/*.js',
	html: appRoot + '**/*.html',
	css: appRoot + '**/*.css',
	style: 'styles/**/*.css',
	output: outputRoot,
	doc:'./doc',
	e2eSpecsSrc: 'test/e2e/src/*.js',
	e2eSpecsDist: 'test/e2e/dist/'
};
