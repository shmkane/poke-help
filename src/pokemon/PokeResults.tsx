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
  useEffectStyle,
  useTypeStyles,
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
              <Grid
                item
                xs={12}
                style={{ textAlign: "center", marginRight: 20, marginLeft: 20 }}
              >
                <Paper elevation={12}>
                  <Typography variant="h4">Enemy</Typography>
                  <img
                    src={pokedex?.find((a) => a.name === userInput)?.src ?? ""}
                    alt={userInput}
                    height={150}
                    width={150}
                  ></img>

                  <Typography
                    variant="h4"
                    style={{ textAlign: "center", fontWeight: "bold" }}
                  >
                    {userInput}
                  </Typography>

                  {pokedex
                    ?.find((a) => a.name === userInput)
                    ?.types.map((type) => {
                      const toLower: string = type?.toLowerCase() ?? "default";
                      return (
                        <Typography
                          key={type}
                          variant="h5"
                          display="inline"
                          style={{
                            ...useTypeStyles[toLower],
                            fontWeight: "bold",
                            paddingLeft: 5,
                            paddingRight: 5,
                          }}
                        >
                          {type}
                        </Typography>
                      );
                    })}
                </Paper>
                <Box m={3} />
                <Typography variant="h4" style={{ textAlign: "center" }}>
                  Effective against{" "}
                  <span style={{ fontWeight: "bolder" }}>{userInput}</span>:
                </Typography>
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
                  const toLower: string = t?.type?.toLowerCase() ?? "default";

                  return (
                    <Paper
                      key={t.type}
                      elevation={3}
                      style={{ margin: 20, marginRight: 20, marginLeft: 20 }}
                    >
                      <Grid
                        container
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Grid item xs={12}>
                          <Typography
                            variant="h4"
                            display="inline"
                            style={{
                              ...useTypeStyles[toLower],
                              fontWeight: "bolder",
                              paddingRight: 5,
                            }}
                          >
                            {capitalizeFirstLetter(t?.type ?? "")}
                          </Typography>
                        </Grid>

                        <Grid item xs={12}>
                          <Typography
                            variant="h5"
                            display="inline"
                            style={{
                              ...useEffectStyle[damageToString(t.multiplier)],
                              paddingRight: 2,
                              fontWeight: "bold",
                            }}
                          >
                            {damageToString(t.multiplier)}
                          </Typography>

                          <Typography
                            variant="h6"
                            display="inline"
                            style={{
                              color:
                                useEffectStyle[damageToString(t.multiplier)]
                                  .accentColor,
                              paddingRight: 2,
                              fontWeight: "bolder",
                            }}
                          >
                            ( {t.multiplier.toFixed(1)}x )
                          </Typography>
                        </Grid>
                      </Grid>
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
