import {Injectable} from "@angular/core";

@Injectable()
export class SharedConstantsService {
    public readonly FIELD_REQUIRED_MESSAGE = "Este campo es obligatorio";
    public readonly FIELD_INVALID_MESSAGE = "Valor inválido";
    public readonly FIELD_MIN_LENGTH_MESSAGE = "Ha entrado menos caracteres de los permitidos";
    public readonly FIELD_MAX_LENGTH_MESSAGE = "Ha entrado más caracteres de los permitidos";
    public readonly FIELD_MIN_MESSAGE = "Este valor es menor de lo esperado.";
    public readonly FIELD_MAX_MESSAGE = "Este valor es mayor de lo esperado";
    public readonly FIELD_WRONG_NUMBER_MESSAGE = "Este campo debe ser un número válido";
    public readonly FIELD_EMAIL_MESSAGE = "Email inválido";
    public readonly NOT_EQUAL_TO_MESSAGE = "Los valores no coinciden";
    public readonly EMAIL_IN_USE_MESSAGE = "Email no disponible";
    public readonly USER_NAME_IN_USE_MESSAGE = "Usuario no disponible";
}
