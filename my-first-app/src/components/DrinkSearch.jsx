import { useState } from "react";
import { TextInput } from "./UI/TextInput";

export const DrinkSearch = () => {
  const [searchField, setSearchField] = useState("");
  return (
    <>
      <label>
        Search for drink:
        <TextInput />
      </label>
      <p>{searchField}</p>
    </>
  );
};
