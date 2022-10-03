import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find((eachCartItem) => eachCartItem.id === productToAdd.id);

    if(existingCartItem){
        // console.log(existingCartItem);
        return cartItems.map((eachCartItem) => (eachCartItem.id === productToAdd.id ? {...eachCartItem, quantity: eachCartItem.quantity+1 } : eachCartItem ))
    }
    return [...cartItems, {...productToAdd, quantity:1}];
};


const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find((eachCartItem) => eachCartItem.id === cartItemToRemove.id);

    if(existingCartItem.quantity === 1){
        return cartItems.filter((eachCartItem) => (eachCartItem.id !== cartItemToRemove.id ));
    }
    return cartItems.map((eachCartItem) => (eachCartItem.id === cartItemToRemove.id 
        ? {...eachCartItem, quantity: eachCartItem.quantity-1 } : eachCartItem ));
};

const clearCartItem = (cartItems, cartItemToClear) =>  cartItems.filter((eachCartItem) => (eachCartItem.id !== cartItemToClear.id ));

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOPen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
    cartCount: 0,
    cartTotal: 0,
    
});

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOPen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount,setCartCount] = useState(0);
    const [cartTotal,setCartTotal] = useState(0);

    

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        // console.log(newCartCount);
        setCartCount(newCartCount);
    }, [cartItems]);

    useEffect(() => {
        const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);
        // console.log(newCartCount);
        setCartTotal(newCartTotal);
    }, [cartItems]);
    
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    };
    
    const removeItemFromCart = (cartItemToRemove) => {
        setCartItems(removeCartItem(cartItems, cartItemToRemove));
    };

    const clearItemFromCart = (cartItemToClear) => {
        setCartItems(clearCartItem(cartItems, cartItemToClear));
    };

    const value = {isCartOpen, setIsCartOPen, cartItems, addItemToCart, cartCount, cartTotal, removeItemFromCart, clearItemFromCart};
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
};
