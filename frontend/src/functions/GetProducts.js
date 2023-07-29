import axios from "axios";

async function GetProducts(){

    var products = new Array

    try{

        const results = await axios.get("http://localhost:4000/")

        products = results.data

    }

    catch(error){
        console.log(error);
    }

    return products
}

export default GetProducts