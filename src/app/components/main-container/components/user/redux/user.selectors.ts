import {createFeatureSelector, createSelector} from "@ngrx/store";
import {IUserState} from "./user.reducer";

const getUserState = createFeatureSelector<IUserState>("user");

export const users = createSelector(getUserState, (state: IUserState) => state.users);
