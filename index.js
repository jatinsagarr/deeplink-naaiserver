const axios = require("axios");
const express = require("express");

const app = express();


app.get("/salon/:id",(req,res)=>{
   res.send("Salon Page");
});

app.get("/",(req,res)=>{
   res.send("Server Running...");
});

app.get("/artist/:id",(req,res)=>{
    res.send("Artist Page");
});

app.get("/.well-known/assetlinks.json",(req,res) =>{
    res.sendFile(__dirname + "/assetlinks.json");
})

app.get("/.well-known/apple-app-site-association",(req,res) =>{
    res.setHeader("Content-Type","application/json").sendFile(__dirname + "/apple-app-site-association");
});

app.listen(process.env.PORT || 8000,(err)=>{
    if(err){
        console.log("Server Cannot Run : ",err);
        return;
    }
    console.log("Server running on Port :",process.env.PORT || 8000);
})

