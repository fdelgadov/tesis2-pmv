import { Component, Input } from '@angular/core';
import { ChartData, ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-temperatura-grafico',
  templateUrl: './temperatura-grafico.component.html',
  styleUrls: ['./temperatura-grafico.component.css']
})
export class TemperaturaGraficoComponent {
  @Input() data!: number[]

  lineChartData: ChartData<'line'> = {
    labels: ['January', 'February', 'March', 'April', 'May'], // Etiquetas para el eje X
    datasets: [
      {
        data: this.data, // Datos para la línea
        label: 'Dataset 1',
        borderColor: '#42A5F5', // Color de la línea
        backgroundColor: 'rgba(66, 165, 245, 0.2)', // Color de fondo debajo de la línea
        fill: true, // Llenar el área debajo de la línea
        tension: 0.4 // Curvatura de la línea
      }
    ]
  };

  // Opciones para el gráfico
  public lineChartOptions: ChartOptions = {
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
          text: 'Meses'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Valor'
        },
        beginAtZero: true
      }
    }
  };

  // Tipo de gráfico (línea)
  public lineChartType: ChartType = 'line';
}
