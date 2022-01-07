import { PhoneNumber } from "./PhoneNumber";
import { ConfirmCode } from "./ConfirmCode";
import { useState } from "react";


export const Login = () =>{

    const [ state , setState ] = useState({
        phoneNumberIsValid : false,
    })

    const submitPhoneNumber = (phoneNumber) =>{
        setState({
            phoneNumberIsValid : phoneNumber.phoneNumberIsValid
        })
    }
    return (
        <div>
            {
                state.phoneNumberIsValid ? <ConfirmCode /> : <PhoneNumber submitPhoneNumber ={submitPhoneNumber}/>
            }
        </div>
    )
}