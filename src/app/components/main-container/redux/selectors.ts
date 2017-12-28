import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ILayoutState} from "./reducer";

const getLayoutState = createFeatureSelector<ILayoutState>("layout");

export const layoutState = createSelector(getLayoutState, (state: ILayoutState) => state);
export const notification = createSelector(getLayoutState, (state: ILayoutState) => state && state.notification);
export const filtersVisible = createSelector(getLayoutState, (state: ILayoutState) => state.filtersSection.visible);
