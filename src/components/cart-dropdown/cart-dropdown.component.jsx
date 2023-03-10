import Button from '../button/button.component'
 
import CartItem from '../cart-item/cart-item.component';
import { useNavigate } from 'react-router-dom';
import { CartDrodownContainer,CartItemsContainer, EmptyMessage  } from './cart-dropdown.styles.jsx';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { useCallback } from 'react';

const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems);
    const navigate = useNavigate();

    const goToCheckoutHandler =  useCallback(() => {
        navigate('/checkout');
    },[])
    
    return(
        <CartDrodownContainer>
            <CartItemsContainer>
                { cartItems.length ? 
                (cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)) 
                :
                (<EmptyMessage>Your cart is empty</EmptyMessage>)
                }
            </CartItemsContainer>
            <Button onClick = {goToCheckoutHandler}>GO TO CHECKOUT</Button>
            {
            
           
    }
        </CartDrodownContainer>
    );
};

export default CartDropdown;