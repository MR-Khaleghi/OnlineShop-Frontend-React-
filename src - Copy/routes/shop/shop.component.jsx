
import './shop.styles.scss'

import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
const Shop = () => {
    
    // console.log('shop',products)
    return (
        <Routes>
            <Route index element={<CategoriesPreview />}  />
        </Routes>
        
    );
};
export default Shop;
