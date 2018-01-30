import {Component} from "@angular/core";

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
                route: "nomencladores/listado"
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
                icon: "watch",
                route: "metricas"
            },
            {
                label: "Salud",
                icon: "healing",
                route: "salud"
            },
            {
                label: "Auditorías",
                icon: "security",
                route: "auditorias"
            },
            {
                label: "Logs",
                icon: "featured_play_list",
                route: "logs/listado"
            }
        ];

        this.reportsItems = [
            {
                label: "Comisión de servicios",
                icon: "insert_chart",
                route: "reporte-comision-servicios/comision-servicios"
            },
            {
                label: "Reporte de agentes",
                icon: "insert_chart",
                route: "reportes/reporte-agentes"
            },
            {
                label: "Cobranza diaria",
                icon: "insert_chart",
                route: "reporte-cobranza/cobranza-diaria"
            }
        ];
    }
}
