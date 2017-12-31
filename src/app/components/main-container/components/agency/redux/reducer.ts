import {createReducer} from "reduxsauce";
import {AgencyTypes} from "./actions";
import Agency from "../../../../../shared/model/agency.model";
import Paging from "../../../../../shared/model/paging.model";

export interface IAgencyState {
    records: Agency[];
    selected?: Agency;
    pageData: Paging;
}

export const INITIAL_STATE: IAgencyState = {
    records: [],
    pageData: new Paging()
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

export const select = (state = INITIAL_STATE, action: any) => {
    return {...state, selected: action.selected};
};

export const loadDataSuccess = (state = INITIAL_STATE, action: any) => {
    return {...state, selected: action.record};
};

export const loadDataFailure = (state = INITIAL_STATE) => {
    return {...state, selected: null};
};

export const clearSelected = (state = INITIAL_STATE) => {
    return {...state, selected: null};
};

export const HANDLERS = {
    [AgencyTypes.LOAD_RECORDS_REQUEST]: request,
    [AgencyTypes.LOAD_RECORDS_SUCCESS]: success,
    [AgencyTypes.LOAD_RECORDS_FAILURE]: failure,
    [AgencyTypes.SELECT]: select,
    [AgencyTypes.LOAD_DATA_SUCCESS]: loadDataSuccess,
    [AgencyTypes.LOAD_DATA_FAILURE]: loadDataFailure,
    [AgencyTypes.CLEAR_SELECTED]: clearSelected
};

export default createReducer(INITIAL_STATE, HANDLERS);
