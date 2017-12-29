import {createReducer} from "reduxsauce";
import {VariableTypes} from "./actions";
import {Variable} from "../../../../../shared/model/variable.model";

export interface IVariableState {
    variables: Variable[];
    selected?: Variable;
    historicData: Variable[];
}

export const INITIAL_STATE: IVariableState = {
    variables: [],
    historicData: []
};

export const request = (state = INITIAL_STATE) => {
    return {...state, variables: []};
};

export const success = (state = INITIAL_STATE, action: any) => {
    return {...state, variables: action.variables};
};

export const failure = (state = INITIAL_STATE) => {
    return {...state, variables: []};
};

export const select = (state = INITIAL_STATE, action: any) => {
    return {...state, selected: action.selected};
};

export const loadHistoricDataSuccess = (state = INITIAL_STATE, action: any) => {
    return {...state, historicData: action.variables};
};

export const loadHistoricDataFailure = (state = INITIAL_STATE) => {
    return {...state, historicData: []};
};

export const HANDLERS = {
    [VariableTypes.LOAD_VARIABLES_REQUEST]: request,
    [VariableTypes.LOAD_VARIABLES_SUCCESS]: success,
    [VariableTypes.LOAD_VARIABLES_FAILURE]: failure,
    [VariableTypes.SELECT]: select,
    [VariableTypes.LOAD_HISTORIC_DATA_SUCCESS]: loadHistoricDataSuccess,
    [VariableTypes.LOAD_HISTORIC_DATA_FAILURE]: loadHistoricDataFailure
};

export default createReducer(INITIAL_STATE, HANDLERS);
