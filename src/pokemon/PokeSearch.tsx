import React, {useState} from "react";
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
import { E } from "./pokeHelper";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "2px 4px",
      display: "flex",
    },
    input: {
      marginLeft: theme.spacing(1),
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
  setUserInput: React.Dispatch<React.SetStateAction<string>>;
}

const PokeSearch = ({ setUserInput }: PokeSearchInterface): JSX.Element => {
  const classes = useStyles();

  const [textInput, setTextInput] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextInput(event.target.value);
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
        <Grid item xs={8}>
          <Paper className={classes.root}>
            <InputBase
              className={classes.input}
              placeholder={`Search Pok${E}mon`}
              value={textInput}
              inputProps={{ "aria-label": "search pokemon" }}
              onChange={handleChange}

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
