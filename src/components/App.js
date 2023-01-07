import React, { lazy, Suspense } from "react";
import {Routes, Route} from 'react-router-dom';

import { useEffect } from "react";
// import { onAuthStateChangedListener, createUserDocumentFromAuth, getCurrentUser } from "../utils/firebase/firebase.utils";

import { checkUserSession, setCurrentUser } from "../store/user/user.action";
import { useDispatch } from "react-redux";
import Spinner from "./spinner/spinner.component";



const Home = lazy(() => import('../routes/home/home.component'));
const Navigation = lazy(() => import ( "../routes/navigation/navigation.component"));
const Shop = lazy(() => import('../routes/shop/shop.component'));
const Checkout = lazy(() => import("../routes/checkout/checkout.component"));
const Auth = lazy(() => import('../routes/authentication/authentication.component'));

const App = () => {
    const dispatch = useDispatch();
    
    useEffect(()=>{
      dispatch(checkUserSession());
    },[]);


    return (
        <Suspense fallback={<Spinner />} >
            <div>
            {<Routes>
                <Route path='/' element={<Navigation />} >
                    <Route index element={<Home />} />
                    <Route path='shop/*' element={<Shop />} />
                    <Route path='Auth' element={<Auth />} />
                    <Route path='checkout' element={<Checkout />} />
                </Route>
            
            </Routes>}
            </div>
        </Suspense>
        
        
    );


};


export default App;