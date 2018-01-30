import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ICommissionServicesState} from "./reducer";

const getCommissionServicesState = createFeatureSelector<ICommissionServicesState>("serviceCommission");

export const services = createSelector(
    getCommissionServicesState,
    (state: ICommissionServicesState) => state.commissionServices);
export const totals = createSelector(
    getCommissionServicesState,
    (state: ICommissionServicesState) => state.totals);
export const pageData = createSelector(
    getCommissionServicesState,
    (state: ICommissionServicesState) => state.pageData);
export const filters = createSelector(getCommissionServicesState, (state: ICommissionServicesState) => state.filters);
