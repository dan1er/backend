import {createActions} from "reduxsauce";

const {Types: UserTypes, Creators: UserCreators} = createActions({
    loadUsersRequest: null,
    loadUsersSuccess: ["users"],
    loadUsersFailure: ["error"],
    select: ["selected"],
    loadData: ["username"],
    loadDataSuccess: ["user"],
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
    updatePageData: ["data"],
    clearSelected: null,
    addCommand: null,
    editCommand: null
}, {prefix: "USER_"});

export {UserTypes, UserCreators};
