import React , { useState } from 'react';
import Image from '../app/ImageIcon';

// material ui
import { AppBar, Badge, CssBaseline, Divider, FormControl, Grid, IconButton, InputBase, InputLabel, makeStyles, MenuItem, Paper, Select, Toolbar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import CircleNotificationsRoundedIcon from '@mui/icons-material/CircleNotificationsRounded';

// assets
import HeaderLogo from '../assets/Home/HeaderLogo.png';
import { useMediaQuery } from 'react-responsive';






const useStyles = makeStyles( (theme) =>({

    headerContent : {
        background : '#6D6BE6',
        alignItems: 'center',
        padding: '0'
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
        paddingLeft: '1rem'
    },
}))



export const Header = () =>{

    const classes = useStyles();

    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const isTablet = useMediaQuery({ query: '(max-width: 992px)' });
    const isDesktop = useMediaQuery({ query: '(min-width: 992px)' });

    const [search, setSearch] = useState('');

  const searchHandleChange = (event) => {
    setSearch(event.target.value);
  };

    return(
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1}}>
            <CssBaseline/>
            <Grid className={classes.headerContent} container>
                <Grid item lg={3}
                    style={{
                        padding: '0',
                        paddingLeft: '2.9rem',
                    }}
                >
                    <Toolbar>
                        <IconButton
                            style={{
                                padding:'0'
                            }}
                        >
                            <Image src={HeaderLogo} width="100px" height="40" alt="Logo" />
                        </IconButton>
                    </Toolbar>
                </Grid>
                {
                    isDesktop && 
                    <Grid 
                        className={classes.headerSearchBarContent} 
                        item lg={6}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <Paper 
                            component="form"
                            sx={{  display: 'flex', justifyContent:'space-around', alignItems: 'center', width: '80%' }}
                            >
                            <IconButton style={{ padding : '0 1rem'}} aria-label="menu">
                            <Select
                                xs={{padding:'5rem'}}
                                value={search}
                                onChange={searchHandleChange}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                >
                                <MenuItem value="">
                                    <em>All</em>
                                </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
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
                }
                <Grid className={classes.headerNotficationIcon}  item lg={3}>
                <Badge color="secondary"  variant="dot">
                    <CircleNotificationsRoundedIcon />
                </Badge>
                </Grid>
            </Grid>
        </AppBar>
    )
}