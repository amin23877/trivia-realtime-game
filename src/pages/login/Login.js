import React, { useEffect, useState } from "react";
import { SET_SPINNER } from "redux/actions/mainActions/generalActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Logo from "common/components/UI/Logo";

import ApiCall from "common/services/ApiCall";

import "./Login.scss";

import imgMain from "assets/images/pics/login-login.svg";

const Login = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const apiCall = new ApiCall();

	const [phone, setPhone] = useState("");
	const [error, setError] = useState(false);

	const handleChangePhone = ({ target: { value } }) => {
		setPhone(value);

		if (isValidPhone(value)) setError(false);
	};

	const isValidPhone = (value) => {
		const phoneRegex = /^0\d{10}$/;

		return value.match(phoneRegex) && value.length >= 10;
	};

	const handleGetOtp = (e) => {
		e.preventDefault();

		localStorage.setItem("phone", phone);

		if (phone && isValidPhone(phone)) {
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
			setError(true);
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
					<p>Log in</p>
					<img className="login-body__image" src={imgMain} alt="" />
				</div>

				<form onSubmit={handleGetOtp} noValidate autoComplete="off" className="login-form">
					<label htmlFor="phone-number" className="login-form__label">
						Phone Number
					</label>

					<input
						id="phone-number"
						className={`login-form__input ${error ? "login-form__input_error" : ""}`}
						autoFocus={true}
						type="tel"
						placeholder="Enter your phone number"
						maxLength={11}
						onChange={(e) => handleChangePhone(e)}
					/>

					<p className="login-form__error-message">{error && "Please enter a valid phone number"}</p>

					<button type="submit" className="login-form__submit">
						Login
					</button>
				</form>
			</div>
		</div>
	);
};
export default Login;
