import { Avatar, Card } from "antd";

//Icon Imports
import showers from "../../../WeatherIcons/Showers.png";
import cloudy from "../../../WeatherIcons/Cloudy.png";
import mostlyCloudy from "../../../WeatherIcons/MostlyCloudy.png";
import mostlySunny from "../../../WeatherIcons/MostlySunny.png";
import partlyCloudy from "../../../WeatherIcons/PartlyCloudy.png";
import scatteredShowers from "../../../WeatherIcons/ScatteredShowers.png";
import sunny from "../../../WeatherIcons/Sunny.png";
import thunderstorms from "../../../WeatherIcons/Thunderstorms.png";
import clear from "../../../WeatherIcons/Clear.png";
import windy from "../../../WeatherIcons/Windy.png";
import snow from "../../../WeatherIcons/Snow.png";
import sleet from "../../../WeatherIcons/Sleet.png";

import WeatherIconSelectFunction from "./WeatherIconSelectFunction";

import Header from "../../../components/Header";
import LoadingTile from "../DashBoardPageComponents/LoadingTile";
import { useState } from "react";
import SubHeader from "../../../components/SubHeader";
import DemoInfoAlert from "../../../components/DemoInfoAlert";

const { Meta } = Card;

const iconFilter = WeatherIconSelectFunction.iconFilter;

const TodaysWeather = ({ yahooWeather, iconFilter }) => {
  const weather = yahooWeather.current_observation;

  let icon = false;
  if (weather.condition.text === "Cloudy") {
    icon = cloudy;
  } else if (weather.condition.text === "Mostly Cloudy") {
    icon = mostlyCloudy;
  } else if (weather.condition.text === "Mostly Sunny") {
    icon = mostlySunny;
  } else if (weather.condition.text === "Partly Cloudy") {
    icon = partlyCloudy;
  } else if (weather.condition.text === "Scattered Showers") {
    icon = scatteredShowers;
  } else if (
    weather.condition.text === "Showers" ||
    weather.condition.text === "Drizzle" ||
    weather.condition.text === "Rain"
  ) {
    icon = showers;
  } else if (weather.condition.text === "Sunny") {
    icon = sunny;
  } else if (weather.condition.text === "Thunderstorms") {
    icon = thunderstorms;
  } else if (weather.condition.text === "Windy") {
    icon = windy;
  } else if (weather.condition.text === "Snow") {
    icon = snow;
  } else if (weather.condition.text === "Sleet") {
    icon = sleet;
  } else if (
    weather.condition.text === "Clear" ||
    weather.condition.text === "Mostly Clear" ||
    weather.condition.text === "Fair"
  ) {
    icon = clear;
  } else icon = null;

  if (!yahooWeather) return <LoadingTile />;
  return (
    <Card loading={false} className="todayCard" bordered={false}>
      <Header headerText="Today's Weather" />
      <h5>Current Weather:</h5>
      <Meta
        avatar={<Avatar src={icon} />}
        className="bigCardMeta"
        title={
          "Weather for  " +
          yahooWeather.location.city +
          " (" +
          yahooWeather.forecasts[0].day +
          ")"
        }
        description={
          weather.condition.text +
          " | " +
          "Temp: " +
          weather.condition.temperature +
          " °F"
        }
      />
      <div className="detailsContainer">
        <p className="weatherDetails">
          Forecast: {yahooWeather.forecasts[0].text}, Hi:{" "}
          {yahooWeather.forecasts[0].high} - Lo: {yahooWeather.forecasts[0].low}
        </p>
        <p className="weatherDetails">
          Sunrise: {weather.astronomy.sunrise} - Sunset:{" "}
          {weather.astronomy.sunset}{" "}
        </p>
        <p className="weatherDetails">
          Humdity: {weather.atmosphere.humidity} - Windchill:{" "}
          {weather.wind.chill}
        </p>
      </div>
      <DemoInfoAlert message="All weather data is request from a Yahoo Weather API." />
    </Card>
  );
};

export default TodaysWeather;
