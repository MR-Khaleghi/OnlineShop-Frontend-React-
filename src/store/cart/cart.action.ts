import { ActionWithPayload, creatAction, withMatcher } from "../../utils/reducer/reducer.utils";
import { CategoryItem } from "../categories/category.types";
import { CartItem, CART_ACTION_TYPES } from "./cart.types";

const addCartItem = (cartItems: CartItem[], productToAdd: CategoryItem): CartItem[] => {
    const existingCartItem = cartItems.find((eachCartItem) => eachCartItem.id === productToAdd.id);

    if(existingCartItem){
        // console.log(existingCartItem);
        return cartItems.map((eachCartItem) => (eachCartItem.id === productToAdd.id ? {...eachCartItem, quantity: eachCartItem.quantity+1 } : eachCartItem ))
    }
    return [...cartItems, {...productToAdd, quantity:1}];
};


const removeCartItem = (cartItems: CartItem[], cartItemToRemove: CartItem): CartItem[] => {
    const existingCartItem = cartItems.find((eachCartItem) => eachCartItem.id === cartItemToRemove.id);

    if(existingCartItem && existingCartItem.quantity === 1){
        return cartItems.filter((eachCartItem) => (eachCartItem.id !== cartItemToRemove.id ));
    }
    return cartItems.map((eachCartItem) => (eachCartItem.id === cartItemToRemove.id 
        ? {...eachCartItem, quantity: eachCartItem.quantity-1 } : eachCartItem ));
};

const clearCartItem = (cartItems: CartItem[], cartItemToClear: CartItem): CartItem[] =>  
        cartItems.filter((eachCartItem) => (eachCartItem.id !== cartItemToClear.id ));

// ============================================ Actions ======================

export type SetIsCartOpen = ActionWithPayload<CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean>;

export type SetCartItems = ActionWithPayload<CART_ACTION_TYPES.SET_CART_ITEMS, CartItem[]>;

export const setIsCartOpen = withMatcher(
    (boolean: boolean): SetIsCartOpen => 
    creatAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean));

// same actions & payload
export const setCartItems = withMatcher(
    (newCartItems: CartItem[]): SetCartItems => 
    creatAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems));

export const addItemToCart = (cartItems: CartItem[], productToAdd: CategoryItem) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
   return setCartItems(newCartItems);
};

export const removeItemFromCart = (cartItems: CartItem[], cartItemToRemove: CartItem) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    return setCartItems(newCartItems);
};

export const clearItemFromCart = (cartItems: CartItem[], cartItemToClear: CartItem) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    return setCartItems(newCartItems);
};