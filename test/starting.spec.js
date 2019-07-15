var assert = require('assert');

describe('Basic Mocha test', function(){
    it('should deal with objects', function(){
        var obj = { name: "Don",  gender: "male"}
        var objB = { name: "Don",  gender: "male"}
        obj.should.have.property('name').equal('Don')
        obj.should.deep.equal(objB)
    })
})