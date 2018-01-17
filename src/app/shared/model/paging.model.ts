export default class Paging {
    public page: number;
    public size: number;
    public total: number;

    constructor(data: any = null) {
        this.page = data && data.pageIndex || 0;
        this.size = data && data.pageSize || 14;
        this.total = data && data.total || 100000;
    }
}
