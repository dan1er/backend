import {createActions} from "reduxsauce";

const {Types: CommissionServicesTypes, Creators: CommissionServicesCreators} = createActions({
    getServices: ["from", "to"],
    getServicesSuccess: ["services", "totals"],
    getServicesFailure: ["error"],
    updatePageData: ["data"],
    updateFilters: ["filters"]
}, {prefix: "CommissionServices_"});

export {CommissionServicesTypes, CommissionServicesCreators};
