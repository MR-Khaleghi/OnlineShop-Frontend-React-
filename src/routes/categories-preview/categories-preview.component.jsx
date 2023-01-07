import { Fragment, useContext } from "react";

import CategoryPreview from "../../components/category-preview/category-preview.component";
import { useSelector } from "react-redux";
import { selectCategoriesIsLoading, selectCategoriesMap } from "../../store/categories/category.selector";
import Spinner from "../../components/spinner/spinner.component";

const CategoriesPreview = () => {
    // const {categoriesMap} = useContext(CategoriesContext);
    // console.log('shop',products)
    const isLoading = useSelector(selectCategoriesIsLoading);
    const categoriesMap = useSelector(selectCategoriesMap);
    console.log('preview',categoriesMap);
    return (

        <Fragment>
            { isLoading ? (<Spinner />) :
             (categoriesMap &&
                Object.keys(categoriesMap).map((title) => {
                    const products = categoriesMap[title]
                    return (
                        <CategoryPreview key={title} title={title} products={products} />
                    );
                }))
            }
            
        </Fragment>
        
    );
};
export default CategoriesPreview;
