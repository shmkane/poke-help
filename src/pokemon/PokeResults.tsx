import React from "react";
import { Typography } from "@material-ui/core";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Pokedex = require("pokedex-promise-v2");
interface PokeResults {
  userInput: string;
}

const PokeResults = ({ userInput }: PokeResults) => {

  const P = new Pokedex();

  if (userInput?.length) {
    P.getTypeByName("ground") // with Promise
      .then(function (response: any) {
        console.log(response.damage_relations.double_damage_from.map((type: {name: string, url: string}) => type.name));
      })
      .catch(function (error: any) {
        console.log("There was an ERROR: ", error);
      });

  }

  return (
    <>
      <Typography variant="h6">{userInput ?? "no"}</Typography>
    </>
  );
};

export default React.memo(PokeResults);
