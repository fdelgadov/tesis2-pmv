import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';
import { SensorDataService } from '../services/sensor-data.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  sensorData = new Map<number, any>()
  dataTemperatura!: number[]

  constructor(
    private gs: GlobalService,
    private sensorDataService: SensorDataService,
  ){}

  ngOnInit(): void {
    this.loadDataInicial() 
  }

  loadDataInicial(){
    this.sensorDataService.findAllData()
    .pipe(take(1))
    .subscribe(data => {
      data.forEach(e => {
        this.sensorData.set(e.id, e)
        this.updateDataLineal()
      })
    })
  }

  findLastData(){
    this.sensorDataService.findLastData()
    .pipe(take(1))
    .subscribe(data => {
      this.sensorData.set(data.id, data)
    })
  }

  findLastDataLoop(){
    const interval = 5000
    const idIntervalo = setInterval(() => {
      this.findLastData()
    }, interval);
  }

  updateDataLineal(){
    const temp: number[] = []
    this.sensorData.forEach(e => {
      temp.push(e.temperatura)
    })

    this.dataTemperatura = temp

    console.log("dataTemperatura", this.dataTemperatura)
  }
}
