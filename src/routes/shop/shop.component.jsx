
import './shop.styles.scss'

import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from '../category/category.component';
import { useDispatch } from 'react-redux';
import { fetchCategoriesStart } from '../../store/categories/category.action';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { useEffect } from 'react';

const Shop = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchCategoriesStart());

    }, []);
    // console.log('shop',products)
    return (
        <Routes>
            <Route index element={<CategoriesPreview />}  />
            <Route path=':category' element={<Category />} />
        </Routes>
        
    );
};
export default Shop;
