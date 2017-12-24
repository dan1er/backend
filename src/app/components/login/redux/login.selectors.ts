import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ILoginState} from "./login.reducer";

const getLoginState = createFeatureSelector<ILoginState>("login");

export const error = createSelector(getLoginState, (state: ILoginState) => state.error);
