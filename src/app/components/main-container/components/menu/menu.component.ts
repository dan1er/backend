import {Component, isDevMode} from "@angular/core";

interface IMenuItem {
    label: string;
    icon?: string;
    route?: string;
    items?: IMenuItem[];
}

@Component({
    selector: "app-menu",
    templateUrl: "./menu.component.html",
    styleUrls: ["./menu.component.scss"]
})
export class MenuComponent {
    public commonItems: IMenuItem[];
    public systemItems: IMenuItem[];
    public reportsItems: IMenuItem[];

    constructor() {
        this.commonItems = [
            {
                label: "Dashboard",
                icon: "home",
                route: "dashboard"
            },
            {
                label: "Usuarios",
                icon: "contacts",
                route: "usuarios"
            },
            {
                label: "Agencias",
                icon: "store",
                route: "agencias"
            },
            {
                label: "Servicios",
                icon: "room_service",
                route: "servicios"
            },
            {
                label: "Nomencladores",
                icon: "domain",
                route: "nomencladores"
            },
            {
                label: "Variables",
                icon: "games",
                route: "variables"
            }
        ];

        this.systemItems = [
            {
                label: "Métricas",
                icon: "watch"
            },
            {
                label: "Salud",
                icon: "healing"
            },
            {
                label: "Auditorías",
                icon: "security"
            },
            {
                label: "Logs",
                icon: "featured_play_list"
            }
        ];

        if (isDevMode()) {
            this.systemItems.push(
                {
                    label: "Swagger",
                    icon: "code"
                });
        }

        this.reportsItems = [
            {
                label: "Comisión de servicios",
                icon: "insert_chart"
            },
            {
                label: "Reporte de agentes",
                icon: "insert_chart"
            }
        ];
    }
}
