import {NomenclatorType} from "./nomenclator-type.model";

export default class Nomenclator {
    public id: number;
    public code: string;
    public description: string;
    public type: NomenclatorType;

    constructor(type: NomenclatorType, data: any = {}) {
        if (data.id) {
            this.id = data.id;
        }
        this.code = data.code;
        this.description = data.description;
        this.type = type;
    }
}
