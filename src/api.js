import axios from "axios";

const WeatherData = async (loc) => {
  const response = await axios.get(
    "http://api.weatherapi.com/v1/forecast.json",
    {
      params: {
        key: "339ea195ac3342ae9e8142028231403",
        q: loc,
        days: "6",
      },
    }
  );

  return response;
};

export default WeatherData;
