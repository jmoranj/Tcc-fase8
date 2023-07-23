import React from "react";
import styled from "styled-components";

const Model = styled.div`
    align-items: center;
    background: black;
    display: flex;
    justify-content: space-between;
`

const ModelLogo = styled.a`
    padding: 10px;
`

const ModelMenu = styled.div`
    padding: 8px;
`

const ModelCart = styled.a`
    color: white;
    padding: 8px 20px;
    text-decoration: none;
`
const ModelSale = styled.a`
    color: white;
    padding: 8px 20px;
    text-decoration: none;
`

export default function Top(){
    return <Model>
        <ModelLogo href="/">
            <img src="/favicon.png" alt="logo" height={60} width={100} />
        </ModelLogo>

        <ModelMenu>
            
            <ModelSale href="/promo">
            <img src="/saleicon.png" alt="sale" height={35} width={35} />
            </ModelSale>

            <ModelCart href="/cart">
                <img src="/carticon.png" alt="cart" height={35} width={35}/>
            </ModelCart>

        </ModelMenu>

        
    </Model>

    
}
