
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import './index.scss';
import { UserProvider } from './contexts/user.context';
import {CategoriesProvider} from './contexts/categories.context';
import { CartProvider } from './contexts/cart.context';


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
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CategoriesProvider>
          <CartProvider>
            <App />
          </CartProvider>

        </CategoriesProvider>
      </UserProvider>
      
    </BrowserRouter>
    

   </React.StrictMode>
);
