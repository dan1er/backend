import {createFeatureSelector, createSelector} from "@ngrx/store";
import {IAgencyState} from "./reducer";

const getAgencyState = createFeatureSelector<IAgencyState>("agency");

export const records = createSelector(getAgencyState, (state: IAgencyState) => state.records);
export const selected = createSelector(getAgencyState, (state: IAgencyState) => state && state.selected);
export const anySelected = createSelector(getAgencyState, (state: IAgencyState) => state && !!state.selected);
export const pageData = createSelector(getAgencyState, (state: IAgencyState) => state && state.pageData);
