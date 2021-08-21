import React from "react";
import "./App.css";
import {
  createTheme,
  CssBaseline,
  ThemeProvider,
  useMediaQuery,
} from "@material-ui/core";
import PokemonMain from "./pokemon/PokemonMain";

function App(): JSX.Element {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
        },
        typography: {
          fontFamily: ["Alumni Sans", "Arial", "sans-serif"].join(","),
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PokemonMain />
    </ThemeProvider>
  );
}

export default App;
