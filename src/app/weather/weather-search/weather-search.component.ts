import { Component, OnInit, EventEmitter } from '@angular/core';
import { NgForm,FormsModule } from '@angular/forms'
import { WeatherService } from '../../shared/services/weather.service';
import { CurrentWeather } from '../../shared/classes/current-weather';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css']
})


export class WeatherSearchComponent implements OnInit {

  myWeather:CurrentWeather;

  constructor(private ws: WeatherService) { }

  ngOnInit() {
  }

  onSubmit(weatherForm:NgForm){
this.ws.anotherCityWeatherC(weatherForm.value.city).subscribe(
  (data)=>{
    console.log(data);

    this.myWeather = new CurrentWeather(data.name,
                                        data.main.temp,
                                        data.weather[0].icon,
                                        data.weather[0].description)

  },
  (error)=>{

    console.log('error message:',error);

  },


);
  }

}
