import { DatePipe } from "@angular/common";
import { Component } from "@angular/core";
import { LegendPosition } from "@swimlane/ngx-charts";
import * as DummyData from "./data";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  // General Options All Charts
  view: [number, number] = [800, 300];
  animations = true;

  // Options for Vertical Bar Chart
  dataVBC = DummyData.totalNominalGDP;

  // Options for Pie Chart
  viewPC: [number, number] = [700, 400];
  animationPC = true;
  dataPC = DummyData.totalPopulation;
  colorSchemePC = "vivid";
  labelsPC = true;
  doughnut = true;

  // Options for Line Chart
  dataLC = DummyData.annualWageSalary;

  // Options for Number Cards
  viewNC: [number, number] = [800, 150];
  animationsNC = true;
  dataNC = DummyData.highestAvgAnnualSalary;
  colorSchemeNC = "fire";
  onSelectNC(event: any) {
    console.log("Number Cards Event: ", event);
  }

  percentageFormatter(value: any): string {
    console.log(value);
    return value.value + "%";
  }

  currencyFormatter(moneyAmount: any): string {
    console.log(moneyAmount);
    const currencyFormat = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
    return currencyFormat.format(moneyAmount.value);
  }

  currencyFormatterYAxis(moneyAmount: any): string {
    console.log(moneyAmount);
    const currencyFormat = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
    return currencyFormat.format(moneyAmount);
  }

  dateFormatterXAxis(date: string): string {
    console.log(date);
    const dateF = new Date(date);
    const datePipe = new DatePipe("en-US");
    let formated = datePipe.transform(dateF)?.toString();
    return formated ? formated : date;
  }

  dataFormatter(val: any) {
    return "$" + val + " trillion";
  }
}
