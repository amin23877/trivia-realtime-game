// Reacts
import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";
// Hooks
import { useNavigate } from "react-router-dom";
// Packages
// Components, Services, Functions
import ApiCall from "common/services/ApiCall";
import CountDownTimerSecond from "common/components/countdownTimer/CountDownTimerSecond"; // FIX
// Redux
import { useDispatch } from "react-redux";
import { SET_SPINNER } from "redux/actions/mainActions/generalActions";
import { SET_USER_INFO } from "redux/actions/mainActions/generalActions";
// Material - lab
import { TextField } from "@material-ui/core";
// Styles, Icons, Images
import "./Login.scss";
import imgMain from "assets/images/pics/login-otp.svg";
import arrowBack from "assets/images/icons/arrow-back.svg";
import Logo from "common/components/UI/Logo";

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

	const messageErrorDefault = "The code entered is incorrect";
	const [messageError, setMessageError] = useState(messageErrorDefault);
	const [hasTime, setHasTime] = useState(false);

	const handlSetOtp = (e) => {
		if (!isValidOtp && e.target.value.length) {
			setIsValidOtp(true);
			setMessageError(messageErrorDefault);
		}
		setOtp(e.target.value);
	};

	const handleEnterKeyOtp = (e) => {
		if (e.code === "Enter" || e.code === "NumpadEnter") {
			e.preventDefault();
			handleRegister();
		}
	};

	const handleRegister = () => {
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
					dispatch(SET_USER_INFO(res.data.user));
					navigate("/");
				})
				.catch((err) => {
					dispatch(SET_SPINNER(false));
					localStorage.removeItem("token");
					setIsValidOtp(false);
					if (err.error) {
						setMessageError(err.error);
					} else {
						setMessageError(messageErrorDefault);
					}
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
				<p className="login-body__title">Enter Auth Code</p>

				<div className="text-center mt-3">
					<img src={imgMain} alt="" />
				</div>

				<form noValidate autoComplete="off" className="_dish-textField">
					<div className="">
						<p className="label">{`Confirmation code sent to ${phone}`}</p>
						<TextField
							autoFocus={true}
							type="tel"
							placeholder="Enter your phone number"
							className=""
							helperText={!isValidOtp ? messageError : ""}
							variant="outlined"
							inputProps={{ maxLength: 4 }}
							error={!isValidOtp}
							onChange={(e) => handlSetOtp(e)}
							onKeyPress={(e) => handleEnterKeyOtp(e)}
						/>
					</div>
				</form>

				<button className="login-body__submit" onClick={handleRegister}>
					Continue
				</button>

				{hasTime ? (
					<p className="timer timer-resend" onClick={handleReGetOtp}>
						Resend verification code
					</p>
				) : (
					<div className="timer">
						<p className="timer">Resend verification code until another</p>
						<Countdown
							date={Date.now() + timeRemain * 1000}
							renderer={CountDownTimerSecond}
							onComplete={(e) => handleStopTimer(e)}
						/>
					</div>
				)}
			</div>
		</div>
	);
};
export default VerificationCode;
