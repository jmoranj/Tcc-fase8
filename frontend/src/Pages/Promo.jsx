import React, { useEffect, useState } from "react";

import Top from "../Components/Top";
import Viewer from "../Components/Viewer";

import GetSaleProducts from "../functions/GetSaleProducts"

export default function Promo(){

    const [ products, defineProducts ] = useState([])

    useEffect(function(){

        GetSaleProducts()

            .then(function(results){
                defineProducts(results)
            })
            

    }, [])

    return<>

        <Top/>

        {
            products.map(function(product, index){

                return <Viewer key={ index } product={ product }/>
            })
        }
        
    </>
}