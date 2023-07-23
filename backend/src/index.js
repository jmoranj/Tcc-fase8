import express from "express";
import cors from "cors";

import "./Connection.js"
import { Users } from "./Users.js"

const server = express()

server.use(cors())
server.use(express.json())

server.get("/", async function(req,res){
    const results = await Users.find()
    res.status(200).json(results)
})

server.post("/", async function(req,res){
    try{    
        const newUser = new Users(req.body)
        const result = await newUser.save()
        res.status(201).json(result)
    }
    catch(error){
        console.log(error);
        res.sendStatus(500)
    }
    
})

server.listen(4000, function(){
    console.log("SERVER IS WORKING! ");
})