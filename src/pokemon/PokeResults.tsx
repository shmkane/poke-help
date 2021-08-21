import { useEffect, useState } from "react";
import { Box, Grid, Paper, Typography } from "@material-ui/core";
import {
  getPokemonTypeWeaknesses,
  fetchPokemonMatchups,
  capitalizeFirstLetter,
} from "./pokemonResultsHelper";
import { pokedex } from "./database";
import {
  damageToString,
  MatchupResult,
  PokeResponse,
  PokeTypes,
} from "./pokeHelper";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Pokedex = require("pokedex-promise-v2");

interface PokeResults {
  userInput: PokeTypes;
}

const PokeResults = ({ userInput }: PokeResults) => {
  const P = new Pokedex();
  const [fetchedResults, setFetchedResults] = useState<PokeResponse[]>();
  const [pokeResults, setPokeResults] = useState<MatchupResult[]>([]);

  useEffect(() => {
    if (userInput?.length) {
      fetchPokemonMatchups(P, userInput as string, setFetchedResults);
      setPokeResults([]);
    }
  }, [userInput]);

  useEffect(() => {
    if (fetchedResults) {
      getPokemonTypeWeaknesses(fetchedResults, setPokeResults);
    }
  }, [fetchedResults]);

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
            <Grid item md={6} xs={12} style={{ textAlign: "center" }}>
              {userInput?.length &&
                pokeResults.map((t: MatchupResult) => {
                  return (
                    <Paper key={t.type} elevation={3} style={{ margin: 10 }}>
                      <Box color="primary">
                        <Typography variant="h6" display="inline">
                          {capitalizeFirstLetter(t?.type ?? "")}
                          {": "}
                          {damageToString(t.multiplier)}
                        </Typography>

                        <Typography variant="h6" display="inline">
                          {" "}
                        </Typography>

                        <Typography variant="body1" display="inline">
                          <small>({t.multiplier.toFixed(1)}x)</small>
                        </Typography>
                      </Box>
                    </Paper>
                  );
                })}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default PokeResults;
