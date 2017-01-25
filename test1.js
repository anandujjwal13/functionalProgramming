var assert = require('assert');
var upperCaser=require('../hello-world');
describe('#Upper Case Check',function()
{
  it('should return the String in UpperCase',function()
  {
      assert.equal('BA',upperCaser('bA'));
  });
   it('should return the String in UpperCase',function()
  {
      assert.equal('BA',upperCaser('Ba'));
  });
  it('should return the String in UpperCase',function()
  {
      assert.equal('123',upperCaser(123));
  });
});