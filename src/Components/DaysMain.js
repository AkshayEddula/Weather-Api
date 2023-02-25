import React from "react";
import { BsFillCloudFill } from "react-icons/bs";
import "../css/DaysMain.css";

export const DaysMain = ({ Day, date }) => {
  const dates = new Date(date);
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeek = daysOfWeek[dates.getDay()];

  return (
    <div className="days_main">
      <div className="d1">
        <h1>{dayOfWeek}</h1>
        <img src={Day.condition.icon} alt={Day.condition.text} />
      </div>
      <div className="d2">
        <h4>
          {Day.maxtemp_c}&deg;C/{Day.mintemp_c}&deg;C
        </h4>
        <h4>{Day.condition.text}</h4>
      </div>
    </div>
  );
};
