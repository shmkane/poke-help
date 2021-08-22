import React from "react";
import "./App.css";
import { createTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import PokemonMain from "./pokemon/PokemonMain";

function App(): JSX.Element {
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          type: "dark",
        },
        typography: {
          fontFamily: ["Alumni Sans", "Arial", "sans-serif"].join(","),
        },
      }),
    []
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PokemonMain />
    </ThemeProvider>
  );
}

export default App;
