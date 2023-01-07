import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { setIsCartOpen } from '../../store/cart/cart.action';
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector';
import { useDispatch } from 'react-redux';
import {ShoppingIcon, CartIconContainer, ItemCount} from './cart-icon.styles';


const CartIcon = () => {
    // const {isCartOpen, setIsCartOPen, cartCount} = useContext(CartContext);
    const isCartOpen = useSelector(selectIsCartOpen);
    const cartCount = useSelector(selectCartCount);
    const dispatch = useDispatch();

    const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

    

    return(
        <CartIconContainer onClick={toggleIsCartOpen}>
             <ShoppingIcon className='shopping-icon' />
             <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
};

export default CartIcon;