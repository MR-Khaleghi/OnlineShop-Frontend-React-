import { useContext } from "react";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { CartContext } from "../../contexts/cart.context";
import './checkout.styles.scss';


const Checkout = () => {
    
    const {cartItems, cartTotal} = useContext(CartContext);

    console.log(cartItems);
    return (
        
        <div className="checkout-container">
            <div className="checkout-header">
                <div>
                    <span className="header-block">Product</span>
                </div>
                <div>
                    <span className="header-block">Description</span>
                </div>
                <div>
                    <span className="header-block">Quantity</span>
                </div>
                <div>
                    <span className="header-block">Price</span>
                </div>
                <div>
                    <span className="header-block">Remove</span>
                </div>
            </div>
            
            
                {cartItems.map((item) => 
                    <CheckoutItem key={item.id} item={item}/>
                )}
                    
                    <span className="total"> Total : ${cartTotal} </span>
    </div>
    );

}

export default Checkout;