export enum CommissionType {
    Fixed = <any>"FIXED",
    Percentile = <any>"PERCENTILE",
}

export enum CommissionTopType {
    Undefined = <any>"UNDEFINED",
    Amount = <any>"AMOUNT",
    IndexedUnit = <any>"INDEXED_UNIT",
    AdjustableUnit = <any>"ADJUSTABLE_UNIT",
}

export class Commission {
    id: number;
    amount: number;
    type: CommissionType;
    top: number;
    topType: CommissionTopType;

    constructor(data: Commission = <Commission>{}) {
        if (data.id) {
            this.id = data.id;
        }
        this.amount = data.amount;
        this.type = data.type || CommissionType.Percentile;
        this.top = data.top;
        this.topType = data.topType;
    }
}
