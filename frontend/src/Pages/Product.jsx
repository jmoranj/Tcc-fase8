import React from "react";
import { useParams } from "react-router-dom";

import Top from "../Components/Top";
import Viewer from "../Components/Viewer";
    
import Examples from "../data/Examples";

export default function Product(){

    const { code } = useParams()

    const productExample = Examples.find(product => product.code === code)


    return<>

        <Top/>

        {productExample && Object.keys(productExample).length > 0 ?

            <Viewer product= { productExample }/>
        
        :

            <h1 style={{ textAlign: "center" }}> Product not found </h1>

        }      
    </>
}