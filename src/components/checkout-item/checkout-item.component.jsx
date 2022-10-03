
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './checkout-item.styles.scss';

const CheckoutItem = ({item}) => {
    const {name,quantity, imageUrl, price} = item;
    const {clearItemFromCart, addItemToCart, removeItemFromCart} = useContext(CartContext);

    const clearItemHandler = () => clearItemFromCart(item);
    const removeItemHandler = () => removeItemFromCart(item);
    const addItemHandler = () => addItemToCart(item);


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