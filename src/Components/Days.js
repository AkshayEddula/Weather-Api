import React from "react";
import { DaysMain } from "./DaysMain";
import "../css/Days.css";

export const Days = ({ forecast }) => {
  return (
    <div className="Days">
      {forecast.map((day) => {
        return <DaysMain key={day.date_epoch} Day={day.day} date={day.date} />;
      })}
    </div>
  );
};
