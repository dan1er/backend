import {createActions} from "reduxsauce";

const {Types: LayoutTypes, Creators: LayoutCreators} = createActions({
    toggleFilters: null,
    toggleListActions: ["value"]
}, {prefix: "LAYOUT_"});

export {LayoutTypes, LayoutCreators};
