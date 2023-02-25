import React, { useState } from "react";
import "../css/Input.css";

export const Input = ({ data }) => {
  const [input, setInput] = useState("");

  const SubmitHandler = (e) => {
    e.preventDefault();
    data(input);
    setInput("");
  };

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="search">
      <div className="logo">
        <h1>WeatherCast</h1>
      </div>
      <form onSubmit={SubmitHandler}>
        <input value={input} onChange={changeHandler} />
        <button type="submit">SEARCH</button>
      </form>
    </div>
  );
};
