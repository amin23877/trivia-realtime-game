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
        fontSize: '.9rem',
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
            <Link to="/profile">
                <ListItem className={classes.li} >
                    <ListItemIcon>
                        <Image src={UserProfileIcon} width="35" height="40" alt="icon"/>
                    </ListItemIcon>
                    <ListItemText>
                        <Typography className={classes.liSpan}>Amir Basiri</Typography>
                        <Typography className={classes.userPhoneNumber} component="span">+98 914 123 4567</Typography>
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
                    <ListItem button className={classes.li}>
                        <ListItemIcon>
                            <Image 
                                src={HomeIcon} 
                                width={20} 
                                height={20} 
                                alt="Home" />
                        </ListItemIcon>
                        <ListItemText >
                            <Typography button className={classes.liSpan}>
                                Home
                            </Typography>
                        </ListItemText>
                    </ListItem>
                </Link>
                <Link to="/league" className={classes.link} >
                    <ListItem button className={classes.li}> 
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
                <Link to="/profile" className={classes.link} >
                    <ListItem button className={classes.li}>
                        <ListItemIcon>
                            <Image 
                                src={ProfileIcon} 
                                width={20} 
                                height={20} 
                                alt="Profile" />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography className={classes.liSpan}>
                                Profile
                            </Typography>
                        </ListItemText>
                    </ListItem>
                </Link>
                <Link to="/friends" className={classes.link} >
                    <ListItem button className={classes.li}>
                        <ListItemIcon>
                            <Image 
                                src={FriendsIcon} 
                                width={20} 
                                height={20} 
                                alt="Friends" />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography className={classes.liSpan}>
                                Friends
                            </Typography>
                        </ListItemText>
                    </ListItem>
                </Link>
                <Link to="/wallet" className={classes.link} >
                    <ListItem button className={classes.li}>
                        <ListItemIcon>
                            <Image 
                                src={WalletIcon} 
                                width={20} 
                                height={20} 
                                alt="Wallet" />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography className={classes.liSpan}>
                                Wallet
                            </Typography>
                        </ListItemText>
                    </ListItem>
                </Link>
                <Link to="/contact-us" className={classes.link} >
                    <ListItem button className={classes.li}>
                        <ListItemIcon>
                            <Image 
                                src={SettingsIcon} 
                                width={20} 
                                height={20} 
                                alt="Contact Us" />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography className={classes.liSpan}>
                                Contact Us
                            </Typography>
                        </ListItemText>
                    </ListItem>
                </Link>
            </List>
        </Drawer>
    )
}