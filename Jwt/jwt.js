const jwt=require('jsonwebtoken');







module.exports.verifyToken=function verifyToken(req,res,next){
//console.log("A");
//get auth header value
const bearerHeader=req.headers['authorization'];


//check if berear is undefined
if(typeof bearerHeader !== 'undefined'){
//split at the space 
const bearer=bearerHeader.split(' ');

//get token from array
const bearerToken =bearer[1];

//set the token
req.token=bearerToken;

//next middleware
next();

}else{
res.sendStatus(403);
}

}

module.exports.verify=function verify(req,res,next){


jwt.verify(req.token,'secreatkeys',function(err,authData){
if(err){
// console.log('eeee');

verifys="not verify";
next();

}
else{
verifys="verify";
next();
} 
});

}