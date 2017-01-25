function Spy(target, method) {
    var spy = {
        count: 0
    };
    var newFunc = target[method];
    target[method] = function () {
        spy.count++;
       return newFunc.apply(target, arguments);
    }
    return spy;
}

module.exports = Spy