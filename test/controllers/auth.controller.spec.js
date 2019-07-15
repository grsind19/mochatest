const assert = require('assert')
var authcontroller = require('../../controllers/auth.controller')
var expect = require('chai').expect;
var should = require('chai').should();
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)
chai.should()

describe('AuthController',()=>{
    beforeEach(function(){
        console.log("Running before each")
        authcontroller.setRoles(['user'])
    })
    describe('isAuthorised',()=>{
        it('should return false if not authorised',()=>{
           var isAuth = authcontroller.isAuthorized('admin')
           expect(isAuth).is.to.be.false
           should
        })
        it('should return true if  authorised',()=>{
            authcontroller.setRoles(['user','admin'])
            var isAuth = authcontroller.isAuthorized('admin')
            isAuth.should.be.true
         })
        it('should not allow get if not authorized')
        it('should allow get if authorized')
    })

    describe('isAuthorizedAsync',function(){
        it('should return false if not authorised',function(done){
            this.timeout(2500)
            authcontroller.isAuthorizedAsync('admin',(isAuth)=>{
                assert.equal(false, isAuth)
                done();
            })
        })
    })

    describe('isAuthorizedPromise',function(){
        it('should return false if not authorised',function(){
            return authcontroller.isAuthorizedPromise('admin').should.eventually.be.false
        })
    })
})