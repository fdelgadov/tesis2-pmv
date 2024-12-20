import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ChartData, ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-temperatura-grafico',
  templateUrl: './temperatura-grafico.component.html',
  styleUrls: ['./temperatura-grafico.component.css']
})
export class TemperaturaGraficoComponent implements OnChanges, OnInit {
  @Input() data!: number[]
  @Input() titulo!: string
  @Input() unidad!: string

  lineChartData!: ChartData<'line'>;

  // Opciones para el gráfico
  public lineChartOptions!: ChartOptions

  // Tipo de gráfico (línea)
  public lineChartType: ChartType = 'line';

  ngOnChanges(changes: SimpleChanges): void {
    if(changes["data"]){
      console.log("ngOnChanges()")
      this.data = changes["data"].currentValue
      this.loadChart()
    }
  }

  ngOnInit(): void {
    this.lineChartData = {
      labels: [],
      datasets: [
        {
          data: this.data, // Datos para la línea
          label: this.titulo,
          borderColor: '#42A5F5', // Color de la línea
          backgroundColor: 'rgba(66, 165, 245, 0.2)', // Color de fondo debajo de la línea
          fill: true, // Llenar el área debajo de la línea
          tension: 0.4 // Curvatura de la línea
        }
      ]
    }
    this.loadChart()
  }

  loadChart(){
    let labels = this.data.map(e => '')
    this.lineChartData.labels = labels
    this.lineChartData.datasets[0].data = this.data
    this.lineChartOptions = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: ''
          }
        },
        y: {
          title: {
            display: true,
            text: this.unidad
          },
          beginAtZero: true
        }
      }
    }
  }
}
