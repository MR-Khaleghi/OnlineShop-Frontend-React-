import { useReducer } from "react";
import { createContext } from "react";
import { creatAction } from "../utils/reducer/reducer.utils";


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

const clearCartItem = (cartItems, cartItemToClear) =>  
        cartItems.filter((eachCartItem) => (eachCartItem.id !== cartItemToClear.id ));

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

const CART_ACTION_TYPES = {
    SET_CART_ITEMS : 'SET_CART_ITEMS',
    SET_IS_CART_OPEN: 'SET_IS_CART_OPEN'
};

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0,
};

const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch(type){
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                    ...state,
                    ...payload,
                };
        case CART_ACTION_TYPES.SET_IS_CART_OPEN: 
        return {
            ...state,
            isCartOpen: payload,
        };
        default:
            throw new Error(`unhandled type of ${type} in cartReducer`);    
    }
    
};

export const CartProvider = ({children}) => {
    // const [isCartOpen, setIsCartOPen] = useState(false);
    // const [cartItems, setCartItems] = useState([]);
    // const [cartCount,setCartCount] = useState(0);
    // const [cartTotal,setCartTotal] = useState(0);

    const [ {cartItems, cartCount, cartTotal, isCartOpen}, dispatch ] = useReducer(cartReducer, INITIAL_STATE);


    const updateCartItemsReducer = (newCartItems) => {
        
        const newCartCount = newCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);

        const newCartTotal = newCartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);

        dispatch (creatAction( CART_ACTION_TYPES.SET_CART_ITEMS,
            {
                cartItems: newCartItems,
                cartCount: newCartCount,
                cartTotal: newCartTotal,
            }
        ));
    }

    // useEffect(() => {
    //     const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
    //     // console.log(newCartCount);
    //     setCartCount(newCartCount);
    // }, [cartItems]);

    // useEffect(() => {
    //     const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);
    //     // console.log(newCartCount);
    //     setCartTotal(newCartTotal);
    // }, [cartItems]);
    
    const addItemToCart = (productToAdd) => {
        const newCartItems = addCartItem(cartItems, productToAdd);
        updateCartItemsReducer(newCartItems);
    };
    
    const removeItemFromCart = (cartItemToRemove) => {
        const newCartItems = removeCartItem(cartItems, cartItemToRemove);
        updateCartItemsReducer(newCartItems);
    };

    const clearItemFromCart = (cartItemToClear) => {
        const newCartItems = clearCartItem(cartItems, cartItemToClear);
        updateCartItemsReducer(newCartItems);
    };
    const setIsCartOPen = (bool) => {
        dispatch (creatAction( CART_ACTION_TYPES.SET_IS_CART_OPEN, bool ));
    }

    const value = {
        isCartOpen,
        setIsCartOPen,
        cartItems,
        addItemToCart, 
        cartCount, 
        cartTotal, 
        removeItemFromCart, 
        clearItemFromCart};
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
};
