import { Action, ActionWithPayload, creatAction, withMatcher } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPES, Category} from "./category.types";



export type FetchCategoriesStart = 
Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START>;

export type FetchCategoriesSuccess = 
ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, Category[]>;

export type FetchCategoriesFailed = 
ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, Error>;


// export type CategoryAction = FetchCategoriesStart | FetchCategoriesSuccess | FetchCategoriesFailed;

export const fetchCategoriesStart = withMatcher(
    ():FetchCategoriesStart => 
        creatAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START)
        );

export const fetchCategoriesSuccess = withMatcher(
    (categoriesArray: Category[]): FetchCategoriesSuccess => 
        creatAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray)
);

export const fetchCategoriesFailed = withMatcher(
    (error: Error): FetchCategoriesFailed => 
    creatAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error)
);

