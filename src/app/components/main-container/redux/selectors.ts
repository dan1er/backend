import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ILayoutState} from "./reducer";

const getLayoutState = createFeatureSelector<ILayoutState>("layout");

export const filtersVisible = createSelector(getLayoutState, (state: ILayoutState) => state.filtersVisible);
export const filterActionVisible = createSelector(getLayoutState, (state: ILayoutState) => state.filterActionVisible);
