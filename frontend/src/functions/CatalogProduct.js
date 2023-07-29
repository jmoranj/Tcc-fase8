import axios from "axios";

async function CatalogProduct(code, brand, model, description, images, price, sale){

    try{

        const result = await axios.post("http://localhost:4000/",{
            code, brand, model, description, images, price, sale
        })

        console.log(result);
    }
    catch(error){
        console.error(error);
    }

}

export default CatalogProduct