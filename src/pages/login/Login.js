import React, { useEffect, useState } from "react";
import { SET_SPINNER } from "redux/actions/mainActions/generalActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Logo from "common/components/UI/Logo";

import { TextField } from "@material-ui/core";

import ApiCall from "common/services/ApiCall";

import "./Login.scss";

import imgMain from "assets/images/pics/login-login.svg";

const Login = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const apiCall = new ApiCall();

	const [phone, setPhone] = useState("");
	const [isValidPhone, setIsValidPhone] = useState(false);
	const [messageError, setMessageError] = useState("Please enter a valid phone number");

	const handleEnterKeyMobile = (e) => {
		if (e.code === "Enter" || e.code === "NumpadEnter") {
			e.preventDefault();
			if (isValidPhone) {
				handleGetOtp();
			}
		}
	};

	const handleChangePhone = (e) => {
		setPhone(e.target.value);

		const phoneno = /^0\d{10}$/;
		// if (phone.match(phoneno) && e.target.value.length >= 10) {
		if (e.target.value.length >= 10) {
			setIsValidPhone(true);
		} else {
			setIsValidPhone(false);
		}
	};

	const handleGetOtp = () => {
		localStorage.setItem("phone", phone);

		if (phone && isValidPhone) {
			dispatch(SET_SPINNER(true));
			apiCall
				.post("user/register", { phone })
				.then((res) => {
					dispatch(SET_SPINNER(false));
					navigate("/otp");
				})
				.catch((err) => {
					dispatch(SET_SPINNER(false));
					// navigate("/login");
				});
		} else {
			// TODO
		}
	};

	useEffect(() => {
		let isMounted = true;
		if (isMounted) {
			// localStorage.clear();
			// sessionStorage.clear();
			localStorage.removeItem("token");
		}
		return () => {
			isMounted = false;
		};
	}, []);

	return (
		<div className="fadeInFast d-flex flex-column align-items-center login">
			<Logo />

			<div className="login-body">
				<div className="login-body__title">
					<p className="title">Log in</p>
					<img className="login-body__image" src={imgMain} alt="" />
				</div>

				<form noValidate autoComplete="off" className="_dish-textField">
					<div className="">
						<p className="label">Phone Number</p>
						<TextField
							autoFocus={true}
							type="tel"
							placeholder="Enter your phone number"
							helperText={phone.length > 10 && !isValidPhone ? messageError : ""}
							variant="outlined"
							inputProps={{ maxLength: 11 }}
							// value={phone}
							error={phone !== "" && !isValidPhone}
							onChange={(e) => handleChangePhone(e)}
							onKeyPress={(e) => handleEnterKeyMobile(e)}
						/>
					</div>
				</form>

				<button className="login-body__submit" disabled={!isValidPhone} onClick={handleGetOtp}>
					Login
				</button>
			</div>
		</div>
	);
};
export default Login;
