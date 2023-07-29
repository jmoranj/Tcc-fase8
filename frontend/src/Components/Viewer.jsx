import React from "react";
import styled from "styled-components";

import SaveCart from "../functions/SaveCart";

const Model = styled.div`
    background: #333;
    box-shadow: 0 0 8px black;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 32px 0;
    gap: 16px; /* Adicionado espaçamento entre as divs do Model */
`;

const ModelImages = styled.div`
    width: 420px;
    height: 420px;
`;

const ModelImageWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModelImage = styled.img`
    max-width: 100%;
    max-height: 100%;
    object-fit: contain; /* Centraliza a imagem dentro do espaço disponível */
`;

const ModelData = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px;
    text-align: center;
    word-break: break-word; /* Permite que o texto quebre para a próxima linha */
    max-width: 450px; /* Defina o valor desejado em pixels */
`;


const CartButton = styled.button`
    box-shadow: 0 0 8px black;
    background: black;
    border: none;
    border-radius: 2px;
    color: white;
    cursor: pointer;
    padding: 8px 32px;
`;

export default function Viewer(props) {
    return (
        <Model>
        <ModelImages>
            <ModelImageWrapper>
            <ModelImage src={props.product.images} alt="pic 1" />
            </ModelImageWrapper>
        </ModelImages>
        <ModelData>
            <div>{props.product.brand}</div>
            <div>{props.product.model}</div>
            <div>R$ {props.product.price}</div>
            <div>{props.product.description}</div>
            <CartButton
            onClick={() => {
                SaveCart(props.product.code);
                alert("Product Added");
            }}
            >
            Add to cart
            </CartButton>
        </ModelData>
        </Model>
    );
}
