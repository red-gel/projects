import React, { useContext } from "react";
import Chart from "react-google-charts";
import { DashboardContext } from "../../state/dashboardContext";
import { UsersListTable } from "../dashboard/components/usersListTable";
import "./charts_style.scss";

export const Charts = () => {
  const { population, setPopulation } = useContext(DashboardContext);
  const { year, setYear } = useContext(DashboardContext);
  const dYear = year.map((value, index) => {
    return value.Year.toString();
  });

  const dpop = year.map((value, index) => {
    return value.Population;
  });
  const data = [
    ["Year", "Sales", ""],
    [dYear[0], dpop[0], 0],
    [dYear[1], dpop[1], 1],
    [dYear[2], dpop[2], 2],
    [dYear[3], dpop[3], 4],
    [dYear[4], dpop[4], 2],
    [dYear[5], dpop[5], 1],
    [dYear[6], dpop[6], 7],
  ];
  return (
    <div className="fourcharts">
      <div className="bgCard">
      <h4>This is Scatter Graph</h4>
      <Chart
        chartType="Scatter"
        width="400px"
        height="200px"
        data={data}
        options={{
          chart: {
            title: "This is Scatter Graph",
          },
          series: {
            0: { axis: "Populstion" },
            1: { axis: "Year" },
          },
          axes: {
            y: {
              Population: { label: "Population" },
              Year: { label: "Year label" },
            },
          },
        }}
      />
      </div>
      <div className="bgCard">
      <h4>This is AreaChart</h4>
      <Chart
        chartType="AreaChart"
        width="400px"
        height="200px"
        data={data}
        options={{
          title: "This is AreaChart",
          hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
          vAxis: { minValue: 0 },
          chartArea: { width: "50%", height: "70%" },
        }}
      />
      </div>
      <div className="bgCard">
      <h4>This is BubbleChart</h4>
      <Chart
        chartType="BubbleChart"
        width="400px"
        height="200px"
        data={data}
        options={{
          title: "Example of bubble chart",
          hAxis: { title: "Life Expectancy" },
          vAxis: { title: "Fertility Rate" },
          bubble: { textStyle: { fontSize: 11 } },
        }}
      />
      </div>
      <div className="bgCard">
      <h4>This is Pie Chart</h4>
      <Chart
        chartType="PieChart"
        data={data}
        options={{ title: "My Daily Activities" }}
        width="400px"
        height="200px"
      />
      </div>
    </div>
  );
};
