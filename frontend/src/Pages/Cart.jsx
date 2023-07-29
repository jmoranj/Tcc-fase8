import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

import Top from "../Components/Top";
import GetCart from "../functions/GetCart";

const TableModel = styled.table`
    box-shadow: 0 0 8px black;
    border-radius: 4px;
    border-spacing: 32px;
    margin: 32px auto;
    padding: 16px;
    width: 60%;
    `

    const TableTopModel = styled.thead`
    font-weight: bold;
`

    const ValueModel = styled.div`
    align-items: center;
    box-shadow: 0 0 8px black;
    border-radius: 4px;
    display: flex;
    justify-content: space-around;
    margin: auto;
    padding: 16px;
    width: 60%;
`

    const PaymentModel = styled.button`
    background-color: #888;
    border: none;
    box-shadow: 0 0 8px black;
    color: black;
    padding: 8px 48px;
`

    const RemoveModel = styled.button`
    background-color: #888;
    border: none;
    box-shadow: 0 0 8px black;
    color: black;
    padding: 4px 18px;
`

    const Cart = () => {
    const [products, setProducts] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchProductDetails() {
        try {
            // Faz a requisição para buscar todos os produtos do servidor
            const response = await axios.get("http://localhost:4000/")
            const productsFromDb = response.data;
            setProducts(productsFromDb)
            setLoading(false)
        } catch (error) {
            console.error("Error fetching product details", error)
            setLoading(false)
        }
        }

        fetchProductDetails()
    }, [])

    useEffect(() => {
        // Calcula o preço total do carrinho
        const total = products.reduce((acc, product) => acc + parseFloat(product.price), 0);
        setTotalPrice(total);
    }, [products]);

    const handleRemoveProduct = (productCode) => {
        // Filtra os produtos do carrinho para manter apenas os produtos que têm código diferente do que queremos remover
        const updatedCart = products.filter((product) => product.code !== productCode);
        setProducts(updatedCart);
        // Atualiza o localStorage com o carrinho atualizado
        localStorage.setItem("cartProducts", JSON.stringify(updatedCart));
    };

    return (
        <>
        <Top />

        {loading ? (
            <p>Loading...</p>
        ) : (
            <TableModel>
            <TableTopModel>
                <tr>
                <td>Amount</td>
                <td>Product</td>
                <td>Price</td>
                <td> </td>
                </tr>
            </TableTopModel>

            <tbody>
                {products && products.length > 0 ? (
                products.map((product, index) => (
                    <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                        {product.brand} {product.model}
                    </td>
                    <td>R$ {product.price}</td>
                    <td>
                        {/* Botão para remover o produto */}
                        <RemoveModel onClick={() => handleRemoveProduct(product.code)}>Remove</RemoveModel>
                    </td>
                    </tr>
                ))
                ) : (
                <tr>
                    <td colSpan="4">No Products in the cart!</td>
                </tr>
                )}
            </tbody>
            </TableModel>
        )}

        <ValueModel>
            <div>Total R$ {totalPrice.toFixed(2)}</div>

            <PaymentModel
            onClick={() => {
                alert(`Do the payment of R$${totalPrice} in the PIX key:\n\n 488.691.108-00`);
            }}
            >
            PIX Payment
            </PaymentModel>
        </ValueModel>
        </>
    );
};

export default Cart;
