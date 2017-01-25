function callbackDemo(callback, callBackCount) {

for(var ii = 1; ii <= callBackCount; ii++) {
    callback();
}
}
module.exports = callbackDemo;