import {createReducer} from "reduxsauce";
import {LoginTypes} from "./login.actions";

export interface ILoginState {
    error: boolean;
}

export const INITIAL_STATE: ILoginState = {error: false};

export const request = (state = INITIAL_STATE) => {
    return {...state, error: false};
};

export const success = (state = INITIAL_STATE) => {
    return {...state, error: false};
};

export const failure = (state = INITIAL_STATE) => {
    return {...state, error: true};
};

export const HANDLERS = {
    [LoginTypes.LOGIN_REQUEST]: request,
    [LoginTypes.LOGIN_SUCCESS]: success,
    [LoginTypes.LOGIN_FAILURE]: failure
};

export default createReducer(INITIAL_STATE, HANDLERS);
