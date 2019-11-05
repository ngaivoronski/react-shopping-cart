import React, { createContext } from "react";

const CartContext = React.createContext({
    cart: [],
    setCart: () => {}
});

export default CartContext;