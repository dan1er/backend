import {createReducer} from "reduxsauce";
import {AgentTypes} from "./actions";
import Paging from "../../../../../../shared/model/paging.model";
import Agency from "../../../../../../shared/model/agency.model";

export interface IAgentFilters {
    from: Date;
    to: Date;
    agency?: any;
}

export interface IAgentRecord {
    agencyName: string;
    commission: number;
    quantity: number;
    serviceName: string;
    usdCharged: number;
    uyCharged: number;
}

export interface IAgentState {
    filters?: IAgentFilters;
    records: IAgentRecord[];
    pageData: Paging;
    agencies: Agency[];
}

export const INITIAL_STATE: IAgentState = {
    records: [],
    pageData: new Paging({pageSize: 14}),
    agencies: []
};

export const request = (state = INITIAL_STATE) => {
    return {...state, records: []};
};

export const success = (state = INITIAL_STATE, action: any) => {
    return {...state, records: action.records};
};

export const failure = (state = INITIAL_STATE) => {
    return {...state, records: []};
};

export const getAgencies = (state = INITIAL_STATE) => {
    return {...state, agencies: []};
};

export const getAgenciesSuccess = (state = INITIAL_STATE, action: any) => {
    return {...state, agencies: action.records};
};

export const getAgenciesFailure = (state = INITIAL_STATE) => {
    return {...state, agencies: []};
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

export const reset = () => {
    return {...INITIAL_STATE};
};

export const HANDLERS = {
    [AgentTypes.GET_RECORDS]: request,
    [AgentTypes.GET_RECORDS_SUCCESS]: success,
    [AgentTypes.GET_RECORDS_FAILURE]: failure,
    [AgentTypes.GET_AGENCIES]: getAgencies,
    [AgentTypes.GET_AGENCIES_SUCCESS]: getAgenciesSuccess,
    [AgentTypes.GET_AGENCIES_FAILURE]: getAgenciesFailure,
    [AgentTypes.UPDATE_PAGE_DATA]: updatePageData,
    [AgentTypes.UPDATE_FILTERS]: updateFilters,
    [AgentTypes.RESET]: reset
};

export default createReducer(INITIAL_STATE, HANDLERS);
