import axios from "axios";

async function GetSaleProducts(){

    var sale = new Array()

    try {

        const results = await axios.get("http://localhost:4000/sale")

        sale = results.data

    }

    catch(error){
        console.error(error);
    }

    return sale
}

export default GetSaleProducts