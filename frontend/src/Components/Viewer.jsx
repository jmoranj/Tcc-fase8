import React from "react";
import styled from "styled-components";

const Model = styled.div`
    background: #333;
    box-shadow: 0 0 8px black;
    color: white;
    display: flex;
    margin: 32px 0;
`

const ModelImages = styled.div`
    display: flex;
    height: 420px;
    overflow: scroll;
    width: 420px;
`

const ModelData = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px;
`

const CartButton = styled.button`
    box-shadow: 0 0 8px black;
    background: black;
    border: none;
    border-radius: 2px;
    color: white;
    cursor: pointer;
    padding: 8px 32px;
`

export default function Viewer(props){
    
    return  <Model>

        <ModelImages>

            <img src={ props.product.images[0] } alt="pic 1" />

            <img src={ props.product.images[1] } alt="pic 2" />

            <img src={ props.product.images[2] } alt="pic 3" />

        </ModelImages>

        <ModelData>

            <div> { props.product.brand } </div>

            <div> { props.product.model } </div>

            <div> R$ { props.product.price } </div>

            <div> { props.product.description } </div>

            <CartButton> Add to cart </CartButton>

        </ModelData>

    </Model>
}
