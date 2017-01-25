var assert = require('chai').assert;
var higherOrderFunction = require('../task2');
var count = 0, numberOfTimes = 10;
function counter() {
   if (count < numberOfTimes) {
       count++;
   }
   else {
       count = 0;
   }
}
describe('When valid inputs are provided', function () {
   it('Function should call 10 times', function () {
       higherOrderFunction(counter, numberOfTimes);
       assert.equal(count, numberOfTimes);
   });
});