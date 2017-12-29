import {createActions} from "reduxsauce";

const {Types: VariableTypes, Creators: VariableCreators} = createActions({
    loadVariablesRequest: null,
    loadVariablesSuccess: ["variables"],
    loadVariablesFailure: ["error"],
    loadHistoricData: ["variableType"],
    loadHistoricDataSuccess: ["variables"],
    loadHistoricDataFailure: ["error"],
    create: ["record"],
    createSuccess: null,
    createFailure: ["error"],
    select: ["selected"]
}, {prefix: "VARIABLE_"});

export {VariableTypes, VariableCreators};
