var chai = require('chai');
var expect = chai.expect;
var getShortMessages = require('../arrayFilter');
describe('Main function', function () {
    var messagesTest1 = [
        {
            message: 'Welcome Chai.js and Mocha.js'
        },
        {
            message: 'Hello, I am new to javascript and it is a great language. I am enjoying learning it.'
        }
    ];
    var messagesTest2 = [
        {
            message: 'Welcome Chai.js and Mocha.js. These are the testing frameworks'
        },
        {
            message: 'Hello, I am new to javascript and it is a great language. I am enjoying learning it.'
        }
    ];
    it('Check funcitonality', function () {
        expect(getShortMessages(messagesTest1)).to.eqls([ 'Welcome Chai.js and Mocha.js']);
    });
    it('When no message is less than 50 characters', function () {
         expect(getShortMessages(messagesTest2)).to.eqls([]);
    });
    it('Check when input is empty',function (){
        expect(getShortMessages([])).to.eqls([]);
    });
});
describe('Input Related Testing', function () {
     
    var error = 'Input is incorrect. It is supposed to be array of objects with message property';
    it('When input is not an array of objects',function(){
        expect(getShortMessages('Hello Testing')).to.eqls(error);
    });
    
});