/* eslint-disable no-unused-vars */
import React, { useState, useEffect, createContext } from "react";
import { Input } from "./Components/Input";
import { Main } from "./Components/Main";
import "./app.css";
import { Days } from "./Components/Days";
import { Details } from "./Components/Details";
import { ContextProvider } from "./Components/context.js";

export const App = () => {
  return (
    <ContextProvider>
      <div className="top-container">
        <Input />
        <Main />
      </div>
      <Details />
      <Days />
    </ContextProvider>
  );
};
