function AuthController(){
    var roles;
    var user;
    function setRoles(role){
        roles= role
    }

    function setUser(inUser){
        user = inUser
    }
    function isAuthorized(neededRole){
        if(user){
            return user.isAuthorized(neededRole)
        }
       
    }

    function isAuthorizedAsync(neededRole, cb){
        setTimeout(()=>{cb(roles.indexOf(neededRole)>=0)},2100)
    }
    function isAuthorizedPromise(neededRole){
        return new Promise(function(resolve){
            setTimeout(function(){resolve(roles.indexOf(neededRole)>=0)},0)
        })
       
    }
    function getIndex(req, res){
        res.render('index')
    }
    return {isAuthorized, isAuthorizedAsync, isAuthorizedPromise, setRoles, getIndex, setUser}
}

module.exports = AuthController()