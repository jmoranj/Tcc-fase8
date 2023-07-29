import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Top from "../Components/Top";
import Viewer from "../Components/Viewer";

import GetOneProduct from "../functions/GetOneProduct"

export default function Product(){

    const { code } = useParams()

    const [ product, defineProduct ] = useState({})


    useEffect(function(){

        

        GetOneProduct(code)

            .then(function(result){
                defineProduct(result)
                console.log(result);
            })

            .catch(function(error){
                console.log(error);
            })

    }, [])


    return<>

        <Top/>

        { product && Object.keys(product).length > 0 ?

            <Viewer product= { product }/>  
        
        :

            <h1 style={{ textAlign: "center" }}> Product not found </h1>
        }



    </>
}