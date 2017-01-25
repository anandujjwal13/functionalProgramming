var assert = require('chai').assert;
var doubleAll = require('../arrayMap');
var single = [4];
describe('When valid inputs are provided', function () {
    it('  # It should return doubled number', function () {
        assert.deepEqual( single , doubleAll([2]));
    });
     it('  # It should return an empty array ', function () {
        assert.deepEqual( [], doubleAll([]));
    });
});