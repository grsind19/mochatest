function AuthController(){
    var roles;
    function setRoles(role){
        roles= role
    }
    function isAuthorized(neededRole){
        return roles.indexOf(neededRole)>=0
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
    return {isAuthorized, isAuthorizedAsync, isAuthorizedPromise, setRoles, getIndex}
}

module.exports = AuthController()