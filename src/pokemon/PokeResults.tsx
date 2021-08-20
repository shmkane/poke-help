import React, { useEffect, useState } from "react";
import { Box, Grid, Paper, Typography } from "@material-ui/core";
import { getPokemonTypeWeaknesses } from "./pokemonResultsHelper";
import { pokedex } from "./database";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Pokedex = require("pokedex-promise-v2");

interface PokeResults {
  userInput: string;
}

const PokeResults = ({ userInput }: PokeResults) => {
  const P = new Pokedex();
  const [pokeResults, setPokeResults] = useState<string[]>([]);

  useEffect(() => {
    if (userInput?.length) {
      getPokemonTypeWeaknesses(P, userInput as string, setPokeResults);
    }
  }, [userInput]);

  return (
    <>
      <Box m={5} />
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
        <Grid item md={6} xs={12}>
          <Grid container justify="space-around" alignItems="center">
            {userInput && (
              <Grid item xs={12} style={{ textAlign: "center", maxWidth: 500 }}>
                <Paper variant="outlined" square>
                  <img
                    src={pokedex?.find((a) => a.name === userInput)?.src ?? ""}
                    alt={userInput}
                    height={150}
                    width={150}
                  ></img>
                  <Typography variant="h5" style={{ textAlign: "center" }}>
                    {userInput}
                  </Typography>
                  <small>
                    {pokedex
                      ?.find((a) => a.name === userInput)
                      ?.types.join(" ") ?? ""}
                  </small>
                </Paper>
                <Box m={3} />
              </Grid>
            )}
          </Grid>
        </Grid>
        <Grid item md={6} xs={12}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item md={12} xs={12} style={{ textAlign: "center" }}>
              <Typography variant="h5">
                {userInput ? "Weak Against" : ""}
              </Typography>
            </Grid>
            <Grid item md={6} xs={12} style={{ textAlign: "center" }}>
              {pokeResults.map((t) => (
                <Paper key={t} elevation={3} style={{ margin: 10 }}>
                  <Box key={t} color="primary">
                    <Typography variant="h6">{t}</Typography>
                  </Box>
                </Paper>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default React.memo(PokeResults);
