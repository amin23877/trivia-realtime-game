import { Grid, Card, CardMedia, CardContent, Typography, Avatar, IconButton, makeStyles, Box, Tabs, Tab, styled  } from "@material-ui/core";
import PropTypes from 'prop-types';

import Image from '../app/ImageIcon';

import ProfileBackground from '../assets/Profile/profile-background.png';
import UserProfile from '../assets/Profile/user-profile.svg';
import EditIcon from '../assets/Profile/edit-icon.svg';
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { FavouriteTopics, PerformanceProfile } from "../components";



const useStyles = makeStyles((theme) =>({

    typography8:{
        fontSize:'.8rem',
        color: '#444'
    },
    typography1:{
        fontSize:'1rem',
    },
}))
const AntTabs = styled(Tabs)({
    borderBottom: '1px solid #e8e8e8',
    '& .MuiTabs-indicator': {
        backgroundColor: '#6D6BE6',
        border:'1.5px solid #6D6BE6',
        
    },
});
  const AntTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
    textTransform: 'none',
    minWidth: 0,
    [theme.breakpoints.up('sm')]: {
      minWidth: 0,
    },
    fontWeight: '500',
    fontSize:'1.1rem',
    marginRight: theme.spacing(1),
    color: '#8E8B9E',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#6D6BE6',
      opacity: 1,
    },
    '&.Mui-selected': {
      color: '#6D6BE6',
      fontWeight: '500',
      fontSize: '1.1rem',
    },
    '&.Mui-focusVisible': {
      backgroundColor: '#d1eaff',
    },
  }));




function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
}


export const UserPorfile = () =>{

    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

    const classes = useStyles();

    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const isTablet = useMediaQuery({ query: '(max-width: 992px)' });
    const isDesktop = useMediaQuery({ query: '(min-width: 992px)' });

    const [ selectTab , setSelectTab ] = useState(0);
    const hadnleChangeTab = ( event , newValue ) =>{
        setSelectTab(newValue)
    }

    return (
        <>
            <Grid continer>
                <Grid item xs={12} sm={10} style={{margin: '3rem auto'}}>
                    <Card>
                        <CardMedia 
                            component="img" 
                            image={ProfileBackground} 
                            alt="profile"
                        >
                        </CardMedia>
                        <CardContent 
                            style={{
                                padding: '.3rem 0'
                            }}
                        >
                            <div 
                                style={{
                                    display:'flex', 
                                    justifyConent:'space-between',
                                }}>
                                <Grid item xs={6} 
                                    style={{  
                                       
                                        display:'flex',
                                        justifyContent:'center',
                                    }} >
                                    <div 
                                        style={{
                                            position:'relative',
                                        }}
                                    >
                                        <Typography
                                            variant="h6"
                                            className={classes.typography1}
                                        >
                                            Amir basiri
                                        </Typography>
                                        <Typography 
                                            component="subtitle1"
                                            className={classes.typography8}
                                            >level 6</Typography>
                                        <div 
                                            style={{
                                                position:'absolute' , 
                                                top: isMobile ? '-34px':'-45px',
                                                left: isMobile ?'-48px' : '-64px'
                                            }}>
                                            <Avatar 
                                                style={{
                                                    width: isDesktop ? '66px':'50px', 
                                                    height: isDesktop? '66px' : '50px'
                                                }} 
                                                    alt="user profile" src={UserProfile} />
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={6} 
                                    style={{ 
                                        textAlign:'right',
                                        paddingRight:'3rem',
                                        display: 'flex',
                                        justifyContent:'flex-end',
                                        alignItems: 'center',
                                        cursor:'pointer',
                                     }}>
                                    <IconButton>
                                        <Image src={EditIcon} alt="edit" width="17" />
                                    </IconButton>
                                    <Typography 
                                        variant="h6"
                                        className={classes.typography1}
                                    >
                                        Edit Profile
                                    </Typography>
                                </Grid>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <AntTabs  value={value} onChange={handleChange} 
                            aria-label="basic tabs example"
                            indicatorColor="primary"
                        >
                            <AntTab label="Favourit Topics" {...a11yProps(0)} />
                            <AntTab label="Performance" {...a11yProps(1)} />
                        </AntTabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        Favourit Topics
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        Performance
                    </TabPanel>
                </Box>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </Grid>
        </>
    )
}