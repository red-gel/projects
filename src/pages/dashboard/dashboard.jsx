import axios from "axios";
import React, { useEffect, useState } from "react";
import { DashboardContext } from "../../state/dashboardContext";
import { Charts } from "../analytics/charts";
import { UsersListTable } from "./components/usersListTable";
import "./dash_style.scss";

export const Dashboard = () => {
  const [data, setData] = useState([]);
  const [year, setYear] = useState([]);
  const [population, setPopulation] = useState([]);
  const getUserDetails = () => {
    axios.get("https://reqres.in/api/users?page=2").then((response) => {
      setData(response.data.data);
    });
  };

  const getAnalyticsDetails = () => {
    axios
      .get(" https://datausa.io/api/data?drilldowns=Nation&measures=Population")
      .then((response) => {
        setYear(response.data.data);
      });
  };

  useEffect(() => {
    getUserDetails();
    getAnalyticsDetails();
  }, []);

  return (
    <DashboardContext.Provider
      value={{ data, setData, year, setYear, population, setPopulation }}
    >
      <div className="dashboard">
        <section className="tableSection">
          <div className="selfDetail">
            <h3 className="name">
              Augustin I
            </h3>
            <h5 className="position">
            VVTS - Assignment For the Position of Reactjs
            </h5>

          </div>
        <h3>Total User List</h3>

          <UsersListTable />
      <h3>Graphical representation of Population data & Year</h3>

          <Charts />
        </section>
      </div>
    </DashboardContext.Provider>
  );
};
