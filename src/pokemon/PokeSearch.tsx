import React, { ChangeEvent, useState } from "react";
import {
  Box,
  createStyles,
  Grid,
  IconButton,
  InputBase,
  makeStyles,
  Paper,
  Theme,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
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

  const [textInput, setTextInput] = useState<PokeTypes>(undefined);

  const handleChange = (
    _event: ChangeEvent<unknown>,
    value: PokemonType | null
  ) => {
    const input = value?.name as PokeTypes;
    setTextInput(input);
    setUserInput(input);
  };

  const submitData = () => {
    setUserInput(textInput);
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
        <Grid item xs={12}>
          <Paper className={classes.root}>
            <Autocomplete
              options={pokedex}
              getOptionLabel={(option: PokemonType) => option.name}
              className={classes.input}
              onChange={handleChange}
              autoSelect
              autoHighlight
              renderInput={(params) => {
                return (
                  <InputBase
                    {...params}
                    {...params.InputProps}
                    placeholder={`Search Pok${E}mon`}
                  />
                );
              }}
            />
            <IconButton
              type="submit"
              className={classes.iconButton}
              aria-label="search"
              onClick={() => submitData()}
            >
              <SearchIcon />
            </IconButton>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default React.memo(PokeSearch);
