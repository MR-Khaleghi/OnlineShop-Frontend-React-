import { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card.component';
import Spinner from '../../components/spinner/spinner.component';
import { selectCategoriesIsLoading, selectCategoriesMap } from '../../store/categories/category.selector';
import { CategoryContainer, Title } from './category.styles';
import './category.styles.tsx';

type CategoryRootParams = {
    category: string;
}

const Category = () => {
    const {category} = useParams<keyof CategoryRootParams>() as CategoryRootParams;
    console.log('rerender/ re-rendering category component');
    const isLoading = useSelector(selectCategoriesIsLoading);
    const categoriesMap = useSelector(selectCategoriesMap);
    const [products , setProducts] = useState (categoriesMap[category]);
    
useEffect(() => {
    console.log('effect fired calling setProducts');
    setProducts(categoriesMap[category]);
}, [category, categoriesMap]);

    return (
        <Fragment>
            <Title>{category.toUpperCase()}</Title>
            { isLoading ? (<Spinner />) : (
            <CategoryContainer>
                        {products &&
                            products.map((product) => (<ProductCard key={product.id} product={product} />))
                        }
                </CategoryContainer>
                )}
            
        </Fragment>
        
    )

}

export default Category;