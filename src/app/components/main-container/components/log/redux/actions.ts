import {createActions} from "reduxsauce";

const {Types: LogTypes, Creators: LogCreators} = createActions({
    loadLogsRequest: null,
    loadLogsSuccess: ["logs"],
    loadLogsFailure: ["error"]
}, {prefix: "LOG_"});

export {LogTypes, LogCreators};
