const assert = require('assert')
var authcontroller = require('../../controllers/auth.controller')
var expect = require('chai').expect;
var should = require('chai').should();
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised')
var sinon = require('sinon')
chai.use(chaiAsPromised)
chai.should()

describe('AuthController',()=>{
    beforeEach(function(){
        console.log("Running before each")
        authcontroller.setRoles(['user'])
    })
    describe('isAuthorised',()=>{
        var user ={}
        beforeEach(function(){
            user = {
                roles: ['user'],
                isAuthorized: function(neededRole){
                    return this.roles.indexOf(neededRole)>=0
                }
            }
            sinon.spy(user, 'isAuthorized')
            authcontroller.setUser(user)
        })
        it('should return false if not authorised',()=>{
           var isAuth = authcontroller.isAuthorized('admin')
           console.log(user.isAuthorized)
           user.isAuthorized.calledOnce.should.be.true
           expect(isAuth).is.to.be.false
           
        })
        it('should return true if  authorised',()=>{
            authcontroller.setRoles(['user'])
            var isAuth = authcontroller.isAuthorized('user')
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

    describe.only('getIndex',function(){
        var user ={}
        beforeEach(function(){
            user = {
                roles: ['user'],
                isAuthorized: function(neededRole){
                    return this.roles.indexOf(neededRole)>=0
                }
            }
        });
        it('should render index', function(){
            var isAuth = sinon.stub(user, 'isAuthorized').returns(true)
            var req = {user: user}
            var res ={
                render: sinon.spy()
            }
            authcontroller.getIndex(req, res)
            isAuth.calledOnce.should.be.true
            res.render.calledOnce.should.be.true
            res.render.firstCall.args[0].should.equal('index')
        })
    })
})