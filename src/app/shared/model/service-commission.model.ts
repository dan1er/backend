export class ServiceCommission {
    public serviceName: any;
    public quantity: any;
    public uyCharged: any;
    public uyCommission: any;
    public uyIva: any;
    public uyTotal: any;
    public usdCharged: any;
    public usdCommission: any;
    public usdIva: any;
    public usdTotal: any;
}

export class ServiceCommissionReport {
    public startDate: any;
    public endDate: any;
    public serviceCommissionDTOS: Array<ServiceCommission> = [];
    public total: ServiceCommission;
}
