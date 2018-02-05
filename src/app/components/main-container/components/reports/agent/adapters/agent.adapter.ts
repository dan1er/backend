import {Injectable} from "@angular/core";
import {IAgentRecord} from "../redux/reducer";
import Agency from "../../../../../../shared/model/agency.model";

@Injectable()
export class AgentAdapter {
    public adaptRecordsResponseToTableFormat(data: any): IAgentRecord[] {
        const result: IAgentRecord[] = [];
        if (data) {
            if (!Array.isArray(data)) {
                data = [data];
            }

            data.forEach((item: any) => {
                if (item.serviceCommissionDTOS && item.serviceCommissionDTOS.length) {
                    item.serviceCommissionDTOS.forEach((record: any) => result.push(<IAgentRecord>{
                        ...record,
                        agencyName: item.agencyName
                    }));
                }
            });
        }
        return result;
    }

    public adaptAgencyData(data: Agency[]): Agency[] {
        return data && data.map((item: Agency) => <Agency>({id: item.id, name: item.name, contactEmail: item.contactEmail}));
    }
}
