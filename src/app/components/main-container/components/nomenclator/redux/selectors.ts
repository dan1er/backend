import {createFeatureSelector, createSelector} from "@ngrx/store";
import {INomenclatorState} from "./reducer";

const getNomenclatorState = createFeatureSelector<INomenclatorState>("nomenclator");

export const nomenclators = createSelector(getNomenclatorState, (state: INomenclatorState) => state.nomenclators);
export const selected = createSelector(getNomenclatorState, (state: INomenclatorState) => state.selected);
export const anySelected = createSelector(getNomenclatorState, (state: INomenclatorState) => !!state.selected);
export const nomenclatorTypes = createSelector(getNomenclatorState, (state: INomenclatorState) => state.nomenclatorTypes);
export const pageData = createSelector(getNomenclatorState, (state: INomenclatorState) => state.pageData);
export const filters = createSelector(getNomenclatorState, (state: INomenclatorState) => state.appliedFilters);
