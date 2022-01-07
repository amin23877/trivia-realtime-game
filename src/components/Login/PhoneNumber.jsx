import React, { useEffect, useState } from 'react';
import {
  Container,
  Typography,
  Paper,
  Button,
  TextField,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import Image from '../../app/ImageIcon';
import Logo from '../../assets/Login/HeaderBuleLogo.png';
import LoginBackground from '../../assets/Login/login-background.png';
import PhoneNumberBackground from '../../assets/Login/phonenumber-background.png';

import { useMediaQuery } from 'react-responsive';
import ApiCall from 'common/services/ApiCall';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '2rem',
    textAlign: 'center',
    height: '90vh',
    boxSizing: 'border-box',
    margin: '0',
    marginTop: '2rem',
  },
  input: {
    width: '100%',
    marginTop: '1.2rem',
    boxShadow: '-1px 0px 6px 0px #cfcfcf',
  },
  Button: {
    width: '100%',
    marginTop: '1.5rem',
    paddingTop: '.6rem',
    paddingBottom: '.6rem',
    fontSize: '1.1rem',
    backgroundColor: '#6D6BE6',
  },
  error: {
    marginTop: '.9rem',
    color: 'red',
  },
}));

export const PhoneNumber = (props) => {
  const classes = useStyles();

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const isTablet = useMediaQuery({ query: '(max-width: 992px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 992px)' });

  const [state, setState] = useState({
    phoneNumberIsValid: true,
    formData: {},
    errors: {},
  });

  const phoneNumberChangeHandler = (event) => {
    const inputValue = { [event.target.name]: event.target.value };
    setState({ ...state, formData: { ...state.formData, ...inputValue } });
    console.log(state);
  };

  const submitPhoneNumberHandler = (event) => {
    event.preventDefault();
    if (formIsValid()) {
      props.submitPhoneNumber(state);
    }
  };

  const formIsValid = () => {
    const errors = {};
    if (
      !state.formData.phone_number ||
      isNaN(state.formData.phone_number) ||
      state.formData.phone_number.length != 10
    ) {
      errors.phone_number = 'Please Enter a valid Phone number';
    }

    setState({ ...state, errors });
    return !errors.phone_number;
  };

  const apiCall = new ApiCall();

  const handleGetOtp = () => {
    apiCall
      .post(
        'user/register',
        JSON.stringify({ phone: state.formData.phone_number })
      )
      .then((output) => {
        let res = output.res;
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      //   getOtp();
    }
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
      }}
    >
      {isDesktop && (
        <div style={{ width: '150px' }}>
          <Image src={PhoneNumberBackground} width='100%' alt='background' />
        </div>
      )}
      <Container
        style={{
          width: isMobile ? '80%' : isTablet ? '70%' : '35%',
          border: isDesktop ? '1px solid #e3dddd' : '0',
          borderRadius: '9px',
        }}
        className={classes.container}
      >
        <div style={{ display: 'inline-block', marginBottom: '0rem' }}>
          <Image src={Logo} width='120' height='50' alt='logo' />
        </div>
        <Typography style={{ textAlign: 'left' }} variant='h6'>
          Log in
        </Typography>
        <div style={{ marginTop: '2rem' }}>
          <Image
            src={LoginBackground}
            width='120'
            height='120'
            alt='background'
          />
        </div>
        <div
          style={{
            marginTop: isDesktop ? '1.4rem' : '5rem',
            textAlign: 'left',
          }}
        >
          <Typography variant='h6'>Phone number</Typography>
          <form onSubmit={submitPhoneNumberHandler}>
            <TextField
              className={classes.input}
              label='Please Enter Your Phone number'
              variant='outlined'
              name='phone_number'
              type='text'
              value={state.formData.phone_number || ''}
              onChange={phoneNumberChangeHandler}
            />
            <div className={classes.error}>
              <Typography variant='subtitle1'>
                {state.errors.phone_number}
              </Typography>
            </div>
            <Button
              className={classes.Button}
              variant='contained'
              color='primary'
              type='submit'
              onClick={handleGetOtp}
            >
              Log in
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
};
