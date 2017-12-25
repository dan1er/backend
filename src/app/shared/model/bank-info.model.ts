import Nomenclator from './nomenclator';
import { NomenclatorType } from './nomenclator-type.model';

export default class BankInfo {
    public accountPesos: string;
    public accountType: Nomenclator;
    public accountUsd: string;
    public bank: Nomenclator;

    constructor(bankInfoData: BankInfo = <BankInfo>{}) {
        this.accountPesos = bankInfoData.accountPesos;
        this.accountUsd = bankInfoData.accountUsd;
        this.bank = new Nomenclator(NomenclatorType.Bank, bankInfoData.bank);
        this.accountType = new Nomenclator(NomenclatorType.BankAccountType, bankInfoData.accountType);
    }
}
