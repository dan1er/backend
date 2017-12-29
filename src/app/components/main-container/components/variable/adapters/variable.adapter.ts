import {Injectable} from "@angular/core";
import {Variable} from "../../../../../shared/model/variable.model";

@Injectable()
export class VariableAdapter {
    private typesDescription = {
        UI: "Unidad indexada",
        UR: "Comisión",
        TC: "Tasa de cambio",
        IVA: "Iva",
        PGA: "Porciento de Comisión"
    };

    public mapDescriptionFromType(variables: Variable[]): Variable[] {
        return variables.map((variable: Variable) => ({...variable, description: this.typesDescription[variable.type]}));
    }
}
