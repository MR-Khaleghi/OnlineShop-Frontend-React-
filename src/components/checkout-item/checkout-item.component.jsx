
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, clearItemFromCart, removeItemFromCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';
import CartItem from '../cart-item/cart-item.component';
import './checkout-item.styles.scss';

const CheckoutItem = ({item}) => {
    const {name,quantity, imageUrl, price} = item;
    // const {clearItemFromCart, addItemToCart, removeItemFromCart} = useContext(CartContext);
    const dispatch = useDispatch();
    const CartItems = useSelector(selectCartItems)
    
    const clearItemHandler = () => dispatch(clearItemFromCart(CartItems, item));
    const removeItemHandler = () => dispatch(removeItemFromCart(CartItems, item));
    const addItemHandler = () => dispatch(addItemToCart(CartItems, item));


    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={`${name}`} />
            </div>
            
                <span className="name">{name}</span>
                <span className='quantity'>
                    <button className='arrow' onClick={removeItemHandler}>{`<`}</button>
                    <span className="value">{quantity}</span>
                    <button className='arrow' onClick={addItemHandler}>{`>`}</button>
                </span>
                
                <span className='price'>{price}</span>
                <button onClick={clearItemHandler} className="remove-button" >X</button>
            
        </div>
    );
};
export default CheckoutItem;