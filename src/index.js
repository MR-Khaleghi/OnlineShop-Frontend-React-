
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import './index.scss';
import { Provider } from 'react-redux';
import {persistor, store} from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from './utils/stripe/stripe.utils';

// import reportWebVitals from "./reportWebVitals";

// ReactDOM.render(
// //   <React.StrictMode>
    
//     <React.StrictMode>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>


//     </React.StrictMode>
        
// //   </React.StrictMode>
// , document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        {/* <UserProvider> */}
          {/* <CategoriesProvider> */}
            {/* <CartProvider> */}
            <Elements stripe={stripePromise}>
                <App />
            </Elements>
              
            {/* </CartProvider> */}

          {/* </CategoriesProvider> */}
        {/* </UserProvider> */}
        
      </BrowserRouter>
      </PersistGate>
    </Provider>
    
  //  </React.StrictMode>
);
