export const E = "é";

export type PokeTypes =
  | "Bug"
  | "Dragon"
  | "Electric"
  | "Fairy"
  | "Fighting"
  | "Fire"
  | "Flying"
  | "Ghost"
  | "Grass"
  | "Ground"
  | "Ice"
  | "Normal"
  | "Poison"
  | "Psychic"
  | "Rock"
  | "Steel"
  | "Water"
  | null
  | undefined;

export type DefaultPokeResponse = {
  name: string;
  url: string;
};

export type PokeResponse = {
  damage_relations: {
    double_damage_from: DefaultPokeResponse[];
    double_damage_to: DefaultPokeResponse[];
    half_damage_from: DefaultPokeResponse[];
    half_damage_to: DefaultPokeResponse[];
    no_damage_from: DefaultPokeResponse[];
    no_damage_to: DefaultPokeResponse[];
  };
  game_indices: [
    {
      game_index: number;
      generation: DefaultPokeResponse;
    }
  ];
  generation: DefaultPokeResponse;
  id: 4;
  move_damage_class: DefaultPokeResponse;
  moves: DefaultPokeResponse[];
  name: "poison";
  names: never[];
  pokemon: never[];
};

export type PokemonType = {
  id: number;
  name: string;
  types: Array<PokeTypes>;
  src: string;
};
