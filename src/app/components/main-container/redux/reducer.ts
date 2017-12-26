import {createReducer} from "reduxsauce";
import {LayoutTypes} from "./actions";

export interface ILayoutState {
    filtersVisible: boolean;
    filterActionVisible?: boolean;
}

export const INITIAL_STATE: ILayoutState = {
    filtersVisible: false,
    filterActionVisible: false
};

export const toggleFilters = (state = INITIAL_STATE) => {
    return {...state, filtersVisible: !state.filtersVisible};
};

export const toggleListActions = (state = INITIAL_STATE, action: any) => {
    return {...state, filterActionVisible: action.value, filtersVisible: false};
};

export const HANDLERS = {
    [LayoutTypes.TOGGLE_FILTERS]: toggleFilters,
    [LayoutTypes.TOGGLE_LIST_ACTIONS]: toggleListActions
};

export default createReducer(INITIAL_STATE, HANDLERS);
