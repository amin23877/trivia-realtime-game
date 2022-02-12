// Reacts
import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";
// Hooks
import { useNavigate } from "react-router-dom";
// Components, Services, Functions
import Logo from "common/components/UI/Logo";
import ApiCall from "common/services/ApiCall";
import CountDownTimerSecond from "common/components/countdownTimer/CountDownTimerSecond";
// Redux
import { useDispatch } from "react-redux";
import { SET_SPINNER } from "redux/actions/mainActions/generalActions";
// Styles, Icons, Images
import "./Login.scss";
import imgMain from "assets/images/pics/login-otp.svg";
import arrowBack from "assets/images/icons/arrow-back.svg";

const VerificationCode = () => {
	const timeRemain = 90;
	const handleStopTimer = (e) => {
		// console.log(e);
		setHasTime(true);
	};

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const apiCall = new ApiCall();

	let phone = localStorage.getItem("phone");

	const [otp, setOtp] = useState("");
	const [isValidOtp, setIsValidOtp] = useState(true);

	const [hasTime, setHasTime] = useState(false);

	const handleSetOtp = (e) => {
		if (!isValidOtp && e.target.value.length) {
			setIsValidOtp(true);
		}
		setOtp(e.target.value);
	};

	const handleRegister = (e) => {
		e.preventDefault();

		if (phone && otp) {
			dispatch(SET_SPINNER(true));

			apiCall
				.post("user/code", {
					phone: phone,
					code: otp,
				})
				.then((res) => {
					dispatch(SET_SPINNER(false));

					res.data.token
						? localStorage.setItem("token", `Bearer ${res.data.token}`)
						: localStorage.removeItem("token");

					navigate("/");
				})
				.catch(() => {
					dispatch(SET_SPINNER(false));

					localStorage.removeItem("token");

					setIsValidOtp(false);
				});
		} else if (!phone) {
			navigate("/login");
		} else if (!otp) {
			setIsValidOtp(false);
		}
	};

	const handleReGetOtp = () => {
		setHasTime(false);
		localStorage.setItem("phone", phone);

		if (phone) {
			dispatch(SET_SPINNER(true));

			apiCall
				.post("user/register", { phone })
				.then((res) => {
					dispatch(SET_SPINNER(false));
					// TODO
				})
				.catch((err) => {
					dispatch(SET_SPINNER(false));
				});
		} else {
			navigate("/login");
		}
	};

	useEffect(() => {
		let isMounted = true;
		if (isMounted) {
			if (!phone) {
				navigate("/login");
			}
		}
		return () => {
			isMounted = false;
		};
	}, []);

	return (
		<div className="fadeInFast d-flex flex-column align-items-center login">
			<div className="login-header">
				<Logo />

				<div className="login-header__back-btn">
					<img src={arrowBack} onClick={() => navigate("/login")} alt="" />
				</div>
			</div>

			<div className="login-body">
				<p className="login-body__title">Enter the verification code</p>

				<div className="text-center mt-3">
					<img src={imgMain} alt="" />
				</div>

				<form onSubmit={handleRegister} noValidate autoComplete="off" className="login-form">
					<label htmlFor="validate-number" className="login-form__label login-form__label_small">
						{`Confirmation code sent to ${phone}`}
					</label>

					<input
						id="validate-number"
						className={`login-form__input ${!isValidOtp && "login-form__input_error"}`}
						autoFocus={true}
						type="tel"
						maxLength={4}
						onChange={handleSetOtp}
					/>

					<p className="login-form__error-message">{!isValidOtp && "The code entered is incorrect"}</p>

					<button type="submit" className="login-form__submit">
						Continue
					</button>
				</form>

				{hasTime ? (
					<p className="timer timer-resend" onClick={handleReGetOtp}>
						Resend verification code
					</p>
				) : (
					<div className="timer">
						<p className="timer">Resend verification code until another</p>
						<div className="timer-tag text-center">
							<Countdown
								date={Date.now() + timeRemain * 1000}
								renderer={CountDownTimerSecond}
								onComplete={(e) => handleStopTimer(e)}
							/>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};
export default VerificationCode;
