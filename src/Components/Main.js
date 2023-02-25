import React from "react";
import "../css/Main.css";
import { useContext1 } from "./context";

export const Main = () => {
  const { response: res, condition, loc } = useContext1();

  return (
    <div className="top">
      <div className="Main">
        <h1>{res?.temp_c}&deg;C</h1>
        <div className="condition">
          <h3>{condition?.text}</h3>
        </div>
        <h3>Feels Like : {res?.feelslike_c}&deg;C</h3>
        <h3>{loc?.name}</h3>
      </div>
      <div>
        <img
          style={{ transform: "scale(2)" }}
          src={condition?.icon}
          alt={condition?.text}
        />
      </div>
    </div>
  );
};
