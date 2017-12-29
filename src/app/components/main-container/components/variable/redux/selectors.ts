import {createFeatureSelector, createSelector} from "@ngrx/store";
import {IVariableState} from "./reducer";

const getVariableState = createFeatureSelector<IVariableState>("variable");

export const variables = createSelector(getVariableState, (state: IVariableState) => state.variables);
export const selectedVariable = createSelector(getVariableState, (state: IVariableState) => state.selected);
export const historicData = createSelector(getVariableState, (state: IVariableState) => state.historicData);
