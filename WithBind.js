 
 module.exports = function(namespace) {
      return function () {
        var arrayOfArguments= Array.prototype.slice.bind(arguments);
        return console.log.apply(null, [namespace].concat(arrayOfArguments()));
    }
    }