import React from "react"

import Showcase from "../Components/Showcase"
import Top from "../Components/Top"
import Product from "../Components/Product"

import Examples from "../data/Examples"

export default function Page(){
    return<>
        <Top/>
        
        <Showcase>
        
            {
                Examples.map(function(product, index){
                    return <Product
                        key={ index }
                        code={ product.code }
                        image={ product.images[0] }
                        name={ product.brand + " " + product.model } 
                        price={ product.price} />
                })
            }

        </Showcase>
    </>
}