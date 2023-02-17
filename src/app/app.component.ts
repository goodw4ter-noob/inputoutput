import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Observable, Subscription } from 'rxjs';
import { CountriesService } from './countries.service';
import { CountryMapperService } from './country-mapper.service';
import { CountryResponseModel } from './model/country-response.model';
import { CountryModel } from './model/country.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
// export class AppComponent implements OnInit, OnDestroy {
export class AppComponent implements OnInit {
  // countries!: CountryModel[];
  countries$!: Observable<CountryModel[]>;
  // countrySubscription!: Subscription;
  constructor(
    private countriesService: CountriesService,
    private countryMapperService: CountryMapperService
    ) {};

  // ngOnDestroy(): void {
  //   this.countrySubscription?.unsubscribe();
  // }

  // ngOnInit(): void {
  //   this.countriesService
  //     .get()
  //     .subscribe((countries: CountryResponseModel[]) => {
  //       this.countries = this.toClient(countries);
  //     });
  // }

  ngOnInit(): void {
    this.countries$ = this.countriesService
      .get()
      .pipe(map((countries) => this.countryMapperService.toClient(countries)));
  }

}
