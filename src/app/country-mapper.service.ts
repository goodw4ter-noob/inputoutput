import { Injectable } from '@angular/core';
import { CountryResponseModel } from './model/country-response.model';
import { CountryModel } from './model/country.model';

@Injectable({
  providedIn: 'root'
})
export class CountryMapperService {

  constructor() { }

  public toClient(countries: CountryResponseModel[]): CountryModel[] {
    return countries.map((country) => ({
      name: country.name,
      capital: country.capital,
      code: country.alpha2Code,
    }));
  }

}
