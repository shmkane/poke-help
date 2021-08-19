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
    () => createTheme({
      palette: {
        type: prefersDarkMode ? "dark" : "light",
      },
    }),
    [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <div>
        <PokemonMain />
      </div>
    </ThemeProvider>
  );
}

export default App;
