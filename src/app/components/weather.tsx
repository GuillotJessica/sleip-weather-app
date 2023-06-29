import dayjs from "dayjs";
import { cache, use } from "react";
import { WeatherType } from "../types";

const fetchWeather = cache(async (query: string) => {
  const cities = await fetch(`api/cities?` + query);
  const citiesJson = await cities.json();
  if (citiesJson.cod) return { error: citiesJson.message };
  if (citiesJson.length === 0 || !citiesJson[0])
    return { error: "no matching city" };
  const { lat, lon } = citiesJson[0];
  const weather = await fetch(`api/weather?lat=${lat}&lon=${lon}`);
  const weatherJson = await weather.json();
  if (weatherJson.cod) return { error: weatherJson.message };
  const { name, state, country } = citiesJson[0];
  return {
    name,
    state,
    country,
    ...weatherJson,
  };
});

export default ({ city }: { city: string }) => {
  if (city === "") return null;
  const weather: WeatherType & { error: string } & {
    name: string;
    state: string;
    country: string;
  } = use(fetchWeather(city));
  if (!weather.current)
    return (
      <p className="text-red">
        {weather.error || "Something went wrong, try again later"}
      </p>
    );
  else
    return (
      <div>
        <h1>
          Weather for {weather.name} {weather.state} {weather.country}
        </h1>
        <div className="grid sm:grid-cols-3 gap-4 ">
          <div className="p-5 bg-green-500 text-white rounded">
            <h2 className="text-green-A100">Current weather</h2>
            <p>Temp: {weather.current.temp}</p>
            <p>Clouds: {weather.current.clouds}</p>
            <p>Wind_speed: {weather.current.wind_speed}</p>
            <p>
              Description: {weather.current.weather[0].main},{" "}
              {weather.current.weather[0].description}
            </p>
          </div>
          {weather.daily.map((day) => (
            <div className="p-5 bg-green-500 text-white rounded">
              <h2 className="text-green-A100">
                {dayjs.unix(day.dt).format("dddd DD MMMM YYYY")}
              </h2>
              <p>Temperature: {day.temp.day}</p>
              <p>Clouds: {day.clouds}</p>
              <p>
                Description: {day.weather[0].main}, {day.weather[0].description}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
};
