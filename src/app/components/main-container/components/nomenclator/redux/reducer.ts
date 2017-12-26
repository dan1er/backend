import {createReducer} from "reduxsauce";
import {NomenclatorTypes} from "./actions";
import Paging from "../../../../../shared/model/paging.model";
import Nomenclator from "../../../../../shared/model/nomenclator";
import {NomenclatorType} from "../../../../../shared/model/nomenclator-type.model";

export interface INomenclatorState {
    nomenclators: Nomenclator[];
    selected?: Nomenclator;
    nomenclatorTypes: NomenclatorType[];
    pageData: Paging;
}

const nomenclatorTypes = [
    NomenclatorType.Bank,
    NomenclatorType.BankAccountType,
    NomenclatorType.Currency,
    NomenclatorType.PaymentStatus,
    NomenclatorType.PolicyCompany,
    NomenclatorType.Department
];

export const INITIAL_STATE: INomenclatorState = {
    nomenclators: [],
    nomenclatorTypes,
    pageData: new Paging()
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

export const HANDLERS = {
    [NomenclatorTypes.LOAD_NOMENCLATORS_REQUEST]: request,
    [NomenclatorTypes.LOAD_NOMENCLATORS_SUCCESS]: success,
    [NomenclatorTypes.LOAD_NOMENCLATORS_FAILURE]: failure,
    [NomenclatorTypes.SELECT]: select,
    [NomenclatorTypes.LOAD_DATA_SUCCESS]: loadDataSuccess,
    [NomenclatorTypes.LOAD_DATA_FAILURE]: loadDataFailure,
    [NomenclatorTypes.UPDATE_PAGE_DATA]: updatePageData
};

export default createReducer(INITIAL_STATE, HANDLERS);
