import {useState} from "react";
import "./pokeStyles.css";

import PokeHeader from "./PokeHeader";
import PokeParty from "./PokeParty";
import PokeResults from "./PokeResults";
import PokeSearch from "./PokeSearch";


const PokemonMain = (): JSX.Element => {
  const [userInput, setUserInput] = useState<string>("");

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
