import {Component} from "@angular/core";

@Component({
    selector: "app-dashboard",
    templateUrl: "./dashboard.component.html",
    styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent {
    id = "chart1";
    width = 600;
    height = 270;
    type = "column2d";
    dataFormat = "json";

    public get data(): any {
        return {
            "chart": {
                "caption": "Test data",
                "subCaption": "Test data subcaption",
                "numberprefix": "$",
                "theme": "fint"
            },
            "data": [
                {
                    "label": "1",
                    "value": "880000"
                },
                {
                    "label": "2",
                    "value": "730000"
                },
                {
                    "label": "3",
                    "value": "590000"
                },
                {
                    "label": "4",
                    "value": "520000"
                },
                {
                    "label": "5",
                    "value": "330000"
                }
            ]
        };
    }

    public get data1(): any {
        return {
            "chart": {
                "caption": "Test data",
                "subcaption": "Last year",
                "xaxisname": "Month",
                "yaxisname": "Amount (In USD)",
                "numberprefix": "$",
                "theme": "fint"
            },
            "categories": [
                {
                    "category": [
                        {
                            "label": "Jan"
                        },
                        {
                            "label": "Feb"
                        },
                        {
                            "label": "Mar"
                        },
                        {
                            "label": "Apr"
                        },
                        {
                            "label": "May"
                        },
                        {
                            "label": "Jun"
                        },
                        {
                            "label": "Jul"
                        },
                        {
                            "label": "Aug"
                        },
                        {
                            "label": "Sep"
                        },
                        {
                            "label": "Oct"
                        },
                        {
                            "label": "Nov"
                        },
                        {
                            "label": "Dec"
                        }
                    ]
                }
            ],
            "dataset": [
                {
                    "seriesname": "Actual Revenue",
                    "data": [
                        {
                            "value": "16000"
                        },
                        {
                            "value": "20000"
                        },
                        {
                            "value": "18000"
                        },
                        {
                            "value": "19000"
                        },
                        {
                            "value": "15000"
                        },
                        {
                            "value": "21000"
                        },
                        {
                            "value": "16000"
                        },
                        {
                            "value": "20000"
                        },
                        {
                            "value": "17000"
                        },
                        {
                            "value": "25000"
                        },
                        {
                            "value": "19000"
                        },
                        {
                            "value": "23000"
                        }
                    ]
                },
                {
                    "seriesname": "Projected Revenue",
                    "renderas": "line",
                    "showvalues": "0",
                    "data": [
                        {
                            "value": "15000"
                        },
                        {
                            "value": "16000"
                        },
                        {
                            "value": "17000"
                        },
                        {
                            "value": "18000"
                        },
                        {
                            "value": "19000"
                        },
                        {
                            "value": "19000"
                        },
                        {
                            "value": "19000"
                        },
                        {
                            "value": "19000"
                        },
                        {
                            "value": "20000"
                        },
                        {
                            "value": "21000"
                        },
                        {
                            "value": "22000"
                        },
                        {
                            "value": "23000"
                        }
                    ]
                },
                {
                    "seriesname": "Profit",
                    "renderas": "area",
                    "showvalues": "0",
                    "data": [
                        {
                            "value": "4000"
                        },
                        {
                            "value": "5000"
                        },
                        {
                            "value": "3000"
                        },
                        {
                            "value": "4000"
                        },
                        {
                            "value": "1000"
                        },
                        {
                            "value": "7000"
                        },
                        {
                            "value": "1000"
                        },
                        {
                            "value": "4000"
                        },
                        {
                            "value": "1000"
                        },
                        {
                            "value": "8000"
                        },
                        {
                            "value": "2000"
                        },
                        {
                            "value": "7000"
                        }
                    ]
                }
            ]
        };
    }

    public get data2(): any {
        return {
            "chart": {
                "caption": "Test data",
                "subCaption": "Last week",
                "xAxisName": "Day",
                "yAxisName": "No. of Visitors (In 1000s)",
                "showValues": "0",
                "theme": "fint"
            },
            "annotations": {
                "groups": [
                    {
                        "id": "anchor-highlight",
                        "items": [
                            {
                                "id": "high-star",
                                "type": "circle",
                                "x": "$dataset.0.set.2.x",
                                "y": "$dataset.0.set.2.y",
                                "radius": "12",
                                "color": "#6baa01",
                                "border": "2",
                                "borderColor": "#f8bd19"
                            },
                            {
                                "id": "label",
                                "type": "text",
                                "text": "Highest footfall 25.5K",
                                "fillcolor": "#6baa01",
                                "rotate": "90",
                                "x": "$dataset.0.set.2.x+75",
                                "y": "$dataset.0.set.2.y-2"
                            }
                        ]
                    }
                ]
            },
            "data": [
                {
                    "label": "Mon",
                    "value": "15123"
                },
                {
                    "label": "Tue",
                    "value": "14233"
                },
                {
                    "label": "Wed",
                    "value": "25507"
                },
                {
                    "label": "Thu",
                    "value": "9110"
                },
                {
                    "label": "Fri",
                    "value": "15529"
                },
                {
                    "label": "Sat",
                    "value": "20803"
                },
                {
                    "label": "Sun",
                    "value": "19202"
                }
            ]
        };
    }
}
