import {createActions} from "reduxsauce";

const {Types: LayoutTypes, Creators: LayoutCreators} = createActions({
    initListActions: ["isListView", "filters", "isEditingEnabled"],
    enableListActionsForSelected: null,
    updateListActionsStatus: ["status"],
    toggleFiltersSection: null,
    add: null,
    edit: null,
    remove: null,
    showMessage: ["message"]
}, {prefix: "LAYOUT_"});

export {LayoutTypes, LayoutCreators};
