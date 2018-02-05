import {createFeatureSelector, createSelector} from "@ngrx/store";
import {IAgentState} from "./reducer";
import Agency from "../../../../../../shared/model/agency.model";

const getAgentState = createFeatureSelector<IAgentState>("agent");

export const records = createSelector(
    getAgentState,
    (state: IAgentState) => state.records);

export const agencies = createSelector(
    getAgentState,
    (state: IAgentState) => state.agencies);

export const hasRecords = createSelector(
    getAgentState,
    (state: IAgentState) => !!(state.records && state.records.length));

export const pageData = createSelector(
    getAgentState,
    (state: IAgentState) => state.pageData);

export const selectedAgency = createSelector(
    getAgentState,
    (state: IAgentState) => state.agencies
        && state.filters
        && state.filters.agency
        && state.agencies.find((agency: Agency) => agency.id === state.filters.agency));

export const filters = createSelector(getAgentState, (state: IAgentState) => state.filters);
