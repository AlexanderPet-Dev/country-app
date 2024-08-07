import { Component } from '@angular/core';
import { Countries } from '../countries';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.css'
})
export class CountriesComponent {
  title = 'Countries'

  countries: Countries = {
         id: 1,
         name: 'Greece',
         area: '123.00',
         nationalDay: 'Jun 5 2024',
         countryCode2: 'GR',
         countryCode3: 'GRE'
      };

//     Countries: Countries[] = [
//     {
//       id: 1,
//       name: 'Greece',
//       area: '123.00',
//       nationalDay: 'Jun 5 2024',
//       countryCode2: 'GR',
//       countryCode3: 'GRE'
//     },
//     {
//       id: 2,
//       name: 'Italy',
//       area: '623.00',
//       nationalDay: 'Jun 10 2024',
//       countryCode2: 'IT',
//       countryCode3: 'ITL'
//     }
//   ];
}
