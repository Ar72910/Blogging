const express = require("express");
const app = express();


require("dotenv").config();
const PORT = process.env.PORT;

// MIDDLEWATE
app.use(express.json());

const blog = require('./routes/blog')
//mount
app.use("/app/v1",blog);

const connectWithDb = require("./config/database");
connectWithDb();

app.listen(PORT,()=>{
    console.log(`App is started at Port no ${PORT}`);
})

app.get("/",(req,res)=>{
    res.send(`<h1>This is my homePage body</h1>`)
})