/* eslint-disable no-unreachable */
import React, { useContext, useEffect, useState } from "react";
import WeatherData from "../api";

const context1 = React.createContext();
const context2 = React.createContext();

export function useContext1() {
  return useContext(context1);
}

export function useContext2() {
  return useContext(context2);
}

export function ContextProvider({ children }) {
  const [Res, setResponse] = useState({});
  const [condition, setCondition] = useState({});
  const [loc, setLoc] = useState({});
  const [forecast, setForecast] = useState([]);

  const Default_Loc = "London";

  useEffect(() => {
    WeatherData(Default_Loc).then((res) => {
      setResponse(res.data.current);
      setCondition(res.data.current.condition);
      setLoc(res.data.location);
      setForecast(res.data.forecast.forecastday);
    });
  }, []);

  const data = async (loc) => {
    const res = await WeatherData(loc);
    setResponse(res.data.current);
    setCondition(res.data.current.condition);
    setLoc(res.data.location);
    setForecast(res.data.forecast.forecastday);
    console.log(res);
  };

  return (
    <context1.Provider value={{ response: Res, loc, condition, forecast }}>
      <context2.Provider value={data}>{children}</context2.Provider>
    </context1.Provider>
  );
}
