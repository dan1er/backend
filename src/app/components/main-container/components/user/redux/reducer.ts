import {createReducer} from "reduxsauce";
import {UserTypes} from "./actions";
import {User} from "../../../../../shared/model/user.model";
import Role from "../../../../../shared/model/role.model";
import Paging from "../../../../../shared/model/paging.model";

export interface IUserState {
    users: User[];
    selected?: User;
    roles: Role[];
    pageData: Paging;
}

const roles = [{
    name: "Admin",
    value: "ROLE_ADMIN"
}, {
    name: "Usuario",
    value: "ROLE_USER"
}, {
    name: "Cajero",
    value: "ROLE_CASHIER"
}, {
    name: "Agente",
    value: "ROLE_AGENT"
}];

export const INITIAL_STATE: IUserState = {
    users: [],
    roles: roles,
    pageData: new Paging()
};

export const request = (state = INITIAL_STATE) => {
    return {...state, users: []};
};

export const success = (state = INITIAL_STATE, action: any) => {
    return {...state, users: action.users};
};

export const failure = (state = INITIAL_STATE) => {
    return {...state, users: []};
};

export const select = (state = INITIAL_STATE, action: any) => {
    return {...state, selected: action.selected};
};

export const loadDataSuccess = (state = INITIAL_STATE, action: any) => {
    return {...state, selected: action.user};
};

export const loadDataFailure = (state = INITIAL_STATE) => {
    return {...state, selected: null};
};

export const updatePageData = (state = INITIAL_STATE, action: any) => {
    return {...state, pageData: action.data};
};

export const clearSelected = (state = INITIAL_STATE) => {
    return {...state, selected: null};
};

export const HANDLERS = {
    [UserTypes.LOAD_USERS_REQUEST]: request,
    [UserTypes.LOAD_USERS_SUCCESS]: success,
    [UserTypes.LOAD_USERS_FAILURE]: failure,
    [UserTypes.SELECT]: select,
    [UserTypes.LOAD_DATA_SUCCESS]: loadDataSuccess,
    [UserTypes.LOAD_DATA_FAILURE]: loadDataFailure,
    [UserTypes.UPDATE_PAGE_DATA]: updatePageData,
    [UserTypes.CLEAR_SELECTED]: clearSelected
};

export default createReducer(INITIAL_STATE, HANDLERS);
