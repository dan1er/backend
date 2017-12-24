import {createActions} from "reduxsauce";

const {Types: LoginTypes, Creators: LoginCreators} = createActions({
    loginRequest: ["username", "password"],
    loginSuccess: null,
    loginFailure: null
}, {prefix: "LOGIN_"});

export {LoginTypes, LoginCreators};
