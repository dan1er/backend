import {createReducer} from "reduxsauce";
import {AgencyTypes} from "./agency.actions";
import Agency from "../../../../../shared/model/agency.model";

export interface IAgencyState {
    records: Agency[];
    selected?: Agency;
}

export const INITIAL_STATE: IAgencyState = {
    records: []
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

export const HANDLERS = {
    [AgencyTypes.LOAD_RECORDS_REQUEST]: request,
    [AgencyTypes.LOAD_RECORDS_SUCCESS]: success,
    [AgencyTypes.LOAD_RECORDS_FAILURE]: failure
};

export default createReducer(INITIAL_STATE, HANDLERS);
