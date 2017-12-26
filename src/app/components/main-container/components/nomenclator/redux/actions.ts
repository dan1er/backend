import {createActions} from "reduxsauce";

const {Types: NomenclatorTypes, Creators: NomenclatorCreators} = createActions({
    loadNomenclatorsRequest: null,
    loadNomenclatorsSuccess: ["nomenclators"],
    loadNomenclatorsFailure: ["error"],
    select: ["selected"],
    loadData: ["nomenclatorname"],
    loadDataSuccess: ["nomenclator"],
    loadDataFailure: null,
    create: ["record"],
    createSuccess: null,
    createFailure: null,
    edit: ["record"],
    editSuccess: null,
    editFailure: null,
    remove: ["nomenclatorname"],
    removeSuccess: null,
    removeFailure: null,
    goToList: ["path"],
    updatePageData: ["data"],
    updateAppliedFilters: ["filters"]
}, {prefix: "NOMENCLATOR_"});

export {NomenclatorTypes, NomenclatorCreators};
