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
    appliedFilters: []
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

export const updatePageData = (state = INITIAL_STATE, action: any) => {
    return {...state, pageData: action.data};
};

export const updateAppliedFilters = (state = INITIAL_STATE, action: any) => {
    return {...state, appliedFilters: action.filters};
};

export const HANDLERS = {
    [NomenclatorTypes.LOAD_NOMENCLATORS_REQUEST]: request,
    [NomenclatorTypes.LOAD_NOMENCLATORS_SUCCESS]: success,
    [NomenclatorTypes.LOAD_NOMENCLATORS_FAILURE]: failure,
    [NomenclatorTypes.SELECT]: select,
    [NomenclatorTypes.LOAD_DATA_SUCCESS]: loadDataSuccess,
    [NomenclatorTypes.LOAD_DATA_FAILURE]: loadDataFailure,
    [NomenclatorTypes.UPDATE_PAGE_DATA]: updatePageData,
    [NomenclatorTypes.UPDATE_APPLIED_FILTERS]: updateAppliedFilters
};

export default createReducer(INITIAL_STATE, HANDLERS);
