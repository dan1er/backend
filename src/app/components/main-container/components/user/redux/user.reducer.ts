import {createReducer} from "reduxsauce";
import {UserTypes} from "./user.actions";
import {User} from "../../../../../shared/model/user.model";

export interface IUserState {
    users: User[];
}

export const INITIAL_STATE: IUserState = {users: []};

export const request = (state = INITIAL_STATE) => {
    return {...state, users: []};
};

export const success = (state = INITIAL_STATE, action: any) => {
    return {...state, users: action.users};
};

export const failure = (state = INITIAL_STATE) => {
    return {...state, users: []};
};

export const HANDLERS = {
    [UserTypes.LOAD_USERS_REQUEST]: request,
    [UserTypes.LOAD_USERS_SUCCESS]: success,
    [UserTypes.LOAD_USERS_FAILURE]: failure
};

export default createReducer(INITIAL_STATE, HANDLERS);
