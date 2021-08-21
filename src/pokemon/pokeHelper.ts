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

export const useTypeStyles: { [id: string]: any } = {
  default: {
    color: "#000",
  },
  normal: {
    color: "#b4b589",
  },
  grass: {
    color: "#87cf63",
  },
  ground: {
    color: "##e6c97a",
  },
  fighting: {
    color: "#cd4534",
  },
  rock: {
    color: "#c6af47",
  },
  steel: {
    color: "#c6c4d9",
  },
  fire: {
    color: "#f2923e",
  },
  electric: {
    color: "#f9d63d",
  },
  flying: {
    color: "#baa4f3",
  },
  psychic: {
    color: "#fd6f9a",
  },
  bug: {
    color: "#b6c029",
  },
  dragon: {
    color: "#8557f8",
  },
  water: {
    color: "#866b58",
  },
  ice: {
    color: "#a6ddde",
  },
  poison: {
    color: "#b258a9",
  },
  dark: {
    color: "#866b58",
  },
  ghost: {
    color: "#816ea6",
  },
  fairy: {
    color: "#ffbed3",
  },
};

export const useEffectStyle: { [id: string]: any } = {
  default: {
    color: "#fff",
  },
  super_effective: {
    color: "#866b58",
  },
  ice: {
    color: "#a6ddde",
  },
  poison: {
    color: "#b258a9",
  },
  dark: {
    color: "#866b58",
  },
  ghost: {
    color: "#816ea6",
  },
  fairy: {
    color: "#ffbed3",
  },
};
