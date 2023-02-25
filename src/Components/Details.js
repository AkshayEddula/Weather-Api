import React from "react";
import { CiTempHigh } from "react-icons/ci";
import { FiWind } from "react-icons/fi";
import { WiHumidity } from "react-icons/wi";
import { BsSun } from "react-icons/bs";
import { MdCompress } from "react-icons/md";
import "../css/Details.css";

export const Details = ({ res }) => {
  return (
    <div className="details">
      <header>
        <h1>Weather details</h1>
      </header>
      <div className="weather">
        <div className="d">
          <CiTempHigh style={{ transform: "scale(2)" }} />
          <h3>Feels like</h3>
          <h1>{res.feelslike_c}&deg;C</h1>
        </div>
        <div className="d">
          <FiWind style={{ transform: "scale(2)" }} />
          <h3>WNM wind</h3>
          <h1>{res.wind_kph}Km/h</h1>
        </div>
        <div className="d">
          <WiHumidity style={{ transform: "scale(2)" }} />
          <h3>Humidity</h3>
          <h1>{res.humidity}%</h1>
        </div>
        <div className="d">
          <BsSun style={{ transform: "scale(2)" }} />
          <h3>UV</h3>
          <h1>{res.uv}Weak</h1>
        </div>
        <div className="d">
          <MdCompress style={{ transform: "scale(2)" }} />
          <h3>Air pressure</h3>
          <h1>{res.pressure_mb}hPa</h1>
        </div>
      </div>
    </div>
  );
};
