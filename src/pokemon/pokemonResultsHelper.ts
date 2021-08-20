import { PokeTypes, PokeResponse, DefaultPokeResponse } from "./pokeHelper";
import { pokedex } from "./database";

export const getPokemonTypeWeaknesses = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  P: { getTypeByName: any },
  pokemonStr: string,
  setPokeResults: React.Dispatch<React.SetStateAction<string[]>>
): string[] => {
  const types = pokedex.find((p) => pokemonStr === p.name)?.types;

  let results: string[] = [];

  types?.forEach((type: PokeTypes) => {
    if (type) {
      P.getTypeByName(type.toLowerCase())
        .then((response: PokeResponse) => {
          const { double_damage_from } = response.damage_relations;
          results = results.concat(
            double_damage_from.map(
              (type: DefaultPokeResponse) =>
                type.name.charAt(0).toUpperCase() + type.name.slice(1)
            )
          );
          setPokeResults(
            results.sort((a, b) => {
              if (a < b) {
                return -1;
              }
              if (a > b) {
                return 1;
              }
              return 0;
            })
          );
        })
        .catch((error: never) => {
          console.log("There was an ERROR: ", error);
        });
    }
  });

  return results;
};
