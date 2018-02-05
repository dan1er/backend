import {Injectable} from "@angular/core";
import {DatePipe, DecimalPipe} from "@angular/common";

@Injectable()
export class FormatService {
    constructor(private datePipe: DatePipe,
                private decimalPipe: DecimalPipe) {
    }

    formatDate(date: Date, format: string = "dd/MM/y"): string {
        return this.datePipe.transform(date, format);
    }

    formatNumber(amount: number): string {
        return this.decimalPipe.transform(amount, "0.2-2");
    }
}
