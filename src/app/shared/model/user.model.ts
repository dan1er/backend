import Agency from "./agency.model";

export class User {
    public id?: any;
    public login?: string;
    public firstName?: string;
    public lastName?: string;
    public email?: string;
    public activated?: Boolean;
    public langKey?: string;
    public authorities?: any[];
    public createdBy?: string;
    public createdDate?: Date;
    public lastModifiedBy?: string;
    public lastModifiedDate?: Date;
    public password?: string;
    public confirmPassword?: string;
    public agency?: Agency;

    constructor(userData: User = <User>{}) {
        if (userData.id) {
            this.id = userData.id;
        }
        this.login = userData.login ? userData.login : null;
        this.firstName = userData.firstName ? userData.firstName : null;
        this.lastName = userData.lastName ? userData.lastName : null;
        this.email = userData.email ? userData.email : null;
        this.activated = userData.activated ? userData.activated : false;
        this.langKey = userData.langKey ? userData.langKey : null;
        this.authorities = userData.authorities ? userData.authorities : ["ROLE_ADMIN"];
        this.createdBy = userData.createdBy ? userData.createdBy : null;
        this.createdDate = userData.createdDate ? userData.createdDate : null;
        this.lastModifiedBy = userData.lastModifiedBy ? userData.lastModifiedBy : null;
        this.lastModifiedDate = userData.lastModifiedDate ? userData.lastModifiedDate : null;
        this.password = userData.password ? userData.password : null;
        this.confirmPassword = userData.confirmPassword ? userData.confirmPassword : null;
        this.agency = userData.agency ? new Agency(userData.agency) : new Agency();
    }
}
