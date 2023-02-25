import React, { useState, useEffect } from "react";
import WeatherData from "./api";
import { Input } from "./Components/Input";
import { Main } from "./Components/Main";
import "./app.css";
import { Days } from "./Components/Days";
import { Details } from "./Components/Details";

export const App = () => {
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
    <div>
      <div className="top-container">
        <Input data={data} />
        <Main loc={loc} condition={condition} res={Res} />
      </div>
      <Details res={Res} />
      <Days forecast={forecast} />
    </div>
  );
};
