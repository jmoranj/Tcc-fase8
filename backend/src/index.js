import express from "express";
import cors from "cors";
import "./database.js";
import routes from "./routes.js";

const server = express()

const allowedOrigins = ['http://localhost:3000', 'http://localhost:3000/cart']
server.use(cors({
    origin: function (origin, callback) {
        if (allowedOrigins.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Acesso negado por CORS'))
        }
    }
}))

server.use(express.json())
server.use(routes)

server.listen(4000, function () {
    console.log("Working on 4000.")
})