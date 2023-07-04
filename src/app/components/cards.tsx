import dayjs from "dayjs";
import { CurrentType, DailyType } from "../types";

export const CurrentCard = ({ weather }: { weather: CurrentType }) => {
  return (
    <div className="p-5 bg-green-A100 text-green-500 rounded ">
      <h2 className="">Current weather</h2>
      <p>Temperature: {Math.round(weather.temp)}° celcius</p>
      <p>Clouds: {weather.clouds}</p>
      <p>Wind_speed: {weather.wind_speed}</p>
      <p>
        Description: {weather.weather[0].main}, {weather.weather[0].description}
      </p>
    </div>
  );
};
export const DayCard = ({ weather }: { weather: DailyType }) => {
  return (
    <div className="p-5 bg-green-500 text-white rounded">
      <h2 className="text-green-A100">
        {dayjs.unix(weather.dt).format("dddd DD MMMM YYYY")}
      </h2>
      <p>Temperature: {Math.round(weather.temp.day)}° celcius</p>
      <p>Clouds: {weather.clouds}</p>
      <p>
        Description: {weather.weather[0].main}, {weather.weather[0].description}
      </p>
    </div>
  );
};
