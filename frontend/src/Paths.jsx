import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Cart from "./Pages/Cart"
import Catalog from "./Pages/Catalog"
import Home from "./Pages/Home"
import Product from "./Pages/Product"
import Promo from "./Pages/Promo";

export default function Paths(){

    return <BrowserRouter>
        <Routes>

            <Route index path="/" element={<Home/>}/>

            <Route path="/product/:code" element={<Product/>}/>

            <Route path="/sale" element={<Promo/>}/>

            <Route path="/cart" element={<Cart/>}/>

            <Route path="/catalog" element={<Catalog/>}/>

        </Routes>
    </BrowserRouter>
}