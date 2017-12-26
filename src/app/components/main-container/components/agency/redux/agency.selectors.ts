import {createFeatureSelector, createSelector} from "@ngrx/store";
import {IAgencyState} from "./agency.reducer";

const getAgencyState = createFeatureSelector<IAgencyState>("agency");

export const records = createSelector(getAgencyState, (state: IAgencyState) => state.records);
