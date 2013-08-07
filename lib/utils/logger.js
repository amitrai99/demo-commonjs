/**
 * Sample CommonJS module with exports.
 *
 * Note that `exports` is useful only if we are augmenting it with new Objects.
 * We CanNot export a Constructor with it.
 */

//augment the exports object
exports.log = function(msg) {
  console.log(msg);
};

//augment the exports object
exports.logFile = function(file, msg) {
  console.log('[%s] %s', file, msg);
};

//object must be defined before being assigned to exports
var obj = {
  logDb: function(db, msg) {
    console.log('[%s] %s', db, msg);
  },
  logNull: function(msg) {
    console.log('[/dev/null] %s', msg);
  }
};

exports.more = obj;