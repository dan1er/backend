import {createActions} from "reduxsauce";

const {Types: LayoutTypes, Creators: LayoutCreators} = createActions({
    initListActions: null,
    initListActionsWithoutFiltering: null,
    enableListActionsForSelected: null,
    disableListActions: null,
    updateListActionsStatus: ["status"],
    toggleFiltersSection: null,
    add: null,
    edit: null,
    remove: null
}, {prefix: "LAYOUT_"});

export {LayoutTypes, LayoutCreators};
