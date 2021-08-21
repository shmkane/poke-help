import {useState} from "react";
import "./pokeStyles.css";

import { PokeTypes } from "./pokeHelper";

import PokeHeader from "./PokeHeader";
import PokeParty from "./PokeParty";
import PokeResults from "./PokeResults";
import PokeSearch from "./PokeSearch";

const PokemonMain = (): JSX.Element => {
  const [userInput, setUserInput] = useState<PokeTypes>();

  return (
    <>
      <PokeHeader />
      <PokeSearch setUserInput={setUserInput} />
      <PokeResults userInput={userInput} />
      <PokeParty />
    </>
  );
};

export default PokemonMain;
