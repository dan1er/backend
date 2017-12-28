import {createFeatureSelector, createSelector} from "@ngrx/store";
import {IUserState} from "./reducer";

const getUserState = createFeatureSelector<IUserState>("user");

export const users = createSelector(getUserState, (state: IUserState) => state && state.users);
export const selected = createSelector(getUserState, (state: IUserState) => state && state.selected);
export const anySelected = createSelector(getUserState, (state: IUserState) => state && !!state.selected);
export const roles = createSelector(getUserState, (state: IUserState) => state && state.roles);
export const pageData = createSelector(getUserState, (state: IUserState) => state && state.pageData);
