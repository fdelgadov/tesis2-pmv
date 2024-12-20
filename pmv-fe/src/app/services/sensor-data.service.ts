import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SensorDataService {
  endpoint = `${this.gs.rootPath}/sensorData`
  
  constructor(
    private gs: GlobalService,
    private http: HttpClient,
  ) { }

  findLastData(){
    return this.http.get<any>(`${this.endpoint}/lastData`)
  }

  findAllData(){
    return this.http.get<any[]>(`${this.endpoint}/all`)
  }
}
