function duckCount() {

    return Array.prototype.slice.call(arguments).reduce(function (quackCount, obj) {
        if (Object.prototype.hasOwnProperty.call(obj, 'quack') === true) {
            return ++quackCount;
        }
        else {
            return quackCount;
        }
    }, 0);


}

module.exports = duckCount;


