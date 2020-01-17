import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  location = {
    city: 'london'
  };

  weather: any;
  value: any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.value = localStorage.getItem('location');
    if (this.value != null) {
      this.location = JSON.parse(this.value);
    } else {
      this.location = {
        city: 'london'
      };
    }

    this.weatherService.getWeather(this.location.city).subscribe((response) => {
      console.log(response);
      this.weather = response;
    });
  }

}
