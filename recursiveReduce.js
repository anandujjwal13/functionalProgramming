var index = 0;
function reduce(arr, fn, initial) {

    if (arr.length === index) return initial;
    fn(initial, arr[index], index, arr);
    index++;
    return reduce(arr, fn, initial);

}

module.exports = reduce;