import { PokeTypes, DAMAGE, PokeResponse, MatchupResult } from "./pokeHelper";
import { pokedex } from "./database";

export const fetchPokemonMatchups = (
  P: { getTypeByName: (input: string | undefined) => Promise<never> },
  pokemonStr: string,
  setFetchedResults: React.Dispatch<
    React.SetStateAction<PokeResponse[] | undefined>
  >
): void => {
  // Get the types from local db
  const types = pokedex.find((p) => pokemonStr === p.name)?.types;

  const typePromises: Promise<never>[] =
    types?.map((type: PokeTypes) => {
      return P.getTypeByName(type?.toLowerCase());
    }) ?? [];

  //Wait for all to resolve
  Promise.all(typePromises).then((results) => {
    setFetchedResults(results);
  });
};

export const getPokemonTypeWeaknesses = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fetchedResults: PokeResponse[],
  setPokeResults: React.Dispatch<React.SetStateAction<MatchupResult[]>>
): void => {
  const result: MatchupResult[] = [];

  fetchedResults.forEach((response) => {
    const { double_damage_from, half_damage_from, no_damage_from } =
      response.damage_relations;
    const damageCollections = [
      { collection: double_damage_from, effect: DAMAGE.SUPER_EFFECTIVE },
      { collection: half_damage_from, effect: DAMAGE.NOT_EFFECTIVE },
      { collection: no_damage_from, effect: DAMAGE.NO_EFFECT },
    ];
    Object.values(damageCollections).forEach((dmgCollection) => {
      const { collection, effect } = dmgCollection;
      collection.forEach((damageType) => {
        // See if we've already found this type.
        const existingType = result.find((res) => res.type === damageType.name);
        if (existingType) {
          existingType.multiplier *= effect;
        } else {
          const newType = {
            type: damageType.name as PokeTypes,
            multiplier: effect,
          };
          result.push(newType);
        }
      });
    });
    setPokeResults(result.sort((a, b) => b.multiplier - a.multiplier));
  });
};

export const capitalizeFirstLetter = (string: string): string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
