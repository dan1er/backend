import {createReducer} from "reduxsauce";
import {NomenclatorTypes} from "./actions";
import Paging from "../../../../../shared/model/paging.model";
import Nomenclator from "../../../../../shared/model/nomenclator";
import {NomenclatorType} from "../../../../../shared/model/nomenclator-type.model";

export interface INomenclatorState {
    nomenclators: Nomenclator[];
    selected?: Nomenclator;
    nomenclatorTypes: { label: string, value: NomenclatorType }[];
    pageData: Paging;
    appliedFilters: NomenclatorType[];
    banks: Nomenclator[];
    departments: Nomenclator[];
    policyCompanies: Nomenclator[];
    accountTypes: Nomenclator[];
}

const nomenclatorTypes = [
    {label: "Banco", value: NomenclatorType.Bank},
    {label: "Tipo de cuenta bancaria", value: NomenclatorType.BankAccountType},
    {label: "Moneda", value: NomenclatorType.Currency},
    {label: "Estado de pago", value: NomenclatorType.PaymentStatus},
    {label: "Empresa de seguro", value: NomenclatorType.PolicyCompany},
    {label: "Departamento", value: NomenclatorType.Department}
];

export const INITIAL_STATE: INomenclatorState = {
    nomenclators: [],
    nomenclatorTypes,
    pageData: new Paging(),
    appliedFilters: [],
    banks: [],
    departments: [],
    policyCompanies: [],
    accountTypes: []
};

export const request = (state = INITIAL_STATE) => {
    return {...state, nomenclators: []};
};

export const success = (state = INITIAL_STATE, action: any) => {
    return {...state, nomenclators: action.nomenclators};
};

export const failure = (state = INITIAL_STATE) => {
    return {...state, nomenclators: []};
};

export const select = (state = INITIAL_STATE, action: any) => {
    return {...state, selected: action.selected};
};

export const loadDataSuccess = (state = INITIAL_STATE, action: any) => {
    return {...state, selected: action.nomenclator};
};

export const loadDataFailure = (state = INITIAL_STATE) => {
    return {...state, selected: null};
};

export const loadBanksSuccess = (state = INITIAL_STATE, action: any) => {
    return {...state, banks: action.banks};
};

export const loadBanksFailure = (state = INITIAL_STATE) => {
    return {...state, banks: []};
};

export const loadDepartmentsSuccess = (state = INITIAL_STATE, action: any) => {
    return {...state, departments: action.departments};
};

export const loadDepartmentsFailure = (state = INITIAL_STATE) => {
    return {...state, departments: []};
};

export const loadPolicyCompaniesSuccess = (state = INITIAL_STATE, action: any) => {
    return {...state, policyCompanies: action.companies};
};

export const loadPolicyCompaniesFailure = (state = INITIAL_STATE) => {
    return {...state, policyCompanies: []};
};

export const loadAccountTypesSuccess = (state = INITIAL_STATE, action: any) => {
    return {...state, accountTypes: action.accountTypes};
};

export const loadAccountTypesFailure = (state = INITIAL_STATE) => {
    return {...state, accountTypes: []};
};

export const updatePageData = (state = INITIAL_STATE, action: any) => {
    return {...state, pageData: action.data};
};

export const updateAppliedFilters = (state = INITIAL_STATE, action: any) => {
    return {...state, appliedFilters: action.filters};
};

export const clearSelected = (state = INITIAL_STATE) => {
    return {...state, selected: null};
};

export const reset = () => {
    return {...INITIAL_STATE};
};

export const HANDLERS = {
    [NomenclatorTypes.LOAD_NOMENCLATORS_REQUEST]: request,
    [NomenclatorTypes.LOAD_NOMENCLATORS_SUCCESS]: success,
    [NomenclatorTypes.LOAD_NOMENCLATORS_FAILURE]: failure,
    [NomenclatorTypes.SELECT]: select,
    [NomenclatorTypes.LOAD_DATA_SUCCESS]: loadDataSuccess,
    [NomenclatorTypes.LOAD_DATA_FAILURE]: loadDataFailure,
    [NomenclatorTypes.LOAD_BANKS_SUCCESS]: loadBanksSuccess,
    [NomenclatorTypes.LOAD_BANKS_FAILURE]: loadBanksFailure,
    [NomenclatorTypes.LOAD_DEPARTMENTS_SUCCESS]: loadDepartmentsSuccess,
    [NomenclatorTypes.LOAD_DEPARTMENTS_FAILURE]: loadDepartmentsFailure,
    [NomenclatorTypes.LOAD_POLICY_COMPANIES_SUCCESS]: loadPolicyCompaniesSuccess,
    [NomenclatorTypes.LOAD_POLICY_COMPANIES_FAILURE]: loadPolicyCompaniesFailure,
    [NomenclatorTypes.LOAD_ACCOUNT_TYPES_SUCCESS]: loadAccountTypesSuccess,
    [NomenclatorTypes.LOAD_ACCOUNT_TYPES_FAILURE]: loadAccountTypesFailure,
    [NomenclatorTypes.UPDATE_PAGE_DATA]: updatePageData,
    [NomenclatorTypes.UPDATE_APPLIED_FILTERS]: updateAppliedFilters,
    [NomenclatorTypes.CLEAR_SELECTED]: clearSelected,
    [NomenclatorTypes.RESET]: reset
};

export default createReducer(INITIAL_STATE, HANDLERS);
