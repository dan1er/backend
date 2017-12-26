import BankInfo from "./bank-info.model";
import Nomenclator from "./nomenclator";
import {NomenclatorType} from "./nomenclator-type.model";
import * as moment from "moment";

export default class Agency {
    public id: number;
    public address: string;
    public amountCashRegisters: number;
    public bankInfo: BankInfo;
    public businessName: string;
    public city: string;
    public codeUTE: string;
    public comments: string;
    public contactEmail: string;
    public contactName: string;
    public contractExpirationDate: Date;
    public department: Nomenclator;
    public depositDays: number;
    public franchiseValue: number;
    public localityHasBank: true;
    public mainCommercialActivity: string;
    public mobilePhone: string;
    public name: string;
    public number: number;
    public paymentAgreedQuotas: number;
    public policyCompany: Nomenclator;
    public policyEndDate: Date;
    public policyNumber: string;
    public quantityEmployees: number;
    public responsiblePersons: string;
    public rut: string;
    public telephone: string;
    public website: string;
    public workingHours: string;
    public active: boolean;

    constructor(agencyData: Agency = <Agency>{}) {
        if (agencyData.id) {
            this.id = agencyData.id;
        }

        this.address = agencyData.address;
        this.amountCashRegisters = agencyData.amountCashRegisters;
        this.bankInfo = new BankInfo(agencyData.bankInfo);
        this.businessName = agencyData.businessName;
        this.city = agencyData.city;
        this.codeUTE = agencyData.codeUTE;
        this.comments = agencyData.comments;
        this.contactEmail = agencyData.contactEmail;
        this.contactName = agencyData.contactName;
        this.contractExpirationDate = agencyData.contractExpirationDate
            ? moment(agencyData.contractExpirationDate).toDate()
            : new Date();
        this.department = new Nomenclator(NomenclatorType.Department, agencyData.department);
        this.depositDays = agencyData.depositDays;
        this.franchiseValue = agencyData.franchiseValue;
        this.localityHasBank = agencyData.localityHasBank;
        this.mainCommercialActivity = agencyData.mainCommercialActivity;
        this.mobilePhone = agencyData.mobilePhone;
        this.name = agencyData.name;
        this.number = agencyData.number;
        this.paymentAgreedQuotas = agencyData.paymentAgreedQuotas;
        this.policyCompany = new Nomenclator(NomenclatorType.PolicyCompany, agencyData.policyCompany);
        this.policyEndDate = agencyData.policyEndDate
            ? moment(agencyData.policyEndDate).toDate()
            : new Date();
        this.policyNumber = agencyData.policyNumber;
        this.quantityEmployees = agencyData.quantityEmployees;
        this.responsiblePersons = agencyData.responsiblePersons;
        this.rut = agencyData.rut;
        this.telephone = agencyData.telephone;
        this.website = agencyData.website;
        this.workingHours = agencyData.workingHours;
        this.active = agencyData.active === undefined ? true : agencyData.active;
    }
}

export class BasicAgency {
    public id: number;
    public name: string;

    constructor(agencyData: BasicAgency = <BasicAgency>{}) {
        if (agencyData.id) {
            this.id = agencyData.id;
        }

        this.name = agencyData.name;
    }
}

