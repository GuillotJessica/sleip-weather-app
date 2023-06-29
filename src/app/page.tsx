"use client";

import { Suspense, useEffect, useId, useState } from "react";
import Loading from "./loading";
import Weather from "./components/weather";

export default function Page() {
  const cityInputId = useId();
  const [cityInput, setCityInput] = useState<string>("");
  const [debouncedInputValue, setDebouncedInputValue] = useState<string>("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedInputValue(cityInput);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [cityInput]);

  return (
    <main>
      <div className="m-6 space-y-5">
        <div className="flex justify-between space-x-5 	">
          <label htmlFor={cityInputId}>Type a city :</label>
          <input
            className="rounded grow"
            id={cityInputId}
            name="cityInput"
            type="text"
            onChange={(e) => setCityInput(e.target.value)}
          />
        </div>
        <Suspense fallback={<Loading />}>
          <Weather city={debouncedInputValue} />
        </Suspense>
      </div>
    </main>
  );
}
