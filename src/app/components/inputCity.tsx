import { Dispatch, SetStateAction } from "react";

const InputCity = ({
  setCityInput,
  cityInputId,
}: {
  setCityInput: Dispatch<SetStateAction<string>>;
  cityInputId: string;
}) => (
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
);
export default InputCity;
