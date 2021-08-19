import { Typography } from "@material-ui/core";

interface PokeResults {
    userInput: string;
}

const PokeResults = ({userInput}: PokeResults) => {

  return(<Typography variant="h6">{userInput ?? "no"}</Typography>);
};

export default PokeResults;
