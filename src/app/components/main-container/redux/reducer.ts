import {createReducer} from "reduxsauce";
import {LayoutTypes} from "./actions";
import {LayoutItemStatus} from "../../../shared/model/layout-item-status.model";

export interface INotification {
    message: string;
}

export interface ILayoutState {
    add: LayoutItemStatus;
    edit: LayoutItemStatus;
    remove: LayoutItemStatus;
    filter: LayoutItemStatus;
    filtersSection: LayoutItemStatus;
    notification?: INotification;
}

export const INITIAL_STATE: ILayoutState = {
    add: new LayoutItemStatus(),
    edit: new LayoutItemStatus(),
    remove: new LayoutItemStatus(),
    filter: new LayoutItemStatus(),
    filtersSection: new LayoutItemStatus()
};

export const toggleFiltersSection = (state = INITIAL_STATE) => {
    const filtersSection = new LayoutItemStatus({visible: !state.filtersSection.visible});
    return {...state, filtersSection};
};

export const initListActions = (state = INITIAL_STATE) => {
    return {
        ...state,
        add: new LayoutItemStatus({visible: true}),
        edit: new LayoutItemStatus({visible: false}),
        remove: new LayoutItemStatus({visible: false}),
        filter: new LayoutItemStatus({visible: true})
    };
};

export const initListActionsWithoutFiltering = (state = INITIAL_STATE) => {
    return {
        ...state,
        add: new LayoutItemStatus({visible: true}),
        edit: new LayoutItemStatus({visible: false}),
        remove: new LayoutItemStatus({visible: false}),
        filter: new LayoutItemStatus({visible: false}),
        filtersSection: new LayoutItemStatus({visible: false})
    };
};

export const enableListActionsForSelected = (state = INITIAL_STATE) => {
    return {
        ...state,
        add: new LayoutItemStatus({visible: true}),
        edit: new LayoutItemStatus({visible: true}),
        remove: new LayoutItemStatus({visible: true})
    };
};

export const disableListActions = (state = INITIAL_STATE) => {
    return {
        ...state,
        add: new LayoutItemStatus({visible: false}),
        edit: new LayoutItemStatus({visible: false}),
        remove: new LayoutItemStatus({visible: false}),
        filter: new LayoutItemStatus({visible: false}),
        filtersSection: new LayoutItemStatus({visible: false})
    };
};

export const addClick = (state = INITIAL_STATE) => {
    const add = new LayoutItemStatus({visible: true, active: true});
    const edit = new LayoutItemStatus({visible: state.edit.visible, active: false});
    const remove = new LayoutItemStatus({visible: state.remove.visible, active: false});
    return {
        ...state,
        add,
        edit,
        remove
    };
};

export const editClick = (state = INITIAL_STATE) => {
    const add = new LayoutItemStatus({visible: state.add.visible, active: false});
    const edit = new LayoutItemStatus({visible: true, active: true});
    const remove = new LayoutItemStatus({visible: state.remove.visible, active: false});
    return {
        ...state,
        add,
        edit,
        remove
    };
};

export const deleteClick = (state = INITIAL_STATE) => {
    const add = new LayoutItemStatus({visible: state.add.visible, active: false});
    const edit = new LayoutItemStatus({visible: state.edit.visible, active: false});
    const remove = new LayoutItemStatus({visible: true, active: true});
    return {
        ...state,
        add,
        edit,
        remove
    };
};

export const showMessage = (state = INITIAL_STATE, action: any) => {
    return {...state, notification: {message: action.message}};
};

export const HANDLERS = {
    [LayoutTypes.INIT_LIST_ACTIONS]: initListActions,
    [LayoutTypes.INIT_LIST_ACTIONS_WITHOUT_FILTERING]: initListActionsWithoutFiltering,
    [LayoutTypes.ENABLE_LIST_ACTIONS_FOR_SELECTED]: enableListActionsForSelected,
    [LayoutTypes.DISABLE_LIST_ACTIONS]: disableListActions,
    [LayoutTypes.TOGGLE_FILTERS_SECTION]: toggleFiltersSection,
    [LayoutTypes.ADD]: addClick,
    [LayoutTypes.EDIT]: editClick,
    [LayoutTypes.REMOVE]: deleteClick,
    [LayoutTypes.SHOW_MESSAGE]: showMessage
};

export default createReducer(INITIAL_STATE, HANDLERS);
