import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../shared/services/weather.service';
import { CurrentWeather } from '../../shared/classes/current-weather';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-celsius',
  templateUrl: './celsius.component.html',
  styleUrls: ['./celsius.component.css']
})
export class CelsiusComponent implements OnInit {
myWeather:CurrentWeather;
interval: any;
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

    
     this.ws.localWeatherCelsius(lat,lon).subscribe(

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
