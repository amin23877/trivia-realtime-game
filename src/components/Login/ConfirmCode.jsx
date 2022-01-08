import {
  Container,
  Typography,
  Paper,
  Button,
  TextField,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Link, useNavigate } from 'react-router-dom';
import Image from '../../app/ImageIcon';
import Logo from '../../assets/Login/HeaderBuleLogo.png';
import LoginBackground from '../../assets/Login/login-background.png';
import GoBackButton from '../../assets/Login/go-back-button.png';
import PhoneNumberBackground from '../../assets/Login/confirmcode-background.png';

import { useMediaQuery } from 'react-responsive';
import { useCountDown } from '../../app/useCountDown';
import ApiCall from 'common/services/ApiCall';
import { useState } from 'react';

// import {useCountDown} from '../../app';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '2rem',
    textAlign: 'center',
    boxSizing: 'border-box',
    margin: '0',
    marginTop: '5rem',
    position: 'relative',
  },
  input: {
    width: '100%',
    marginTop: '1.2rem',
    boxShadow: '-1px 0px 6px 0px #cfcfcf',
  },
  Button: {
    width: '100%',
    marginTop: '1rem',
    paddingTop: '.4rem',
    paddingBottom: '.4rem',
    fontSize: '1.1rem',
    backgroundColor: '#6D6BE6',
  },
  error: {
    marginTop: '.9rem',
    color: 'red',
  },
  typography: {
    fontSize: '1rem',
    color: '#222',
  },
}));

export const ConfirmCode = () => {
  const classes = useStyles();

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const isTablet = useMediaQuery({ query: '(max-width: 992px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 992px)' });

  // count dwon
  const endTime = new Date().getTime() + 60000 * 2; // 2 minutes
  const [timeLeft, setEndTime] = useCountDown(endTime);

  const minutes = Math.floor(timeLeft / 60000) % 60;
  const seconds = Math.floor(timeLeft / 1000) % 60;

  const countDown = () => {
    if (minutes > 0 || seconds > 0) {
      return (
        <>
          Resent verification code until another
          <span style={{ paddingRight: '.3rem' }}>{`${minutes}:${
            seconds < 10 ? '0' + seconds : seconds
          }`}</span>
        </>
      );
    } else {
      return (
        <>
          <span>Resend veryfiction ?</span>
        </>
      );
    }
  };
  // end count down

  const navigate = useNavigate();
  const apiCall = new ApiCall();

  const [otp, setOtp] = useState();

  const handlSetOtp = (e) => {
    setOtp(e.target.value);
  };

  const handleRegister = () => {
    let phone = localStorage.getItem('phone');
    if (phone) {
      apiCall
        .post(
          'user/code',
          JSON.stringify({
            phone: phone,
            code: otp,
          })
        )
        .then((output) => {
          let res = output.res;

          res.token
            ? localStorage.setItem('token', res.token)
            : localStorage.removeItem('token');

          console.log(res);
          navigate('/');
        })
        .catch((err) => {
          console.log(err);
          localStorage.removeItem('token');
        });
    } else {
      navigate('/login');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Container
        style={{
          width: isMobile ? '80%' : isTablet ? '70%' : '30%',
          border: isDesktop ? '1px solid #e3dddd' : '0',
          borderRadius: '9px',
          height: isDesktop ? '86vh' : '85vh',
        }}
        className={classes.container}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '1.3rem',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          <div style={{ position: 'absolute', top: '.5rem', left: '0' }}>
            <Image src={GoBackButton} width='30' height='30' alt='go back' />
          </div>
          <div>
            <Image src={Logo} width='110' height='40' alt='logo' />
          </div>
        </div>
        <Typography style={{ textAlign: 'left' }} variant='h6'>
          Enter Auth Code
        </Typography>
        <div style={{ marginTop: '1.4rem' }}>
          <Image
            src={LoginBackground}
            width='100'
            height='100'
            alt='background'
          />
        </div>
        <div style={{ marginTop: '1.4rem', textAlign: 'left' }}>
          <Typography className={classes.typography} variant='h6'>
            Confirmation code sent to
            <span style={{ color: '#6D6BE6', marginLeft: '.3rem' }}>
              +98914 123 4567
            </span>
          </Typography>
          <TextField
            className={classes.input}
            label='Please Enter Your Phone number'
            variant='outlined'
            // value={otp}
            onKeyUp={handlSetOtp}
          />
          <div className={classes.error}>
            <Typography variant='subtitle1'>
              The code Enterd is inCorrect{' '}
            </Typography>
          </div>
          <Button
            className={classes.Button}
            variant='contained'
            color='primary'
            onClick={handleRegister}
          >
            Continue
          </Button>
          <div className={classes.error}>
            <Typography variant='subtitle1'>{countDown()}</Typography>
          </div>
        </div>
        {isDesktop && (
          <div
            style={{
              width: '130px',
              position: 'absolute',
              top: '-76px',
              right: '-42px',
            }}
          >
            <Image src={PhoneNumberBackground} width='100%' alt='background' />
          </div>
        )}
      </Container>
    </div>
  );
};
