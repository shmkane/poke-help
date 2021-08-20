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

export const pokedex: Array<PokemonType> = [
  {
    id: 1,
    name: "Bulbasaur",
    types: ["Grass", "Poison"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/bulbasaur.png",
  },
  {
    id: 2,
    name: "Ivysaur",
    types: ["Grass", "Poison"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/ivysaur.png",
  },
  {
    id: 3,
    name: "Venusaur",
    types: ["Grass", "Poison"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/venusaur.png",
  },
  {
    id: 4,
    name: "Charmander",
    types: ["Fire"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/charmander.png",
  },
  {
    id: 5,
    name: "Charmeleon",
    types: ["Fire"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/charmeleon.png",
  },
  {
    id: 6,
    name: "Charizard",
    types: ["Fire", "Flying"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/charizard.png",
  },
  {
    id: 7,
    name: "Squirtle",
    types: ["Water"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/squirtle.png",
  },
  {
    id: 8,
    name: "Wartortle",
    types: ["Water"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/wartortle.png",
  },
  {
    id: 9,
    name: "Blastoise",
    types: ["Water"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/blastoise.png",
  },
  {
    id: 10,
    name: "Caterpie",
    types: ["Bug"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/caterpie.png",
  },
  {
    id: 11,
    name: "Metapod",
    types: ["Bug"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/metapod.png",
  },
  {
    id: 12,
    name: "Butterfree",
    types: ["Bug", "Flying"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/butterfree.png",
  },
  {
    id: 13,
    name: "Weedle",
    types: ["Bug", "Poison"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/weedle.png",
  },
  {
    id: 14,
    name: "Kakuna",
    types: ["Bug", "Poison"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/kakuna.png",
  },
  {
    id: 15,
    name: "Beedrill",
    types: ["Bug", "Poison"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/beedrill.png",
  },
  {
    id: 16,
    name: "Pidgey",
    types: ["Normal", "Flying"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/pidgey.png",
  },
  {
    id: 17,
    name: "Pidgeotto",
    types: ["Normal", "Flying"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/pidgeotto.png",
  },
  {
    id: 18,
    name: "Pidgeot",
    types: ["Normal", "Flying"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/pidgeot.png",
  },
  {
    id: 19,
    name: "Rattata",
    types: ["Normal"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/rattata.png",
  },
  {
    id: 20,
    name: "Raticate",
    types: ["Normal"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/raticate.png",
  },
  {
    id: 21,
    name: "Spearow",
    types: ["Normal", "Flying"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/spearow.png",
  },
  {
    id: 22,
    name: "Fearow",
    types: ["Normal", "Flying"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/fearow.png",
  },
  {
    id: 23,
    name: "Ekans",
    types: ["Poison"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/ekans.png",
  },
  {
    id: 24,
    name: "Arbok",
    types: ["Poison"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/arbok.png",
  },
  {
    id: 25,
    name: "Pikachu",
    types: ["Electric"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/pikachu.png",
  },
  {
    id: 26,
    name: "Raichu",
    types: ["Electric"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/raichu.png",
  },
  {
    id: 27,
    name: "Sandshrew",
    types: ["Ground"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/sandshrew.png",
  },
  {
    id: 28,
    name: "Sandslash",
    types: ["Ground"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/sandslash.png",
  },
  {
    id: 29,
    name: "Nidoran♀",
    types: ["Poison"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/nidoran-f.png",
  },
  {
    id: 30,
    name: "Nidorina",
    types: ["Poison"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/nidorina.png",
  },
  {
    id: 31,
    name: "Nidoqueen",
    types: ["Poison", "Ground"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/nidoqueen.png",
  },
  {
    id: 32,
    name: "Nidoran♂",
    types: ["Poison"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/nidoran-m.png",
  },
  {
    id: 33,
    name: "Nidorino",
    types: ["Poison"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/nidorino.png",
  },
  {
    id: 34,
    name: "Nidoking",
    types: ["Poison", "Ground"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/nidoking.png",
  },
  {
    id: 35,
    name: "Clefairy",
    types: ["Fairy"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/clefairy.png",
  },
  {
    id: 36,
    name: "Clefable",
    types: ["Fairy"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/clefable.png",
  },
  {
    id: 37,
    name: "Vulpix",
    types: ["Fire"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/vulpix.png",
  },
  {
    id: 38,
    name: "Ninetales",
    types: ["Fire"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/ninetales.png",
  },
  {
    id: 39,
    name: "Jigglypuff",
    types: ["Normal", "Fairy"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/jigglypuff.png",
  },
  {
    id: 40,
    name: "Wigglytuff",
    types: ["Normal", "Fairy"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/wigglytuff.png",
  },
  {
    id: 41,
    name: "Zubat",
    types: ["Poison", "Flying"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/zubat.png",
  },
  {
    id: 42,
    name: "Golbat",
    types: ["Poison", "Flying"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/golbat.png",
  },
  {
    id: 43,
    name: "Oddish",
    types: ["Grass", "Poison"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/oddish.png",
  },
  {
    id: 44,
    name: "Gloom",
    types: ["Grass", "Poison"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/gloom.png",
  },
  {
    id: 45,
    name: "Vileplume",
    types: ["Grass", "Poison"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/vileplume.png",
  },
  {
    id: 46,
    name: "Paras",
    types: ["Bug", "Grass"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/paras.png",
  },
  {
    id: 47,
    name: "Parasect",
    types: ["Bug", "Grass"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/parasect.png",
  },
  {
    id: 48,
    name: "Venonat",
    types: ["Bug", "Poison"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/venonat.png",
  },
  {
    id: 49,
    name: "Venomoth",
    types: ["Bug", "Poison"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/venomoth.png",
  },
  {
    id: 50,
    name: "Diglett",
    types: ["Ground"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/diglett.png",
  },
  {
    id: 51,
    name: "Dugtrio",
    types: ["Ground"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/dugtrio.png",
  },
  {
    id: 52,
    name: "Meowth",
    types: ["Normal"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/meowth.png",
  },
  {
    id: 53,
    name: "Persian",
    types: ["Normal"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/persian.png",
  },
  {
    id: 54,
    name: "Psyduck",
    types: ["Water"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/psyduck.png",
  },
  {
    id: 55,
    name: "Golduck",
    types: ["Water"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/golduck.png",
  },
  {
    id: 56,
    name: "Mankey",
    types: ["Fighting"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/mankey.png",
  },
  {
    id: 57,
    name: "Primeape",
    types: ["Fighting"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/primeape.png",
  },
  {
    id: 58,
    name: "Growlithe",
    types: ["Fire"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/growlithe.png",
  },
  {
    id: 59,
    name: "Arcanine",
    types: ["Fire"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/arcanine.png",
  },
  {
    id: 60,
    name: "Poliwag",
    types: ["Water"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/poliwag.png",
  },
  {
    id: 61,
    name: "Poliwhirl",
    types: ["Water"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/poliwhirl.png",
  },
  {
    id: 62,
    name: "Poliwrath",
    types: ["Water", "Fighting"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/poliwrath.png",
  },
  {
    id: 63,
    name: "Abra",
    types: ["Psychic"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/abra.png",
  },
  {
    id: 64,
    name: "Kadabra",
    types: ["Psychic"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/kadabra.png",
  },
  {
    id: 65,
    name: "Alakazam",
    types: ["Psychic"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/alakazam.png",
  },
  {
    id: 66,
    name: "Machop",
    types: ["Fighting"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/machop.png",
  },
  {
    id: 67,
    name: "Machoke",
    types: ["Fighting"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/machoke.png",
  },
  {
    id: 68,
    name: "Machamp",
    types: ["Fighting"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/machamp.png",
  },
  {
    id: 69,
    name: "Bellsprout",
    types: ["Grass", "Poison"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/bellsprout.png",
  },
  {
    id: 70,
    name: "Weepinbell",
    types: ["Grass", "Poison"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/weepinbell.png",
  },
  {
    id: 71,
    name: "Victreebel",
    types: ["Grass", "Poison"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/victreebel.png",
  },
  {
    id: 72,
    name: "Tentacool",
    types: ["Water", "Poison"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/tentacool.png",
  },
  {
    id: 73,
    name: "Tentacruel",
    types: ["Water", "Poison"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/tentacruel.png",
  },
  {
    id: 74,
    name: "Geodude",
    types: ["Rock", "Ground"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/geodude.png",
  },
  {
    id: 75,
    name: "Graveler",
    types: ["Rock", "Ground"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/graveler.png",
  },
  {
    id: 76,
    name: "Golem",
    types: ["Rock", "Ground"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/golem.png",
  },
  {
    id: 77,
    name: "Ponyta",
    types: ["Fire"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/ponyta.png",
  },
  {
    id: 78,
    name: "Rapidash",
    types: ["Fire"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/rapidash.png",
  },
  {
    id: 79,
    name: "Slowpoke",
    types: ["Water", "Psychic"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/slowpoke.png",
  },
  {
    id: 80,
    name: "Slowbro",
    types: ["Water", "Psychic"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/slowbro.png",
  },
  {
    id: 81,
    name: "Magnemite",
    types: ["Electric", "Steel"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/magnemite.png",
  },
  {
    id: 82,
    name: "Magneton",
    types: ["Electric", "Steel"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/magneton.png",
  },
  {
    id: 83,
    name: "Farfetch'd",
    types: ["Normal", "Flying"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/farfetchd.png",
  },
  {
    id: 84,
    name: "Doduo",
    types: ["Normal", "Flying"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/doduo.png",
  },
  {
    id: 85,
    name: "Dodrio",
    types: ["Normal", "Flying"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/dodrio.png",
  },
  {
    id: 86,
    name: "Seel",
    types: ["Water"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/seel.png",
  },
  {
    id: 87,
    name: "Dewgong",
    types: ["Water", "Ice"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/dewgong.png",
  },
  {
    id: 88,
    name: "Grimer",
    types: ["Poison"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/grimer.png",
  },
  {
    id: 89,
    name: "Muk",
    types: ["Poison"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/muk.png",
  },
  {
    id: 90,
    name: "Shellder",
    types: ["Water"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/shellder.png",
  },
  {
    id: 91,
    name: "Cloyster",
    types: ["Water", "Ice"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/cloyster.png",
  },
  {
    id: 92,
    name: "Gastly",
    types: ["Ghost", "Poison"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/gastly.png",
  },
  {
    id: 93,
    name: "Haunter",
    types: ["Ghost", "Poison"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/haunter.png",
  },
  {
    id: 94,
    name: "Gengar",
    types: ["Ghost", "Poison"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/gengar.png",
  },
  {
    id: 95,
    name: "Onix",
    types: ["Rock", "Ground"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/onix.png",
  },
  {
    id: 96,
    name: "Drowzee",
    types: ["Psychic"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/drowzee.png",
  },
  {
    id: 97,
    name: "Hypno",
    types: ["Psychic"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/hypno.png",
  },
  {
    id: 98,
    name: "Krabby",
    types: ["Water"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/krabby.png",
  },
  {
    id: 99,
    name: "Kingler",
    types: ["Water"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/kingler.png",
  },
  {
    id: 100,
    name: "Voltorb",
    types: ["Electric"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/voltorb.png",
  },
  {
    id: 101,
    name: "Electrode",
    types: ["Electric"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/electrode.png",
  },
  {
    id: 102,
    name: "Exeggcute",
    types: ["Grass", "Psychic"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/exeggcute.png",
  },
  {
    id: 103,
    name: "Exeggutor",
    types: ["Grass", "Psychic"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/exeggutor.png",
  },
  {
    id: 104,
    name: "Cubone",
    types: ["Ground"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/cubone.png",
  },
  {
    id: 105,
    name: "Marowak",
    types: ["Ground"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/marowak.png",
  },
  {
    id: 106,
    name: "Hitmonlee",
    types: ["Fighting"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/hitmonlee.png",
  },
  {
    id: 107,
    name: "Hitmonchan",
    types: ["Fighting"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/hitmonchan.png",
  },
  {
    id: 108,
    name: "Lickitung",
    types: ["Normal"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/lickitung.png",
  },
  {
    id: 109,
    name: "Koffing",
    types: ["Poison"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/koffing.png",
  },
  {
    id: 110,
    name: "Weezing",
    types: ["Poison"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/weezing.png",
  },
  {
    id: 111,
    name: "Rhyhorn",
    types: ["Ground", "Rock"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/rhyhorn.png",
  },
  {
    id: 112,
    name: "Rhydon",
    types: ["Ground", "Rock"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/rhydon.png",
  },
  {
    id: 113,
    name: "Chansey",
    types: ["Normal"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/chansey.png",
  },
  {
    id: 114,
    name: "Tangela",
    types: ["Grass"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/tangela.png",
  },
  {
    id: 115,
    name: "Kangaskhan",
    types: ["Normal"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/kangaskhan.png",
  },
  {
    id: 116,
    name: "Horsea",
    types: ["Water"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/horsea.png",
  },
  {
    id: 117,
    name: "Seadra",
    types: ["Water"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/seadra.png",
  },
  {
    id: 118,
    name: "Goldeen",
    types: ["Water"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/goldeen.png",
  },
  {
    id: 119,
    name: "Seaking",
    types: ["Water"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/seaking.png",
  },
  {
    id: 120,
    name: "Staryu",
    types: ["Water"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/staryu.png",
  },
  {
    id: 121,
    name: "Starmie",
    types: ["Water", "Psychic"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/starmie.png",
  },
  {
    id: 122,
    name: "Mr.",
    types: ["Psychic", "Fairy"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/mr-mime.png",
  },
  {
    id: 123,
    name: "Scyther",
    types: ["Bug", "Flying"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/scyther.png",
  },
  {
    id: 124,
    name: "Jynx",
    types: ["Ice", "Psychic"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/jynx.png",
  },
  {
    id: 125,
    name: "Electabuzz",
    types: ["Electric"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/electabuzz.png",
  },
  {
    id: 126,
    name: "Magmar",
    types: ["Fire"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/magmar.png",
  },
  {
    id: 127,
    name: "Pinsir",
    types: ["Bug"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/pinsir.png",
  },
  {
    id: 128,
    name: "Tauros",
    types: ["Normal"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/tauros.png",
  },
  {
    id: 129,
    name: "Magikarp",
    types: ["Water"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/magikarp.png",
  },
  {
    id: 130,
    name: "Gyarados",
    types: ["Water", "Flying"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/gyarados.png",
  },
  {
    id: 131,
    name: "Lapras",
    types: ["Water", "Ice"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/lapras.png",
  },
  {
    id: 132,
    name: "Ditto",
    types: ["Normal"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/ditto.png",
  },
  {
    id: 133,
    name: "Eevee",
    types: ["Normal"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/eevee.png",
  },
  {
    id: 134,
    name: "Vaporeon",
    types: ["Water"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/vaporeon.png",
  },
  {
    id: 135,
    name: "Jolteon",
    types: ["Electric"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/jolteon.png",
  },
  {
    id: 136,
    name: "Flareon",
    types: ["Fire"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/flareon.png",
  },
  {
    id: 137,
    name: "Porygon",
    types: ["Normal"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/porygon.png",
  },
  {
    id: 138,
    name: "Omanyte",
    types: ["Rock", "Water"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/omanyte.png",
  },
  {
    id: 139,
    name: "Omastar",
    types: ["Rock", "Water"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/omastar.png",
  },
  {
    id: 140,
    name: "Kabuto",
    types: ["Rock", "Water"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/kabuto.png",
  },
  {
    id: 141,
    name: "Kabutops",
    types: ["Rock", "Water"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/kabutops.png",
  },
  {
    id: 142,
    name: "Aerodactyl",
    types: ["Rock", "Flying"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/aerodactyl.png",
  },
  {
    id: 143,
    name: "Snorlax",
    types: ["Normal"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/snorlax.png",
  },
  {
    id: 144,
    name: "Articuno",
    types: ["Ice", "Flying"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/articuno.png",
  },
  {
    id: 145,
    name: "Zapdos",
    types: ["Electric", "Flying"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/zapdos.png",
  },
  {
    id: 146,
    name: "Moltres",
    types: ["Fire", "Flying"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/moltres.png",
  },
  {
    id: 147,
    name: "Dratini",
    types: ["Dragon"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/dratini.png",
  },
  {
    id: 148,
    name: "Dragonair",
    types: ["Dragon"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/dragonair.png",
  },
  {
    id: 149,
    name: "Dragonite",
    types: ["Dragon", "Flying"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/dragonite.png",
  },
  {
    id: 150,
    name: "Mewtwo",
    types: ["Psychic"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/mewtwo.png",
  },
  {
    id: 151,
    name: "Mew",
    types: ["Psychic"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/mew.png",
  },
  {
    id: 152,
    name: "Meltan",
    types: ["Steel"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/meltan.png",
  },
  {
    id: 153,
    name: "Melmetal",
    types: ["Steel"],
    src: "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/melmetal.png",
  },
];
