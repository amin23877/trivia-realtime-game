import { Link } from 'react-router-dom';

// material ui
import { Box, Button, Container, Drawer, Grid, IconButton, List, ListItem, ListItemIcon, ListItemText, makeStyles, Typography } from "@material-ui/core";

// assets
import HomeIcon from '../assets/Home/SideBar/Home-icon.png';
import LeagueIcon from '../assets/Home/SideBar/league-icon.png';
import ProfileIcon from '../assets/Home/SideBar/profile-icon.png';
import FriendsIcon from '../assets/Home/SideBar/friends-icon.png';
import WalletIcon from '../assets/Home/SideBar/wallet-icon.png';
import SettingsIcon from '../assets/Home/SideBar/settings-icon.png';
import ContactusIcon from '../assets/Home/SideBar/contactus-icon.png';
import QuickPlayIcon from '../assets/Home/SideBar/play-icon.png';
import UserProfileIcon from '../assets/Home/SideBar/user-profile.png';
import ArrowBottomIcon from '../assets/Home/SideBar/arrow-bottom-icon.png';
import Image from '../app/ImageIcon';





const useStyles = makeStyles ( (theme ) => ({
    link : {
        textDecoration : 'none',
        color: theme.palette.text.primary
    },
    quickPlayButton : {
        display: 'flex',
        alignItems: 'center',
        margin: '1.5rem',
        backgroundColor: '#F24973',
        padding: '.5rem',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        color: '#fff'
    },
    userPhoneNumber : {
        fontSize : '.9rem',
        color: '#999',
    },
    li:{
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center',
        paddingLeft: '2rem',
    },
    liSpan : {
        fontSize: '1.9rem',
        fontWeight : 'bold',
        color:'#555',
    }
}))


export const SideDrawer = () =>{

    const classes = useStyles();

    return(
        <Drawer
            style={{ width: "20vw" }}
            variant = "persistent"
            anchor="left"
            open={true}
        >
            <List style={{width : '20vw'}}>
            <Link to="/">
                <ListItem className={classes.li} button >
                    <ListItemIcon>
                        <Image src={UserProfileIcon} width="35" height="40" alt="icon"/>
                    </ListItemIcon>
                    <ListItemText>
                        <Typography>Amir Basiri</Typography>
                        <Typography                                      className={classes.userPhoneNumber} component="span">+98 914 123 4567</Typography>
                    </ListItemText>
                </ListItem>
            </Link>
            <Button 
                className={classes.quickPlayButton}
                variant="contained" 
                startIcon={<Image src={QuickPlayIcon} alt="icon" width="16" height="16"/>}  
                endIcon={<Image src={ArrowBottomIcon} alt="icon" width="12" height="8"/>}
            >
            Quick Play
            </Button>
                <Link to="/" className={classes.link} >
                    <ListItem className={classes.li}>
                        <ListItemIcon>
                            <Image 
                                src={HomeIcon} 
                                width={20} 
                                height={20} 
                                alt="Home" />
                        </ListItemIcon>
                        <ListItemText >
                            <Typography className={classes.liSpan}>
                                Home
                            </Typography>
                        </ListItemText>
                    </ListItem>
                </Link>
                <Link to="/" className={classes.link} >
                    <ListItem className={classes.li}> 
                        <ListItemIcon>
                            <Image 
                                src={LeagueIcon} 
                                width={20} 
                                height={20} 
                                alt="League" />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography className={classes.liSpan}>
                                League
                            </Typography>
                        </ListItemText>
                    </ListItem>
                </Link>
                <Link to="/" className={classes.link} >
                    <ListItem className={classes.li}>
                        <ListItemIcon>
                            <Image 
                                src={ProfileIcon} 
                                width={20} 
                                height={20} 
                                alt="Profile" />
                        </ListItemIcon>
                        <ListItemText>
                            Profile
                        </ListItemText>
                    </ListItem>
                </Link>
                <Link to="/" className={classes.link} >
                    <ListItem className={classes.li}>
                        <ListItemIcon>
                            <Image 
                                src={FriendsIcon} 
                                width={20} 
                                height={20} 
                                alt="Friends" />
                        </ListItemIcon>
                        <ListItemText>
                            Friends
                        </ListItemText>
                    </ListItem>
                </Link>
                <Link to="/" className={classes.link} >
                    <ListItem className={classes.li}>
                        <ListItemIcon>
                            <Image 
                                src={WalletIcon} 
                                width={20} 
                                height={20} 
                                alt="Wallet" />
                        </ListItemIcon>
                        <ListItemText>
                            Wallet
                        </ListItemText>
                    </ListItem>
                </Link>
                <Link to="/" className={classes.link} >
                    <ListItem className={classes.li}>
                        <ListItemIcon>
                            <Image 
                                src={SettingsIcon} 
                                width={20} 
                                height={20} 
                                alt="Contact Us" />
                        </ListItemIcon>
                        <ListItemText>
                            Contact Us
                        </ListItemText>
                    </ListItem>
                </Link>
            </List>
        </Drawer>
    )
}