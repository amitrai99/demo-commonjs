/**
 * Constructor exported as module.
 *
 * With node.js we can export a Constructor only by using `module.exports`.
 * See : http://nodejs.org/api/modules.html 
 */

//We Must use module.exports if we want to export a Constructor
module.exports = exports = Something;

function Something() {}

Something.prototype.foo = function() {
  console.log('Constructor foo...');
};

Something.prototype.bar = function() {
  console.log('Constructor bar...');
};