import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  location={
    city: 'london',
    code: 'uk'
  }

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getWeather(this.location.city, this.location.code).subscribe((response)=>{
      console.log(response);
    });
  }

}
