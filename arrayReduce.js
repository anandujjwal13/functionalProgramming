function countWords(inputWords) {
    return inputWords.reduce(function (result, inputWord) {
        if (!result[inputWord]) {
           result[inputWord] = 1;
        }
        else {
        result[inputWord]++;
    }
        return result;
    }, {});
}

module.exports = countWords;