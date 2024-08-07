import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

constructor() {
  private http: HttpClient;
  private messageService: MessageService) { };
  this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
    this.housingLocationList = housingLocationList;
    this.filteredLocationList = housingLocationList;
  });
}

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  url = 'http://localhost:8080/api/countries';

  private log(message: string) {
    this.messageService.add(`CountryService: ${message}`);
  }

 async getAllCountries(): Promise<Countries[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getCountriesById(id: number): Promise<Countries | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  submitApplication(name: string, area: string) {
    console.log(firstName, lastName);
  }

}
