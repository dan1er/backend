import {createReducer} from "reduxsauce";
import {CommissionServicesTypes} from "./actions";
import Paging from "../../../../../../shared/model/paging.model";

export interface ICommissionServiceFilters {
    from: Date;
    to: Date;
}

export interface ICommissionService {
    quantity?: number;
    serviceName?: string;
    usdCharged?: number;
    usdCommission?: number;
    usdIva?: number;
    usdTotal?: number;
    uyCharged?: number;
    uyCommission?: number;
    uyIva?: number;
    uyTotal?: number;
}

export interface ICommissionServicesState {
    filters?: ICommissionServiceFilters;
    commissionServices: ICommissionService[];
    totals?: ICommissionService;
    pageData: Paging;
}

export const INITIAL_STATE: ICommissionServicesState = {
    commissionServices: [],
    pageData: new Paging({pageSize: 10})
};

export const request = (state = INITIAL_STATE) => {
    return {...state, commissionServices: []};
};

export const success = (state = INITIAL_STATE, action: any) => {
    return {...state, commissionServices: action.services, totals: action.totals};
};

export const failure = (state = INITIAL_STATE) => {
    return {...state, commissionServices: [], totals: {}};
};

export const select = (state = INITIAL_STATE, action: any) => {
    return {...state, selected: action.selected};
};

export const updatePageData = (state = INITIAL_STATE, action: any) => {
    return {...state, pageData: action.data};
};

export const updateFilters = (state = INITIAL_STATE, action: any) => {
    return {...state, filters: action.filters};
};

export const HANDLERS = {
    [CommissionServicesTypes.GET_SERVICES]: request,
    [CommissionServicesTypes.GET_SERVICES_SUCCESS]: success,
    [CommissionServicesTypes.GET_SERVICES_FAILURE]: failure,
    [CommissionServicesTypes.UPDATE_PAGE_DATA]: updatePageData,
    [CommissionServicesTypes.UPDATE_FILTERS]: updateFilters
};

export default createReducer(INITIAL_STATE, HANDLERS);
