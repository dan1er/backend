import {VariableType} from "./variable-type.model";

export class Variable {
    id: number;
    date: Date = new Date();
    type: VariableType;
    value: number;
    description?: string;
}
