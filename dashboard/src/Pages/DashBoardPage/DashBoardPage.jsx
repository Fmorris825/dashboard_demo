import { useEffect, useState } from "react";
import WeatherModule from "./WeatherComponents/WeatherModule";
import "./DashBoardPage.css";
import ProgressModule from "./ProgressComponents/ProgressModule";
import LoadingTile from "./DashBoardPageComponents/LoadingTile";
import NewsModule from "./NewsComponents/NewsModule";
import GreetingHeader from "../../components/GreetingHeader";
import { Row, Col } from "antd";
import TodaysWeather from "./WeatherComponents/TodaysWeather";
import ForecastCards from "./WeatherComponents/ForecastCards";

const DashBoardPage = ({
  tasks,
  toDoList,
  completedList,
  yahooWeather,
  news,
  user,
}) => {
  const completedPercentage = (completedList.length / tasks.length) * 100;
  const roundCompleted = completedPercentage.toFixed(0);
  const completedListLength = completedList.length;
  const toDoListLength = toDoList.length;
  const tasksListLength = tasks.length;

  if (!yahooWeather) {
    return (
      <div className="loadingContainer">
        <LoadingTile />
      </div>
    );
  }
  return (
    <div className="page">
      <GreetingHeader user={user} />
      <div className="moduleRow">
        {/* <WeatherModule yahooWeather={yahooWeather} /> */}
        <Col className="dashboardSpacing">
          <div className="space-evenly">
            <TodaysWeather yahooWeather={yahooWeather} />
            <ProgressModule
              list={roundCompleted}
              completedList={completedList}
              completedListLength={completedListLength}
              toDoListLength={toDoListLength}
              tasksLength={tasksListLength}
            />
          </div>
          {/* <Row className="center">
            <NewsModule news={news} />
          </Row> */}
        </Col>

        <ForecastCards yahooWeather={yahooWeather} />
      </div>
    </div>
  );
};

export default DashBoardPage;
