import {Commission} from "./commission.model";

export class Service {
    public id: any;
    public name: string;
    public metadata: string;
    public active: boolean;
    public online: boolean;
    public commission: Commission;

    constructor(data: Service = <Service>{}) {
        if (data.id) {
            this.id = data.id;
        }
        this.name = data.name ? data.name : null;
        this.metadata = data.metadata ? data.metadata : null;
        this.active = data.active;
        this.online = data.online;
        this.commission = new Commission(data.commission);
    }
}

