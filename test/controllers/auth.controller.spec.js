const assert = require('assert')
var authcontroller = require('../../controllers/auth.controller')

describe('AuthController',()=>{
    beforeEach(function(){
        console.log("Running before each")
        authcontroller.setRoles(['user'])
    })
    describe('isAuthorised',()=>{
        it('should return false if not authorised',()=>{
            assert.equal(false, authcontroller.isAuthorized('admin'))
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
})