import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'

const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  weatherTemp :any
  todayDate =  new Date()
  cityName = ""
  weatherIcon :any
  weatherDetails :any
  name =""
  loading = true
  constructor(public httpClient:HttpClient ) {
    // this.loadData()
  }

  loadData(){
    this.httpClient.get(`${API_URL}/weather?q=${this.cityName}&appid=${API_KEY}`).subscribe(results =>{
      console.log(results);
      this.weatherTemp = results['main']
      console.log(this.weatherTemp);
      this.name = results['name']
      this.weatherDetails = results['weather'][0]
      console.log(this.weatherDetails);
      this.weatherIcon = `http://openweathermap.org/img/wn/${this.weatherDetails.icon}@4x.png`
      this.loading = false
      


    })
  }

}
