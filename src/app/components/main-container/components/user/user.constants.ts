import {Injectable} from "@angular/core";

@Injectable()
export class UserConstants {
    public readonly CREATED_MESSAGE = "Usuario adicionado satisfactoriamente";
    public readonly EDITED_MESSAGE = "Usuario modificado satisfactoriamente";
    public readonly REMOVED_MESSAGE = "Usuario eliminado satisfactoriamente";
}
