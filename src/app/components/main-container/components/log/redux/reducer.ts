import {createReducer} from "reduxsauce";
import {LogTypes} from "./actions";
import Paging from "../../../../../shared/model/paging.model";
import {Log} from "../../../../../shared/model/log.model";

export interface ILogState {
    logs: Log[];
    /*    selected?: Log;
        logTypes: { label: string, value: LogType }[];*/
    pageData: Paging;
    /*    appliedFilters: LogType[];
        banks: Log[];
        departments: Log[];
        policyCompanies: Log[];
        accountTypes: Log[];*/
}

export const INITIAL_STATE: ILogState = {
    logs: [],
    /*  logTypes,*/
    pageData: new Paging(),
    /*    appliedFilters: [],
        banks: [],
        departments: [],
        policyCompanies: [],
        accountTypes: []*/
};

export const request = (state = INITIAL_STATE) => {
    return {...state, logs: []};
};

export const success = (state = INITIAL_STATE, action: any) => {
    return {...state, logs: action.logs};
};

export const failure = (state = INITIAL_STATE) => {
    return {...state, logs: []};
};

export const select = (state = INITIAL_STATE, action: any) => {
    return {...state, selected: action.selected};
};

export const loadDataSuccess = (state = INITIAL_STATE, action: any) => {
    return {...state, selected: action.log};
};

export const loadDataFailure = (state = INITIAL_STATE) => {
    return {...state, selected: null};
};

export const updatePageData = (state = INITIAL_STATE, action: any) => {
    return {...state, pageData: action.data};
};

export const HANDLERS = {
    [LogTypes.LOAD_LOGS_REQUEST]: request,
    [LogTypes.LOAD_LOGS_SUCCESS]: success,
    [LogTypes.LOAD_LOGS_FAILURE]: failure,
    [LogTypes.UPDATE_PAGE_DATA]: updatePageData
};

export default createReducer(INITIAL_STATE, HANDLERS);
