import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { WeatherModule } from './weather/weather.module';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { WeatherService } from './shared/services/weather.service';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    WeatherModule,
    SharedModule,
    RouterModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
