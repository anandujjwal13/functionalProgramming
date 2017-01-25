module.exports = function arrayMap(inputArray, operation) {
    var mapWithReduce = inputArray.reduce(function (resultArray, arrayItem) {
        var mappedArrayItem = operation(arrayItem);
        resultArray.push(mappedArrayItem);
        return resultArray;
    }, []);
    return mapWithReduce;
}