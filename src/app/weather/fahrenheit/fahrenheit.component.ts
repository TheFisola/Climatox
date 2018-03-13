import { Component, OnInit } from '@angular/core';
import { CelsiusComponent } from '../celsius/celsius.component';
import { CurrentWeather } from '../../shared/classes/current-weather';
import { WeatherService } from '../../shared/services/weather.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-fahrenheit',
  templateUrl: './fahrenheit.component.html',
  styleUrls: ['./fahrenheit.component.css']
})
export class FahrenheitComponent implements OnInit {
  myWeather:CurrentWeather;

  location;
  currentTime;
  
    constructor(private ws:WeatherService) { }
  
    ngOnInit() {
  
     
      this.currentTime = this.ws.getCurrentNow();
     //this.myWeather= this.ws.weatherNow();
     navigator.geolocation.getCurrentPosition((pos)=>{
       this.location = pos.coords;
       let lat = this.location.latitude;
       lat = parseFloat(lat);
       let lon = this.location.longitude;
       lon = parseFloat(lon);
  
      
       this.ws.localWeatherFahrenheit(lat,lon).subscribe(
  
         (data)=>{
           console.log(data);
  
           
           this.myWeather = new CurrentWeather(data.name,
                                              data.main.temp,
                                              data.weather[0].icon,
                                              data.weather[0].description);
                                       
  
          },
          (error)=>{
            console.log('error message:',error);
        }
         );
       
     });
  
  
    }

//TODO: Remove function below after successfull implementation of the weather search component 

    onSubmit(weatherForm:NgForm){
      this.ws.anotherCityWeatherF(weatherForm.value.city).subscribe(
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
