import { Card, Col, Row, Avatar } from "antd";
import { useState } from "react";
import Header from "../../../components/Header";
import ForecastCard from "./ForecastCard";
import WeatherModule from "./WeatherModule";

const ForecastCards = ({ yahooWeather }) => {
  return (
    <div className="forecastCardsContainer Container ">
      <Header headerText="Weekly Forecast" />
      <Row className="forecastCardsCol">
        {yahooWeather.forecasts.map((forecast, key) => {
          return <ForecastCard forecast={forecast} index={key} />;
        })}
      </Row>
    </div>
  );
};

export default ForecastCards;
