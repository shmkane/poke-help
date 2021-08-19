import "./pokeStyles.css";

import PokeHeader from "./PokeHeader";
import PokeParty from "./PokeParty";
import PokeResults from "./PokeResults";
import PokeSearch from "./PokeSearch";

const PokemonMain = (): JSX.Element => {
  return (
    <>
    
      <PokeHeader />
      <PokeSearch />
      <PokeResults />
      <PokeParty />
    </>
  );
};

export default PokemonMain;
