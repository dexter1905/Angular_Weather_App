import { ICityWeather } from './../models/IWeatherData.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IWeatherRawData } from '../models/IWeatherRawData.interface';
import { ISearchResult, IWeatherData } from '../models/IWeatherData.interface';
//const baseUrl = 'https://cors-anywhere.herokuapp.com/https://www.metaweather.com';
const baseUrl = "assets/mock/cities.json";

@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  constructor(
    private http: HttpClient,
  ) { }




  searchLocation(term): Observable<ISearchResult[]> {
    /*
      CHALLANGE
       - get list of cities based on the searched string
       sample url: baseUrl/api/location/search/?query=paris
    */
  //  const url = baseUrl+"/api/location/search/?query="+term;
  //  const url = baseUrl+"/api/location/search/?query=paris";
   const url = baseUrl;
   return this.http.get<ISearchResult[]>(url);

  }

  getCityDetails(woeid): Observable<IWeatherData> {
    /*
      woeid is the city id(number).
      you can use below sample url to fetch the city weather details
      sample url : baseUrl/api/location/111111
    */
    const url = baseUrl+"/api/location/"+woeid;

    /*
      CHALLENGE
       - fetch the city weather data
       - transform the received data to required "IWeatherData" format using transformRawData() func
    */
   return this.http.get<IWeatherData>(url);

  }

  transformRawData(rawData: IWeatherRawData) {
    const transformedWeather: Array<ICityWeather> = [];

    rawData.consolidated_weather.forEach(function(obj) {
      const date = '';
      const temperature = 0;
      const weather_name = '';
      const weather_image = `https://www.metaweather.com/static/img/weather/.svg`;

      transformedWeather.push({ } as ICityWeather);
    });

    return {
      city: rawData.title,
      country: '',
      weather: [],
    };
  }
}
