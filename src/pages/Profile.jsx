import { Grid, Card, CardMedia, CardContent, Typography, Avatar, IconButton, makeStyles } from "@material-ui/core";

import Image from '../app/ImageIcon';

import ProfileBackground from '../assets/Profile/profile-background.png';
import UserProfile from '../assets/Profile/user-profile.svg';
import EditIcon from '../assets/Profile/edit-icon.svg';
import { useMediaQuery } from "react-responsive";



const useStyles = makeStyles((theme) =>({

    typography8:{
        fontSize:'.8rem',
        color: '#444'
    },
    typography1:{
        fontSize:'1rem',
    },
}))


export const UserPorfile = () =>{


    const classes = useStyles();

    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const isTablet = useMediaQuery({ query: '(max-width: 992px)' });
    const isDesktop = useMediaQuery({ query: '(min-width: 992px)' });

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
            </Grid>
        </>
    )
}