const mongoose=require('mongoose');
const db_url=process.env.DB_URL


///connection with mongodb
mongoose.connect(db_url,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true},(err,result)=>{
if(err)console.log("ERROR:"+err)
else console.log("DB connected")
});