import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ILogState} from "./reducer";

const getLogState = createFeatureSelector<ILogState>("log");

export const logs = createSelector(getLogState, (state: ILogState) => state.logs);
export const pageData = createSelector(getLogState, (state: ILogState) => state.pageData);

