const mongoose = require('mongoose');

require("dotenv").config(); 
const connectionWithDb = ()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(console.log("DB Connected Successfully ok ok"))
    .catch((err)=>{
        console.log("DB Facing Connection Issues");
        console.log(err);
        process.exit(1);
    })
}
module.exports = connectionWithDb;