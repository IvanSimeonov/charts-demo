import { DatePipe } from "@angular/common";
import { Component } from "@angular/core";
import * as DummyData from "./data";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {

  // Options for Vertical Bar Chart
  dataVBC = DummyData.totalNominalGDP;
  viewVBC: [number, number] = [800, 300];
  animationsVBC = false;
  legendVBC = true;
  xAxisVBC = true;
  yAxisVBC = true;
  showYAxisLabelVBC = true;
  yAxisLabelVBC = "Amount in Trillions ($)";

  dataLabelFormatterVBC(tooltipText: any) {
    return "$" + tooltipText + " trillion";
  }

  // Options for Pie Chart
  dataPC = DummyData.totalPopulation;
  viewPC: [number, number] = [700, 400];
  animationPC = true;
  colorSchemePC = "vivid";
  labelsPC = true;
  doughnut = true;

  percentageFormatterPC(data: any): string {
    return data.value + "%";
  }

  // Options for Line Chart
  dataLC = DummyData.annualWageSalary;
  viewLC: [number, number] = [700, 300];
  animationsLC = true;
  showGridLinesLC = true;
  legendLC = true;
  legendTitleLC = "Countries";
  roundDomainsLC = true;
  xAxisLC = true;
  yAxisLC = true;

  currencyFormatterLC(moneyAmount: any): string {
    const currencyFormat = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
    return currencyFormat.format(moneyAmount);
  }

  dateFormatterLC(date: string): string {
    const datePipe = new DatePipe("en-US");
    let formatted = datePipe.transform(date);
    return formatted ? formatted : date;
  }

  // Options for Number Cards
  dataNC = DummyData.highestAvgAnnualSalary;
  viewNC: [number, number] = [800, 150];
  animationsNC = true;
  colorSchemeNC = "fire";

  currencyFormatterNC(moneyAmount: any): string {
    const currencyFormat = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
    return currencyFormat.format(moneyAmount.value);
  }
}
