var _ = require('underscore');

module.exports = {
  sayHello: sayHello
};

function sayHello() {
  var message = "hello world"
  return message;
}
