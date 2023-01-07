import { createSelector } from "reselect";
import { RootState } from "../store";
import { CategoriesState } from "./category.reducer";
import { CategoryMap } from "./category.types";



const selectCategoryReducer = (state: RootState): CategoriesState => {
    console.log('selector 1 fired');
    return  state.category;
}

export const selectCategory = createSelector(
    [selectCategoryReducer], 
    (categorySlice) => {
        console.log('selector 2 fired');
    return categorySlice.categories});


export const selectCategoriesMap = createSelector (
        [selectCategory],
        (categories): CategoryMap => {
            console.log('selector 3 fired');
            return categories.reduce((acc, category) => {
            const {title, items} = category;
            // console.log(docSnapshot.data());
            acc[title.toLowerCase()] = items;
            return acc;
        }, {} as CategoryMap )}
    )
        

export const selectCategoriesIsLoading = createSelector(
    [selectCategoryReducer],
    (categoryslice) => categoryslice.isLoading
    )


// export const selectCategoriesMap = (state) =>  {
//     // console.log('selector', state.category.categoriesMap)
//     console.log('selector fired')
//     return (
//         state.category.categories
//         .reduce((acc, category) => {
//             const {title, items} = category;
//             // console.log(docSnapshot.data());
//             acc[title.toLowerCase()] = items;
//             return acc;
//         }, {})
        
//             )
// }
    