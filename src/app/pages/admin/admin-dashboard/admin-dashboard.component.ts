import { Component, ViewChild, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexAnnotations,
  ApexFill,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: any; //ApexXAxis;
  annotations: ApexAnnotations;
  fill: ApexFill;
  stroke: ApexStroke;
  grid: ApexGrid;
};

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit{
  public usersChartOptions: any;
  public bikeOwnersChartOptions:any;
  public bikeOwnersCount:number = 0;
  public usersCount:number = 0;
  public usersCountArray:number[] = [];
  public usersDatesArray:string[] = [];
  public bikeOwnersCountArray:number[] = [];
  public bikeOwnersDatesArray:string[] = [];
  
  constructor(private adminService: AdminService) {
    this.getDashboardDetails();
  }


  getDashboardDetails(){
    this.adminService.getDashboard().subscribe((response:any)=>{
      this.bikeOwnersCount = response.bike_owners_count;
      this.usersCount = response.users_count;
      response.users_count_list.forEach((response:any)=>{
        const dates = Object.keys(response)[0];
        const counts = response[dates]
        this.usersCountArray.push(counts);
        this.usersDatesArray.push(dates);
        this.usersChartOptions = {
          series: [
            {
              name: "No. of users",
              data: this.usersCountArray
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
            categories:this.usersDatesArray,
            tickPlacement: "on"
          },
          yaxis: {
            title: {
              text: "No. of users"
            },
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
        // this.usersChartOptions.xaxis.categories = this.usersDatesArray;
        // this.usersChartOptions.series[0].data = this.usersCountArray;
      })
      console.log(response);
      response.bike_owners_count_list.forEach((response:any)=>{
        const dates = Object.keys(response)[0];
        const counts = response[dates]
        this.bikeOwnersCountArray.push(counts);
        this.bikeOwnersDatesArray.push(dates);
      })
      this.bikeOwnersChartOptions = {
        series: [
          {
            name: "No. of bike owners",
            data: this.bikeOwnersCountArray
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
          categories: this.bikeOwnersDatesArray,
          tickPlacement: "on"
        },
        yaxis: {
          title: {
            text: "No. of bike owners"
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
    })
  }

  ngOnInit(): void {

  }
}
