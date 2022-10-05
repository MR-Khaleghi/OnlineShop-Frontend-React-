import Button from '../button/button.component'
 
import CartItem from '../cart-item/cart-item.component';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { useNavigate } from 'react-router-dom';
import { CartDrodownContainer,CartItemsContainer, EmptyMessage  } from './cart-dropdown.styles.jsx';

const CartDropdown = () => {
    const {cartItems} = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout');
    }
    
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