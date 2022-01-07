import { PhoneNumber } from './PhoneNumber';
import { ConfirmCode } from './ConfirmCode';
import { useEffect, useState } from 'react';

export const Login = () => {
  const [state, setState] = useState({
    phoneNumberIsValid: false,
  });

  const submitPhoneNumber = (phoneNumber) => {
    setState({
      phoneNumberIsValid: phoneNumber.phoneNumberIsValid,
    });
  };

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      localStorage.clear();
    }
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      <PhoneNumber submitPhoneNumber={submitPhoneNumber} />
      {/* {state.phoneNumberIsValid ? (
        <ConfirmCode />
      ) : (
        <PhoneNumber submitPhoneNumber={submitPhoneNumber} />
      )} */}
    </div>
  );
};
