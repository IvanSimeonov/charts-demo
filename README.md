# Data visualization in Angular using ngx-charts

## Table of content

- [Introduction](#introduction)
- [Supported chart types](#supported-chart-types)
- [Installation](#installation)
- [Usage](#usage)
  - [Vertical Bar Chart example](#vertical-bar-chart-example)
  - [Pie Chart example](#pie-chart-example)
  - [Line Chart example](#line-chart-example)
  - [Number Cards example](#number-cards-example)
- [Charts Preview](#charts-preview)
- [Best practices](#best-practices)
- [Summary](#summary)
- [Contact Me](#contact-me)

## Introduction

When it comes to building web applications, data visualization plays a crucial role in helping users make sense of complex data sets. This is where [ngx-charts](https://swimlane.gitbook.io/ngx-charts) comes in handy. Ngx-charts is a popular charting library for Angular projects that provides a wide range of customizable and interactive charts. With ngx-charts, you can easily add stunning charts to your Angular applications, whether you're building a dashboard, a reporting tool, or any other data visualization solution. This article will explore how to get started with ngx-charts, the different types of charts it offers, and how to customize them to suit your project's needs. Whether you're a seasoned Angular developer or just getting started, this article will help you add powerful data visualization to your projects using ngx-charts.

## Supported chart types

Ngx-Charts is a charting library for Angular that provides a wide variety of customizable and interactive chart types. The supported chart types in ngx-charts include line, area, bar, horizontal bar, pie, doughnut, gauge, heat map, force-directed graph, bubble chart and other variations.

- The line and area charts are useful for showing trends over time or comparing values between two or more categories.
- The bar and horizontal bar charts are suitable for comparing values across different categories or showing data in a ranking format.
- The pie and doughnut charts are useful for showing data as parts of a whole and can help to quickly visualize data in a simple and concise way.
- The gauge chart is great for displaying progress towards a specific goal or target.
- The heat map chart can be used to show data distribution and patterns in a two-dimensional format, while the force-directed graph is ideal for visualizing complex relationships and network structures.
- The bubble chart is suitable for showing relationships between three or more data dimensions.

Overall, choosing the appropriate chart type in ngx-charts depends on the type of data you have and the insights you want to convey. With a good understanding of the supported chart types and their strengths, ngx-charts can help you create powerful and visually appealing data visualizations in your Angular project.

## Installation

In order to use ngx-charts, first we have to install the npm module. Open a terminal in the root folder of your project and run the following command:

```
npm i @swimlane/ngx-charts
```

Then we must also install the following peer-dependency:

```
npm install @types/d3 --save-dev
```

Now that we have the npm module installed in our project, we may utilize ngx-charts. In order to do so, open the `AppModule(app.module.ts)` and include the `NgxChartsModule` in the imports arrays:

```
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

```

- Keep in mind to add `BrowserAnimationsModule` since charts are having animations as well.

## Usage

I will show you some basic examples of the charts I commonly use. Many chart options are customizable, but we will focus only on a few. If you want to see what customizable properties are there for the different charts, you can see them described [here](https://swimlane.gitbook.io/ngx-charts/examples). These charts are widely used in various industries, including business, finance, and science, and they can help you to effectively communicate complex data and insights.

I will give a brief description of a couple of the different properties:

- **view** - the dimensions of the chart [width, height]. If left undefined, the chart will fit the parent container size
- **results** - the chart data
  scheme - the color scheme of the chart (custom scheme available as well)
- **xAxis** - show or hide the x axis
- **yAxis** - show or hide the y axis
- **showGridLines** - show or hide the grid lines (xAxis or yAxis must be shown in order to work)
- **Formatters** - format the text. Examples can be seen in the code snippets below.
  - dataLabelFormatting
  - tooltipText
  - yAxisTickFormatting
  - xAxisTickFormatting
  - valueFormatting
  - etc.

* **[Charts Properties Docs](https://swimlane.gitbook.io/ngx-charts/examples)**

<hr />

### Vertical Bar Chart example

#### Code Snippets:

`app.component.html`

```
    <ngx-charts-bar-vertical
      [results]="dataVBC"
      [view]="viewVBC"
      [animations]="animationsVBC"
      [legend]="legendVBC"
      [xAxis]="xAxisVBC"
      [yAxis]="yAxisLabelVBC"
      [showYAxisLabel]="showYAxisLabelVBC"
      [yAxisLabel]="yAxisLabelVBC"
      [dataLabelFormatting]="dataLabelFormatterVBC"
    ></ngx-charts-bar-vertical>
```

`app.component.ts`

```
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
```

#### Result:

[![VerticalBarChart.gif](https://s9.gifyu.com/images/VerticalBarChart.gif)](https://gifyu.com/image/SqUyD)

<hr />
### Pie Chart example

#### Code Snippets:

`app.component.html`

```
    <ngx-charts-pie-chart
      [results]="dataPC"
      [view]="viewPC"
      [animations]="animationPC"
      [scheme]="colorSchemePC"
      [labels]="labelsPC"
      [doughnut]="doughnut"
      [tooltipText]="percentageFormatterPC"
    ></ngx-charts-pie-chart>
```

`app.component.ts`

```
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
```

#### Result:

[![DoughnutPieChart.gif](https://s3.gifyu.com/images/DoughnatPieChart.gif)](https://gifyu.com/image/SqUyy)

<hr />

### Line Chart example

#### Code Snippets:

`app.component.html`

```
    <ngx-charts-line-chart
      [results]="dataLC"
      [view]="viewLC"
      [animations]="animationsLC"
      [showGridLines]="showGridLinesLC"
      [legend]="legendLC"
      [legendTitle]="legendTitleLC"
      [roundDomains]="roundDomainsLC"
      [xAxis]="true"
      [yAxis]="true"
      [yAxisTickFormatting]="currencyFormatterLC"
      [xAxisTickFormatting]="dateFormatterLC"
    ></ngx-charts-line-chart>
```

`app.component.ts`

```
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
```

#### Result:

[![LineChart.gif](https://s3.gifyu.com/images/LineChart.gif)](https://gifyu.com/image/SqUyB)

<hr />

### Number Cards example

#### Code Snippets:

`app.component.html`

```
    <ngx-charts-number-card
      [view]="viewNC"
      [animations]="animationsNC"
      [results]="dataNC"
      [scheme]="colorSchemeNC"
      [valueFormatting]="currencyFormatterNC"
    ></ngx-charts-number-card>
```

`app.component.ts`

```
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
```

#### Result:

[![NumberCards.gif](https://s9.gifyu.com/images/NumberCards.gif)](https://gifyu.com/image/SqUyG)

<hr />

Data sets used for the charts can be found in `data.ts`:

```
export const totalNominalGDP = [
  {
    name: "USA",
    value: 23.17,
  },
  {
    name: "China",
    value: 16.28,
  },
  {
    name: "Japan",
    value: 5.15,
  },
  {
    name: "Germany",
    value: 4.25,
  },
  {
    name: "United Kingdom",
    value: 3.09,
  },
];

export const totalPopulation = [
  {
    name: "Rest",
    value: 53.24,
  },
  {
    name: "China",
    value: 18.47,
  },
  {
    name: "India",
    value: 17.7,
  },
  {
    name: "USA",
    value: 4.25,
  },
  {
    name: "Indonesia",
    value: 3.51,
  },
  {
    name: "Pakistan",
    value: 2.83,
  },
];

export const annualWageSalary = [
  {
    name: "USA",
    series: [
      {
        value: 39238,
        name: "2000-09-24T00:33:38.246Z",
      },
      {
        value: 45647,
        name: "2005-09-24T00:33:38.246Z",
      },
      {
        value: 53235,
        name: "2010-09-24T00:33:38.246Z",
      },
      {
        value: 59993,
        name: "2015-09-24T00:33:38.246Z",
      },
      {
        value: 71655,
        name: "2020-09-24T00:33:38.246Z",
      },
    ],
  },
  {
    name: "Bulgaria",
    series: [
      {
        value: 1910,
        name: "2000-09-24T00:33:38.246Z",
      },
      {
        value: 3030,
        name: "2005-09-24T00:33:38.246Z",
      },
      {
        value: 6180,
        name: "2010-09-24T00:33:38.246Z",
      },
      {
        value: 7110,
        name: "2015-09-24T00:33:38.246Z",
      },
      {
        value: 9320,
        name: "2020-09-24T00:33:38.246Z",
      },
    ],
  },
];

export const highestAvgAnnualSalary = [
  {
    name: "Luxembourg",
    value: 128169,
  },
  {
    name: "Switzerland",
    value: 94794,
  },
  {
    name: "Ireland",
    value: 87688,
  },
  {
    name: "Norway",
    value: 85358,
  },
  {
    name: "United States",
    value: 68309,
  },
];


```

<hr/>

## Charts Preview

Developers can use the following URL - [Ngx-Charts Showcase](https://swimlane.github.io/ngx-charts/#/ngx-charts/bar-vertical), to explore the different chart types and their customization options in ngx-charts. This URL leads to the ngx-charts demo page, which provides a variety of sample charts that you can interact with and customize.

Using the preview page, developers can experiment with different chart types, such as line, area, bar, pie, and gauge, and customize their appearance by changing colors, labels, and legends. The page also provides options to enable animations, tooltips, and legends, giving developers a better understanding of the different features available in ngx-charts.

Overall, the demo page is a great resource for developers who want to get a better understanding of the capabilities of ngx-charts and experiment with different chart types and customization options.

## Best practices

When using ngx-charts in your Angular project, there are several best practices that you should follow to ensure that you are getting the most out of the library. Here are a few tips to keep in mind:

- Keep your data clean and consistent: Ensure that your data is clean and consistent before passing it to ngx-charts. This will ensure that your charts are accurate and easy to understand.
- Use appropriate chart types: Choose the appropriate chart type based on the data you want to visualize. Select the chart type that best presents your data and insights.
- Customize the appearance: Customize the appearance of your charts to make them visually appealing and on-brand. Use colors, fonts, and layouts that are consistent with the rest of your application.
- Optimize performance: Ensure that your charts are optimized for performance. Use lazy loading or pagination if you are displaying a large amount of data to prevent any performance issues.
- Test thoroughly: Test your charts thoroughly across different devices and screen sizes to ensure that they are displayed correctly and are easily readable.

By following these best practices, you can create effective and visually appealing data visualizations using ngx-charts in your Angular project.

## Summary

In conclusion, [ngx-charts](https://swimlane.gitbook.io/ngx-charts) is a powerful and flexible charting library that can help you add sophisticated data visualization to your Angular projects. With a wide range of chart types, easy customization options, and excellent documentation, ngx-charts makes it easy to build stunning charts that bring your data to life. Whether you're building a data-rich dashboard or a custom reporting tool, ngx-charts can help you create a seamless and intuitive user experience. By following the tips and techniques discussed in this article, you can leverage ngx-charts to enhance the data visualization capabilities of your Angular applications and deliver better insights to your users.

- The source code of this article can be found in my [Github repository](https://github.com/IvanSimeonov/charts-demo).

## Contact Me

- :computer: [GitHub](https://github.com/IvanSimeonov)
- :iphone: [LinkedIn](https://www.linkedin.com/in/ivannicksimeonov/)
- :coffee: [Buy Me A Coffee](https://www.buymeacoffee.com/ivssim)
