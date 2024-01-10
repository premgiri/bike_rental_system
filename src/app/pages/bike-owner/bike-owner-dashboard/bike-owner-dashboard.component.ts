import { Component, OnInit, ViewChild } from '@angular/core';
import { BikeOwnerService } from '../services/bike-owner.service';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
};

@Component({
  selector: 'app-bike-owner-dashboard',
  templateUrl: './bike-owner-dashboard.component.html',
  styleUrls: ['./bike-owner-dashboard.component.scss']
})
export class BikeOwnerDashboardComponent implements OnInit{
  @ViewChild("chart") chart: ChartComponent | any;
  public chartOptions: any;
  private countDates: string[] = [];
  private completedRidesCount:number[] = [];
  private requestedRidesCount:number[] = [];
  public totalBikesAdded:number = 0;
  public ridesAmount:number = 0;
  public pendingRides:number = 0;
  public completedRides:number = 0;
  constructor(private bikeOwnerService:BikeOwnerService) {
    this.getDashboardDetails();
  }
  ngOnInit(): void {
  }

  getDashboardDetails(){
    this.bikeOwnerService.getDashboard().subscribe((response:any)=>{
      console.log(response);
      this.totalBikesAdded = response.bikes_count;
      this.completedRides = response.total_completed_ride_count;
      this.pendingRides = response.current_bookings_count;
      this.ridesAmount = response.total_earned_income;

      this.countDates = response.ride_counts_list.map((date:any)=>{
        return date.date;
      });
      this.completedRidesCount = response.ride_counts_list.map((count:any)=>{
        return count.completed_ride_count;
      });
      this.requestedRidesCount = response.ride_counts_list.map((count:any)=>{
        return count.requested_ride_count;
      })
      console.log(this.countDates);
      this.chartOptions = {
        series: [
          {
            name: "Completed rides",
            data: this.completedRidesCount
          },
          {
            name: "Requested rides",
            data: this.requestedRidesCount
          }
        ],
        chart: {
          type: "bar",
          height: 350
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "55%",
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"]
        },
        xaxis: {
          categories: this.countDates
        },
        yaxis: {
          title: {
            text: "Number of bikes"
          }
        },
        fill: {
          opacity: 1
        },
        // tooltip: {
        //   y: {
        //     formatter: function(val:any) {
        //       return "$ " + val + " thousands";
        //     }
        //   }
        // }
      };
    })
  }
}
