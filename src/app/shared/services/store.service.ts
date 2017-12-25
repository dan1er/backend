import {Injectable} from "@angular/core";

@Injectable()
export class StoreService {
    public save(propertyName: string, value: string): void {
        localStorage.setItem(propertyName, value);
    }

    public getProperty(propertyName: string): string | null {
        return localStorage.getItem(propertyName);
    }

    public remove(propertyName: string): void {
        localStorage.removeItem(propertyName);
    }
}
