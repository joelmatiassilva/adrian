"use strict";

var assert = require('assert');
var add = require('../add.js');


describe('add()', function(){
	it('deberia returnar 2 cuando vos pasas 1, 1', function(){
		assert.equal(add(1,1), 2);
	});
});

