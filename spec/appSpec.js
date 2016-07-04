"use strict";

const path = require('path'),
	  fs = require('fs');


describe("resource-dev", function() {
  	it("=> dev environment", function() {
  		let distHtml = path.resolve('specWebpack/dist/resource-dev/index.html'),
  			resultHtml = path.resolve('specWebpack/result/resource-dev/index.html');

  		let distContent = fs.readFileSync(distHtml).toString(),
  			resultContent = fs.readFileSync(resultHtml).toString();

    	expect(true).toBe(distContent === resultContent);
  	});
});


describe("resource-inline-1", function() {
	it("=> inline without compression", function() {
    	let distHtml = path.resolve('specWebpack/dist/resource-inline-1/index.html'),
  			resultHtml = path.resolve('specWebpack/result/resource-inline-1/index.html');

  		let distContent = fs.readFileSync(distHtml).toString(),
  			resultContent = fs.readFileSync(resultHtml).toString();

    	expect(true).toBe(distContent === resultContent);
  	});
});

describe("resource-inline-2", function() {
	it("=> inline with compression", function() {
    	let distHtml = path.resolve('specWebpack/dist/resource-inline-2/index.html'),
  			resultHtml = path.resolve('specWebpack/result/resource-inline-2/index.html');

  		let distContent = fs.readFileSync(distHtml).toString(),
  			resultContent = fs.readFileSync(resultHtml).toString();

    	expect(true).toBe(distContent === resultContent);
  	});
});

describe("resource-md5-1", function() {
  	it("=> md5 with compression / index chunk before react", function() {
    	let distHtml = path.resolve('specWebpack/dist/resource-md5-1/index.html'),
  			resultHtml = path.resolve('specWebpack/result/resource-md5-1/index.html');

  		let distContent = fs.readFileSync(distHtml).toString(),
  			resultContent = fs.readFileSync(resultHtml).toString();

    	expect(true).toBe(distContent === resultContent);
  	});
});

describe("resource-md5-2", function() {
  	it("=> md5 without compression  / react chunk before index", function() {
    	let distHtml = path.resolve('specWebpack/dist/resource-md5-2/index.html'),
  			resultHtml = path.resolve('specWebpack/result/resource-md5-2/index.html');

  		let distContent = fs.readFileSync(distHtml).toString(),
  			resultContent = fs.readFileSync(resultHtml).toString();

    	expect(true).toBe(distContent === resultContent);
  	});
});

describe("resource-favico", function() {
  	it("=> generate favicon", function() {
    	let distHtml = path.resolve('specWebpack/dist/resource-favico/index.html'),
  			resultHtml = path.resolve('specWebpack/result/resource-favico/index.html');

  		let distContent = fs.readFileSync(distHtml).toString(),
  			resultContent = fs.readFileSync(resultHtml).toString();

    	expect(true).toBe(distContent === resultContent);
  	});
});
