"use client";

import { Suspense, useEffect, useId, useState } from "react";
import Loading from "./loading";
import Weather from "./components/weather";
import InputCity from "./components/inputCity";
import useDebounce from "./hooks/useDebounce";

export default function Page() {
  const cityInputId = useId();
  const [cityInput, setCityInput] = useState<string>("");
  const debouncedInputValue = useDebounce(cityInput);

  return (
    <main>
      <div className="m-6 space-y-5">
        <InputCity setCityInput={setCityInput} cityInputId={cityInputId} />
        <Suspense fallback={<Loading />}>
          <Weather city={debouncedInputValue} />
        </Suspense>
      </div>
    </main>
  );
}
