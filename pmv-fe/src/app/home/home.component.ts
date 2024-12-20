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
  sensorDataList: any[] = []
  dataTemperatura!: number[]
  dataPresion!: number[]
  dataVibracion!: number[]

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
      this.sensorDataList = data
      this.updateDataLineal()

      this.findLastDataLoop()
    })
  }

  findLastData(){
    this.sensorDataService.findLastData()
    .pipe(take(1))
    .subscribe(data => {
      this.sensorData.set(data.id, data)
      this.sensorDataList.push(data)
    })
  }

  findLastDataLoop(){
    const interval = 5000
    const idIntervalo = setInterval(() => {
      this.findLastData()
      this.updateDataLineal()
    }, interval);
  }

  updateDataLineal(){
    const aux: number[] = []
    const auxP: number[] = []
    const auxV: number[] = []
    let temp = this.sensorDataList
    if (temp.length > 10){
      for (let index = 0; index < 10; index++) {
        const element = temp[temp.length-10+index];
        aux.push(element.temperatura)
        auxP.push(element.presion)
        auxV.push(element.vibracion)
      }
    }
    this.dataTemperatura = aux
    this.dataPresion = auxP
    this.dataVibracion = auxV

    console.log("dataTemperatura", this.dataTemperatura)
  }
}
