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

export enum DAMAGE {
  SUPER_EFFECTIVE = 2.0,
  REGULAR = 1.0,
  NOT_EFFECTIVE = 0.5,
  NO_EFFECT = 0.0,
}

export const damageToString = (multiplier: number): string => {
  if (multiplier > 2) {
    return "SUPER EFFECTIVE";
  } else if (multiplier > 1) {
    return "Super Effective";
  } else if (multiplier > 0.5) {
    return "Effective";
  } else if (multiplier > 0.0) {
    return "Not Very Effective";
  } else {
    return "Immune";
  }
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

export type MatchupResult = { type: PokeTypes; multiplier: number };
