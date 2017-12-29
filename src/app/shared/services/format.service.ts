import {Injectable} from "@angular/core";
import {DatePipe} from "@angular/common";

@Injectable()
export class FormatService {
    constructor(private datePipe: DatePipe) {
    }

    formatDate(date: Date): string {
        return this.datePipe.transform(date, "dd/MM/y");
    }
}
