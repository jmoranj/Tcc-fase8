import React from "react";
import styled from "styled-components";
import axios from "axios";

import Top from "../Components/Top";

const FormModel = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: auto;
    padding-top: 100px;
    width: 60%;
`
const ModelEnter = styled.div`
    display: flex;
    justify-content: space-between;
`

const Enter = styled.input`
    border: 2px solid black;
    padding: 4px 12px;
`

const EnterTexts = styled.textarea`
    border: 2px solid black;
    padding: 4px 12px;
`

const Button = styled.button`
    background-color: #888;
    border: none;
    box-shadow: 0 0 8px black;
    color: black;
    padding: 8px;
`

const SaleCheck = styled.div`
    align-items: center;
    display: flex;
    justify-content: flex-start;
`


export default function Catalog() {
    function SendCatalog(event) {
        event.preventDefault()

        const code = event.target.code.value
        const brand = event.target.brand.value
        const model = event.target.model.value
        const description = event.target.description.value
        const images = event.target.images.value
        const price = event.target.price.value
        const sale = event.target.sale.checked

        const newProduct = {
            code,
            brand,
            model,
            description,
            images,
            price,
            sale,
        }

        axios
            .post("http://localhost:4000/", newProduct)
            .then((response) => {
                console.log("Product registered!");
                alert("Product cataloged");
                window.location.replace('/'); // Redireciona para a página inicial
            })
            .catch((error) => {
                console.error("Error catalog", error);
            })
    }

    return (
        <>
            <Top />

            <FormModel onSubmit={SendCatalog}>
                <Enter type="text" name="code" placeholder="PRODUCT CODE" required />
                <Enter type="text" name="brand" placeholder="PRODUCT BRAND" required />
                <Enter type="text" name="model" placeholder="PRODUCT MODEL" required />
                <EnterTexts name="description" placeholder="PRODUCT DESCRIPTION" rows={4} required></EnterTexts>

                <ModelEnter>
                    <Enter type="URl" name="images" placeholder="HTTP://" required />
                </ModelEnter>

                <Enter type="number" step="0.01" name="price" placeholder="R$ 399,00" required />
                <SaleCheck>
                    <Enter type="checkbox" id="sale" name="sale" />
                    <label htmlFor="sale"> PRODUCT ON SALE </label>
                </SaleCheck>
                <Button type="submit"> Catalog! </Button>
            </FormModel>
        </>
    );
}