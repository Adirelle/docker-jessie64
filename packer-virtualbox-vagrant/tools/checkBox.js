#!/usr/bin/nodejs

/*
helper to upload vagrant base boxes to atlas

boxes hosted on atlas have the following schema:
accountName/codename/version/provider
CODENAME=wheezy64 VERSION=7.9.0 tools/uploadBox.js

which means we have to 
 * create first our account (debian)
 * then our codename (testing64)
 * then our version (9.0-beta)
 * then our provider (virtualbox)

*/

// not part of Javascript standard, so requires the xmlthttprequest node module
var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

// var atlasToken = process.env.ATLAS_TOKEN || process.exit(255);
var codename = process.env.CODENAME || 'jessie64' 
var version = process.env.VERSION || '8.2.0';

// these are not going to change
const PROVIDER = 'virtualbox';
const ATLAS_URL = 'https://atlas.hashicorp.com/api/v1/box/debian/';

var checkStatus = function (codename, version) {
	var xhr = new XMLHttpRequest();
	var url = ATLAS_URL + codename + '/version/' +  version + '/provider/' + PROVIDER;
	xhr.open('GET', url, false);
	xhr.send(null);
	return xhr.responseText;
};

var displayStatus = function(codename, version) {
	var status = JSON.parse(checkStatus(codename, version));
	if (status.created_at) {
		console.log('codename: ' + codename);
		console.log('version: ' + version);
		console.log('created_at: ' + status.created_at);
		console.log('download_url: ' + status.download_url);

	} else {
		console.log(codename + ' ' + version + ' not found');
	}
}

displayStatus(codename, version);