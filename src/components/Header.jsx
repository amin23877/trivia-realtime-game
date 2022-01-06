import Image from '../app/ImageIcon';

// material ui
import { AppBar, Badge, Divider, Grid, IconButton, InputBase, makeStyles, Paper, Toolbar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import CircleNotificationsRoundedIcon from '@mui/icons-material/CircleNotificationsRounded';

// assets
import HeaderLogo from '../assets/Home/HeaderLogo.png';






const useStyles = makeStyles( (theme) =>({

    headerContent : {
        background : '#6D6BE6',
        alignItems: 'center',
    },
    headerNotficationIcon : {
        textAlign : 'right',
        paddingRight: '5rem'

    },
    headerSearchBarContent : {
        textAlign: 'center',
    },
    inputSearchWidht : {
        width: '80%',
    }
}))



export const Header = () =>{

    const classes = useStyles();

    return(
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Grid className={classes.headerContent} container>
                <Grid item lg={3}>
                    <Toolbar>
                        <IconButton>
                            <Image src={HeaderLogo} width="100px" height="40" alt="Logo" />
                        </IconButton>
                    </Toolbar>
                </Grid>
                <Grid className={classes.headerSearchBarContent} item lg={6}>
                    <Paper 
                        component="form"
                        sx={{ p: '2px 4px', display: 'flex', justifyContent:'space-around', alignItems: 'center', width: '80%' }}
                        >
                        <IconButton 
                            sx={{ p: '10px'  }} aria-label="menu"
                        >
                            A
                        </IconButton>
                        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                        <InputBase
                            className={classes.inputSearchWidht}
                            placeholder="Search Topics, People, Tags, ..."
                            inputProps={{ 'aria-label': 'Search Topics, People, Tags, ...' }}
                        />
                        <IconButton type="submit" aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </Paper>
                </Grid>
                <Grid className={classes.headerNotficationIcon}  item lg={3}>
                <Badge color="secondary"  variant="dot">
                    <CircleNotificationsRoundedIcon />
                </Badge>
                </Grid>
            </Grid>
        </AppBar>
    )
}