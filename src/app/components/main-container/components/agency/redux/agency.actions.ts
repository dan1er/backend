import {createActions} from "reduxsauce";

const {Types: AgencyTypes, Creators: AgencyCreators} = createActions({
    loadRecordsRequest: null,
    loadRecordsSuccess: ["records"],
    loadRecordsFailure: null
}, {prefix: "AGENCY_"});

export {AgencyTypes, AgencyCreators};
