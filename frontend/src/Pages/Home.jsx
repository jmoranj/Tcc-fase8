import React, { useEffect, useState } from "react"

import Showcase from "../Components/Showcase"
import Top from "../Components/Top"
import Product from "../Components/Product"

import GetProducts from "../functions/GetProducts"

export default function Home(){

    const [ products, defineProducts ] = useState([])

    useEffect(function(){


        GetProducts()
        
            .then(function(results){
                defineProducts(results)
            })

    }, [products])

    return<>
        <Top/>
        
        <Showcase>
        
            {
                products.map(function(product, index){

                    return <Product
                        key={ index }
                        code={ product.code }
                        images={ product.images }
                        name={ product.brand + " " + product.model } 
                        price={ product.price} />
                })
                
            }
        </Showcase>
    </>
}