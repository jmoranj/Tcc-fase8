import axios from "axios";

async function GetOneProduct(code){

    var product = new Object()

    try {

        const url = `http://localhost:4000/product/${code}`

        const results = await axios.get(url)

        product = results.data

    }

    catch(error) {

        console.error(error);

    }

    return product
}

export default GetOneProduct