export default function SaveCart(code){
    
    const cart = localStorage.getItem("cart") || "[]"

    const convertCart = JSON.parse(cart)

    convertCart.push(code)

    const formattedCart = JSON.stringify(convertCart)

    localStorage.setItem("cart", formattedCart)
}