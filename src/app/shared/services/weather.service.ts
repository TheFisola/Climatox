import { Injectable } from '@angular/core';
import { CurrentWeather } from '../classes/current-weather';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx'
import { IfObservable } from 'rxjs/observable/IfObservable';

@Injectable()
export class WeatherService {

/*
current:CurrentWeather = new CurrentWeather(
'Lagos',
'33',
'owi owi-01d',
'sunny',

);

*/

location
  constructor(private http: HttpClient) { }



//GET CURRENT TIME

getCurrentNow(){
    var d = new Date();
    var  hour = (d.getHours()<10?'0':'') + d.getHours();
    var  minutes = (d.getMinutes()<10?'0':'') + d.getMinutes();
    var hourToInt = parseInt(hour);
      if(hourToInt>12){
     var meridian = 'PM'
      }
      else{
        meridian = 'AM'
      }
  return hour + ':' + minutes + " " + meridian;
  }

  

 /* weatherNow(){
    return this.current
  }
*/
  localWeatherFahrenheit(lat:any,lon:any){
    return this.http.get<any>(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5f7c8a783b60e002a0615b4996f24731&units=imperial`)
                        .map((response:Response)=> response).catch(this.handleError);

  }

  localWeatherCelsius(lat:any,lon:any){
    return this.http.get<any>(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5f7c8a783b60e002a0615b4996f24731&units=metric`)
                        .map((response:Response)=> response).catch(this.handleError);

  }
  
  anotherCityWeatherC(city:any){
    return this.http.get<any>(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5f7c8a783b60e002a0615b4996f24731&units=metric`)
                        .map((response:Response) => response).catch(this.handleError)
  }

  anotherCityWeatherF(city:any){
    return this.http.get<any>(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5f7c8a783b60e002a0615b4996f24731&units=imperial`)
                        .map((response:Response) => response).catch(this.handleError)
  }


  handleError(error:Response){
    return IfObservable.throw(error.statusText);
    


  }

}
