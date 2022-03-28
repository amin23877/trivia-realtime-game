import React, { useEffect, useState } from "react";
import { SET_SPINNER } from "redux/actions/mainActions/generalActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Logo from "common/components/UI/Logo";

import ApiCall from "common/services/ApiCall";

import "./Login.scss";

import imgMain from "assets/images/pics/login.svg";
import Text from "common/components/UI/text/Text";
import { useTranslation } from "react-i18next";
import FilledButton from "common/components/UI/button/FilledButton";

const Login = () => {
	const { t } = useTranslation();
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
				.then(() => {
					dispatch(SET_SPINNER(false));
					navigate("/otp");
				})
				.catch(() => {
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
					<Text ns="login" />
					<img className="login-body__image" src={imgMain} alt="" />
				</div>

				<form onSubmit={handleGetOtp} noValidate autoComplete="off" className="login-form">
					<Text ns="phone-number" htmlFor="phone-number" className="login-form__label" />

					<input
						id="phone-number"
						className={`login-form__input ${error ? "login-form__input_error" : ""}`}
						autoFocus={true}
						type="tel"
						placeholder={t("phone-number-placeholder")}
						maxLength={11}
						onChange={handleChangePhone}
					/>

					<p className="login-form__error-message">{error && "Please enter a valid phone number"}</p>

					<FilledButton as="button" ns="login" type="submit" className="login-form__submit" />
				</form>
			</div>
		</div>
	);
};
export default Login;
