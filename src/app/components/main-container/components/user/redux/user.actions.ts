import {createActions} from "reduxsauce";

const {Types: UserTypes, Creators: UserCreators} = createActions({
    loadUsersRequest: null,
    loadUsersSuccess: ["users"],
    loadUsersFailure: null
}, {prefix: "USER_"});

export {UserTypes, UserCreators};
