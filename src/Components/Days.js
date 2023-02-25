import React from "react";
import { DaysMain } from "./DaysMain";
import "../css/Days.css";
import { useContext1 } from "./context";

export const Days = () => {
  const context = useContext1();

  return (
    <div className="Days">
      {context.forecast.map((day) => {
        return <DaysMain key={day.date_epoch} Day={day.day} date={day.date} />;
      })}
    </div>
  );
};
