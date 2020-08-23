const peopleModel=require('../Models/people');


module.exports.Create=(data)=>{
return new Promise((resolve,reject)=>{
const peoplsave=new peopleModel({
username:data.username,
firstname:data.firstname,
lastname:data.lastname,
});
peoplsave.save((err,result)=>{
if(err)reject(err)
else resolve(result)    
});
});    
}

module.exports.GET=()=>{
return new Promise((resolve,reject)=>{
peopleModel.find((err,result)=>{
if(err)reject(err)
else resolve(result)    
});
});    
}

module.exports.getParticlur=(data)=>{
return new Promise((resolve,reject)=>{
peopleModel.findOne({_id:data},(err,result)=>{
if(err)reject(err)
else resolve(result)    
});
});    
}


module.exports.updatePeople=(id,bodydata)=>{

return new Promise((resolve,reject)=>{
const updaeSchema={
"username":bodydata.username,    
"firstname":bodydata.firstname,   
"lastname":bodydata.lastname    
} 

let idIs={_id:id}
peopleModel.findOneAndUpdate(idIs,updaeSchema,(err,result)=>{
if(err)reject(err)
else resolve(result)    
});
});
}


module.exports.deletePeople=(id)=>{
return new Promise((resolve,reject)=>{
peopleModel.deleteOne({_id:id},(err,result)=>{
if(err)reject(err)
else resolve(result)    
});
});
}

