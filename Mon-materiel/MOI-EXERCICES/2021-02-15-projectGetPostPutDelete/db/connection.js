const mongoose = require('mongoose')
const URI = "mongodb+srv://user4:1234@cluster0.nvyxm.mongodb.net/today20210215?retryWrites=true&w=majority"

mongoose.connect(URI,({useUnifiedTopology:true,useNewUrlParser:true})).then(()=>console.log("You are connected to your database"))