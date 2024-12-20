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
      this.data = changes["data"].currentValue
      this.lineChartData.datasets[0].data = this.data
      this.lineChartData.labels = this.data.map(e => '')
    }
  }

  ngOnInit(): void {
    this.lineChartData = {
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
