CommonJS
=============

[CommonJS](http://www.commonjs.org/) is a module format that is more optimized 
for server side programming. CommonJS is used as the standard module definition 
mechanism in [Node.js](http://nodejs.org/).

It provides a very simple API for defining and importing a module.

There are just two objects that are needed:

* `exports` : A global variable that is used to define a module
* `require` : A global variable that used to import an external module for use

## Creating a module

Creating a module is as simple as creating an object/function and then exposing
it via the `exports` variable. 

Note that for *constructors* it is possible to export a module both before and 
after actually defining it. This works because of hoisting. 

For objects we must define the object before attaching to `exports` otherwise
`undefined` will be assigned.

Path used to `require` is *relative* to the current file.

For example, we create a module file *foo.js* as below:

```js
//create and export the module
exports.foo = function {
  console.log('foo');
};
```

## Importing a module

Module is imported using the `require` global method.
Assuming *bar.js* in the same folder as foo.js above.

```js
//importing module
var lib = require('./foo');
//calling
lib.foo();
```

### Note about Node.js

Node.js module export works differently for objects and Constructors.

To export objects augment the global `exports` object directly.

```js
exports.foo = function () {}
var bar = {
  some:'112', 
  other: function() {}
};
exports.bar = bar;
```

However, *constructors* cannot be exported using `exports` directly.

```js
function bar() {}

//exports = bar; //fails

//this works
module.exports = exports = bar;
```

## References
* [Node.js Modules](http://nodejs.org/api/modules.html)
* [Addy Osmani's Explanation of CommonJS](http://addyosmani.com/resources/essentialjsdesignpatterns/book/#detailcommonjs)
* [Demystifying CommonJS Modules](http://dailyjs.com/2010/10/18/modules/)