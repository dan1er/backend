import {Injectable} from "@angular/core";
import {DatePipe} from "@angular/common";

@Injectable()
export class FormatService {
    constructor(private datePipe: DatePipe) {
    }

    formatDate(date: Date, format: string = "dd/MM/y"): string {
        return this.datePipe.transform(date, format);
    }
}
