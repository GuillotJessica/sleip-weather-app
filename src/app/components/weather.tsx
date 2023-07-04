import { cache, use } from "react";
import { DailyType, WeatherType } from "../types";
import { DayCard, CurrentCard } from "../components/cards";
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
  else {
    const { name, state, country } = weather;
    return (
      <div>
        <h1>
          Weather for
          {[name, state, country].map((v, i) =>
            v ? (i === 0 ? " " : ", ") + v : ""
          )}
        </h1>
        <div className="grid sm:grid-cols-3 gap-4 ">
          <CurrentCard weather={weather.current} />
          {weather.daily.map((day: DailyType) => (
            <DayCard key={day.dt} weather={day} />
          ))}
        </div>
      </div>
    );
  }
};
