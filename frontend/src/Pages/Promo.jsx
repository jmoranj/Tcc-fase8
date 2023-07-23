import React from "react";

import Top from "../Components/Top";
import Viewer from "../Components/Viewer";

import Examples from "../data/Examples";

export default function Promo(){
    return<>

        <Top/>

        {
            Examples.map(function(product, index){
                return <Viewer key={ index } product={ product }/>
            })
        }
    </>
}