import express from "express";
import product from "./product.js";

const routes = express.Router();

routes.post("/", function (req, res) {
    
    const newProduct = new product({
        code: req.body.code,
        brand: req.body.brand,
        model: req.body.model,
        description: req.body.description,
        images: req.body.images,
        price: parseFloat(req.body.price),
            
    })

    newProduct.save()
        .then(function () {
            res.sendStatus(201);
        })
        .catch(function (error) {
            console.log(error);
            res.sendStatus(500);
        })
})

routes.get("/", function (req, res) {
    product
        .find()
        .then(function (result) {
            res.json(result);
        })
        .catch(function (error) {
            console.log(error);
            res.sendStatus(500);
        })
})

routes.get("/product/:code", function (req, res) {
    const { code } = req.params;
    product
        .findOne({ code })
        .then(function (result) {
            res.json(result)
        })
        .catch(function (error) {
            console.log(error);
            res.sendStatus(404);
        })
})

routes.get("/sale", function (req, res) {
    product
        .find({ sale: true }) 
        .then(function (results) {
            res.json(results);
        })
        .catch(function (error) {
            console.log(error);
            res.sendStatus(400);
        })
})

export default routes