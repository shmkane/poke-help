import {
    createStyles,
    Grid,
    makeStyles,
    TextField,
    Theme,
    Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            "& > *": {
                margin: theme.spacing(1),
                width: "25ch",
            },
        },
    })
);

const PokeSearch = () => {
    const classes = useStyles();

    return (
        <>
            <Grid

                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item xs={12}>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField id="standard-basic" label="Standard" />
                    </form>
                    <Typography variant="h1">Hello</Typography>
                </Grid>
            </Grid>
        </>
    );
};

export default PokeSearch;
