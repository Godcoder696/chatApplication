const express = require("express")
const chats= require("./data/data")
const app= express();
const dotenv= require("dotenv")
const cors= require("cors")
app.use(cors())

dotenv.config()

const PORT= process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log("Server Started!")
})
app.get("/",(req,res)=>{
    res.send("Hello Server Started!")
})
app.get("/api/chat",(req,res)=>{
    res.send(chats)
})
app.get("/api/chat/:id",(req,res)=>{
    // const id= ;
    const singleChat= chats.find((data)=>{return data._id===req.params.id})
    res.send(singleChat);
    console.log(req.params.id+" "+singleChat);
})