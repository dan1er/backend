import {createActions} from "reduxsauce";

const {Types: AgencyTypes, Creators: AgencyCreators} = createActions({
    loadRecordsRequest: null,
    loadRecordsSuccess: ["records"],
    loadRecordsFailure: null,
    select: ["selected"],
    loadData: ["id"],
    loadDataSuccess: ["record"],
    loadDataFailure: null,
    create: ["record"],
    createSuccess: null,
    createFailure: null,
    edit: ["record"],
    editSuccess: null,
    editFailure: null,
    remove: ["username"],
    removeSuccess: null,
    removeFailure: null,
    goToList: ["path"],
    clearSelected: null,
    addCommand: null,
    editCommand: null,
    reset: null
}, {prefix: "AGENCY_"});

export {AgencyTypes, AgencyCreators};
