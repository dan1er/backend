import {createActions} from "reduxsauce";

const {Types: AgentTypes, Creators: AgentCreators} = createActions({
    getRecords: ["agency", "from", "to"],
    getRecordsSuccess: ["records"],
    getRecordsFailure: ["error"],
    getAgencies: null,
    getAgenciesSuccess: ["records"],
    getAgenciesFailure: ["error"],
    emailCurrentReport: ["cc", "startDate", "endDate", "agency"],
    emailCurrentReportSuccess: null,
    emailCurrentReportFailure: null,
    emailLastMonthReport: ["cc", "agency"],
    emailLastMonthReportSuccess: null,
    emailLastMonthReportFailure: null,
    updatePageData: ["data"],
    updateFilters: ["filters"],
    reset: null
}, {prefix: "Agent_"});

export {AgentTypes, AgentCreators};
