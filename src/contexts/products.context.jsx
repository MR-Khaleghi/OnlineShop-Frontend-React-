import { createContext, useEffect, useState } from "react";

import SHOP_DATA from '../shop-data.js';
import { addCollectionAndDocuments, getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

export const ProductsContext = createContext ({
    products: [],
});

export const ProductsProvider  = ({children}) => {
    const [products, setProducts] = useState([]);
    // useEffect(() => {
    //     addCollectionAndDocuments('categories',SHOP_DATA);
    // }, []);

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            console.log('categoryMap', categoryMap);
        }

        getCategoriesMap();
        
    })

    const value = {products};
    // console.log(products);


    return (
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    );
};

