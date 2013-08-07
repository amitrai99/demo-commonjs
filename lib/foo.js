#!/usr/bin/env node
//require the module. Note the relative path used
var logger = require('./utils/logger'); //standard exports
var constructor = require('./utils/constructor') //constructor module.exports

logger.log('Logging something...');
logger.logFile('/tmp/log.log', 'Logging something to file...');

//call constructor
c1 = new constructor();
c1.foo();
c1.bar();