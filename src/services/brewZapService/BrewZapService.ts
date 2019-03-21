import { HttpClient } from "@microsoft/sp-http";
import { IBeer, IEvent } from './IBeer';

export class BrewZapService {
    private httpClient: HttpClient;

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
    }

    public async getBeers(filter: string): Promise<IBeer[]> {
        try {
            let apiUrl = `https://api.brewzap.com/tables/beer?$filter=((deleted eq false) and (${filter}))&$orderby=createdat desc&$count=50`;
            let response = await this.httpClient.get(apiUrl, HttpClient.configurations.v1, {
                headers: [
                    ['ZUMO-API-VERSION', '2.0.0']
                ]
            });
            return response.json();
        }
        catch (exception) {
            console.log ('Exception calling getBeers - ', exception);
        }
    }

    public async getEvents(tenantId: string, locationId: string): Promise<IEvent[]> {
        try {
            let apiUrl = `https://api.brewzap.com/api/EventApi?tenant_id=${tenantId}&location_id=${locationId}`;
            let response = await this.httpClient.get(apiUrl, HttpClient.configurations.v1, {
                headers: [
                    ['ZUMO-API-VERSION', '2.0.0']
                ]
            });
            return response.json();
        }
        catch (exception) {
            console.log ('Exception calling getBeers - ', exception);
        }
    }
    
}