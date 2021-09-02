import React, { ChangeEvent } from "react";
import {
  Box,
  createStyles,
  Grid,
  InputBase,
  makeStyles,
  Paper,
  Theme,
} from "@material-ui/core";
import { E, PokemonType, PokeTypes } from "./pokeHelper";
import { pokedex } from "./database";
import { Autocomplete } from "@material-ui/lab";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "2px 4px",
      display: "flex",
    },
    input: {
      marginLeft: theme.spacing(1),
      marginTop: theme.spacing(0.9),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
  })
);

interface PokeSearchInterface {
  setUserInput: React.Dispatch<React.SetStateAction<PokeTypes>>;
}

const PokeSearch = ({ setUserInput }: PokeSearchInterface): JSX.Element => {
  const classes = useStyles();

  const handleChange = (
    _event: ChangeEvent<unknown>,
    value: PokemonType | null
  ) => {
    const input = value?.name as PokeTypes;
    setUserInput(input);
  };

  return (
    <>
      <Box m={3} />

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} md={10}>
          <Paper className={classes.root} elevation={5}>
            <Autocomplete
              options={pokedex}
              getOptionLabel={(option: PokemonType) => option.name}
              className={classes.input}
              onChange={handleChange}
              autoSelect
              autoHighlight
              PaperComponent={({ children }) => (
                <Paper style={{ fontSize: 25 }}>{children}</Paper>
              )}
              renderInput={(params) => {
                return (
                  <InputBase
                    {...params}
                    {...params.InputProps}
                    placeholder={`Search Pok${E}mon`}
                    style={{
                      fontWeight: "bolder",
                      fontSize: 25,
                      margin: 5,
                    }}
                  />
                );
              }}
            />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default React.memo(PokeSearch);
