
const mongoose = require('mongoose')
require('dotenv').config()

function connectDB(){
  return   mongoose.connect(process.env.URI,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>console.log("You are connected to your dataBase")).catch(err => console.log(err))
}



module.exports = {
    connectDB,
}
