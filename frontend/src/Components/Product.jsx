import React from "react";
import styled from "styled-components";

const Model = styled.div`
    box-shadow: 0 0 8px black;
    padding: 4px;
    overflow: hidden;
    text-align: center;
`

const ModelText = styled.div`
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 10pt;
    white-space: nowrap;
    max-width: 180px;
`

const ModelPrice = styled.div`
    color: #999;
    font-size: 12pt;
    padding: 5px;
`

const LinkProduct = styled.a`
    color: inherit;
    text-decoration: none;
`

export default function Product(props){

    return <Model>
        <LinkProduct href={ "/product/" + props.code}>
            <img src={props.images} alt="product pic" width={180} height={200} />
            <div>
                <ModelText> {props.name} </ModelText>
                <ModelPrice> R$ {props.price} </ModelPrice>      
            </div>        
        </LinkProduct>
    </Model>
}