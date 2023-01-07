import { createSelector } from "reselect";
import { RootState } from "../store";
import { UserState } from "./user.reducer";


export const selectUserReducer = (state: RootState): UserState => {
    console.log('userselector', state)   
    return state.user;
}

export const selectCurrentUser  = createSelector(
    selectUserReducer,
    (user) => user.currentUser);
