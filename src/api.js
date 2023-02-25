import axios from "axios";

const WeatherData = async (loc) => {
  const response = await axios.get(
    "http://api.weatherapi.com/v1/forecast.json",
    {
      params: {
        key: "63a595b72cf448c6b12102126232202",
        q: loc,
        days: "6",
      },
    }
  );

  return response;
};

export default WeatherData;
