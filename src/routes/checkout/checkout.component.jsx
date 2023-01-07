import { useSelector } from "react-redux";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import PaymentForm from "../../components/payment-form/payment-form.component";
import { selectCartItems, selectCartTotal } from "../../store/cart/cart.selector";
import './checkout.styles.scss';


const Checkout = () => {
    
    // const {cartItems, cartTotal} = useContext(CartContext);
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);


    // console.log(cartItems);
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
                    <PaymentForm />
    </div>
    );

}

export default Checkout;