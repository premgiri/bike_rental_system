import { Component } from '@angular/core';

@Component({
  selector: 'app-bike-owner-dashboard',
  templateUrl: './bike-owner-dashboard.component.html',
  styleUrls: ['./bike-owner-dashboard.component.scss']
})
export class BikeOwnerDashboardComponent {
  public chartOptions: any;
  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "No. of bikes",
          data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65, 35, 40, 20]
        }
      ],
      annotations: {
        points: [
          {
            x: "Bananas",
            seriesIndex: 0,
            label: {
              borderColor: "#775DD0",
              offsetY: 0,
              style: {
                color: "#fff",
                background: "#775DD0"
              },
              // text: "Bananas are good"
            }
          }
        ]
      },
      chart: {
        height: 350,
        type: "bar"
      },
      plotOptions: {
        bar: {
          columnWidth: "50%",
          endingShape: "rounded"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 2
      },

      grid: {
        row: {
          colors: ["#fff", "#f2f2f2"]
        }
      },
      xaxis: {
        labels: {
          rotate: -45
        },
        categories: [
          "20-10-2023",
          "20-10-2023",
          "20-10-2023",
          "20-10-2023",
          "20-10-2023",
          "20-10-2023",
          "20-10-2023",
          "20-10-2023",
          "20-10-2023",
          "20-10-2023",
          "20-10-2023",
          "20-10-2023",
          "20-10-2023",
          "20-10-2023",
          "20-10-2023",
          "20-10-2023",
        ],
        tickPlacement: "on"
      },
      yaxis: {
        title: {
          text: "No. of bikes"
        }
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "horizontal",
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 0.85,
          opacityTo: 0.85,
          stops: [50, 0, 100]
        }
      }
    };
  }
}
