import {createFeatureSelector, createSelector} from "@ngrx/store";
import {IUserState} from "./user.reducer";

const getUserState = createFeatureSelector<IUserState>("user");

export const users = createSelector(getUserState, (state: IUserState) => state.users);
export const selected = createSelector(getUserState, (state: IUserState) => state.selected);
export const anySelected = createSelector(getUserState, (state: IUserState) => !!state.selected);
export const roles = createSelector(getUserState, (state: IUserState) => state.roles);
export const pageData = createSelector(getUserState, (state: IUserState) => state.pageData);
