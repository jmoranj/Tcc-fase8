import axios from "axios";
import { useState, useEffect } from "react";

async function fetchCartProducts(codes) {
    try {
        const response = await axios.get("http://localhost:4000/", { params: { codes } });
        return response.data;
    } catch (error) {
        console.error("Error fetching cart products", error);
        return [];
    }
}

export default function GetCart() {
    const cart = localStorage.getItem("cart") || "[]";
    const cartCodes = JSON.parse(cart);

    const [cartProducts, setCartProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
        const products = await fetchCartProducts(cartCodes);
        setCartProducts(products);
        }

        fetchProducts();
    }, [cartCodes]);

    return cartProducts;
}