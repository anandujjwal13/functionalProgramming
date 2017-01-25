var slice = Array.prototype.slice;

function logger(namespace) {
    return function () {
        var arr = slice.call(arguments);
        return console.log.apply(null, [namespace].concat(arr));
    }
}
module.exports = logger;