export class Log {
    public name: string;
    public level: string;

    constructor(data: Log = <Log>{}) {
        this.name = data.name;
        this.level = data.level;
    }
}
