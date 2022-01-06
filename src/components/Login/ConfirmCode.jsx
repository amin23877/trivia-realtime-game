import { Container, Typography, Paper, Button, TextField  } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import Image from '../../app/ImageIcon';    
import Logo from '../../assets/Login/HeaderBuleLogo.png';
import LoginBackground from '../../assets/Login/login-background.png';
import GoBackButton from '../../assets/Login/go-back-button.png';
import PhoneNumberBackground from '../../assets/Login/confirmcode-background.png';

import { useMediaQuery } from 'react-responsive'



const useStyles = makeStyles((theme) =>({
    
    container : {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '2rem',
        textAlign:'center',
        boxSizing : 'border-box',
        margin: '0',
        marginTop:'5rem',
        position: 'relative',
    },
    input : {
        width: '100%',
        marginTop: '1.2rem',
        boxShadow : '-1px 0px 6px 0px #cfcfcf',
    },
    Button : {
        width: '100%',
        marginTop: '1rem',
        paddingTop: '.4rem',
        paddingBottom: '.4rem',
        fontSize: '1.1rem',
        backgroundColor: '#6D6BE6',
    },
    error : {
        marginTop: '.9rem',
        color: 'red'
    }
}));

export const ConfirmCode = () =>{

    const classes = useStyles();

    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const isTablet = useMediaQuery({ query: '(max-width: 992px)' });
    const isDesktop = useMediaQuery({ query: '(min-width: 992px)' });

    

    return(
        <div style={{display:'flex', justifyContent: 'center'}}>
            
                <Container 
                    style={{ 
                        width: isMobile ? '80%' : isTablet ? '70%' : '30%' , 
                        border: isDesktop ? '1px solid #e3dddd': '0' , 
                        borderRadius:'9px',
                        height: isDesktop ? '83vh' : '85vh',  
                    }} 
                    className={classes.container} 
                >    
                    <div 
                        style={{ 
                            display: 'flex', 
                            justifyContent:'center', 
                            marginBottom:'1.3rem',
                            alignItems: 'center',
                            position: 'relative',
                        }}>
                    <div style={{position : 'absolute' , top:'.5rem', left:'0'}}>
                        <Image src={GoBackButton} width="30" height="30" alt="go back"/>
                    </div>
                    <div>
                        <Image src={Logo} width="110" height="40" alt="logo"/>
                    </div>
                </div>
                <Typography style={{textAlign : 'left'}} variant="h6">
                    Enter Auth Code
                </Typography>
                <div style={{marginTop: '1.4rem'}}>
                    <Image src={LoginBackground} width="100" height="100" alt="background"/>
                </div>
                <div style={{marginTop: '1.4rem' , textAlign: 'left'}}>
                    <Typography variant="p">Confirmation code sent to +98914 123 4567</Typography>
                    <TextField 
                        className={classes.input} 
                        label="Please Enter Your Phone number" 
                        variant="outlined"
                    />
                    <div className={classes.error}>
                        <Typography  variant="span">The code Enterd is inCorrect </Typography>
                    </div>
                    <Button
                        className={classes.Button}  
                        variant="contained" 
                        color="primary"
                    >
                        Continue
                    </Button>
                    <div className={classes.error}>
                        <Typography  variant="span">Resent verification code until another 01:30</Typography>
                    </div>
                </div>
                {
                isDesktop && 
                    <div style={{width: "130px" , position: 'absolute', top: '-76px', right:'-42px'}}>
                        <Image src={PhoneNumberBackground} width="100%" alt="background"/>
                    </div>
                }
            </Container>
        </div>
    )
}