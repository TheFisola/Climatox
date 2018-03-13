import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CelsiusComponent } from './celsius/celsius.component';
import { FahrenheitComponent } from './fahrenheit/fahrenheit.component';
import { WeatherSearchComponent } from './weather-search/weather-search.component';
import { FooterComponent } from './layout/footer/footer.component';
import { BodyComponent } from './layout/body/body.component';
import {RouterModule, Routes} from '@angular/router';
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './layout/header/header.component';
import { WeatherComponent } from './weather.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';




const WEATHER_ROUTES: Routes = [
  {path:'',redirectTo:'/celsius',pathMatch:'full'},
  {
    path:'',
    component:WeatherComponent,
    children:[
      {path:'',redirectTo:'/celsius',pathMatch:'full'},
      {path:'celsius',component:CelsiusComponent},
      {path:'fahrenheit',component:FahrenheitComponent}
    ]
  
  },

 
  {path:'**',component:PageNotFoundComponent},

]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, 
    RouterModule.forRoot(WEATHER_ROUTES),
    
  ],
  exports:[
    RouterModule,
    ReactiveFormsModule, 
    FormsModule
    
  ],
  declarations: [
    CelsiusComponent, 
    FahrenheitComponent, 
    WeatherSearchComponent, 
    FooterComponent, 
    BodyComponent,
    PageNotFoundComponent,
    HeaderComponent,
    WeatherComponent
  ]
})
export class WeatherModule { }
