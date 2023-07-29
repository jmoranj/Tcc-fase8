import mongoose from "mongoose";

const schema = new mongoose.Schema({
    avaiable: Boolean,
    brand: String,
    model: String,
    description: String,
    images: String,
    price: Number,
    sale: Boolean,
    code: String,
});

const product = mongoose.model("product", schema)

export default product