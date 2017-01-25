function getShortMessages(inputArrayOfObjects) {
    return inputArrayOfObjects.filter(function isLengthFine(obj) {
        return obj.message.length < 50;
    }).map(function (filteredObj) { return filteredObj.message; });

}
module.exports = getShortMessages;