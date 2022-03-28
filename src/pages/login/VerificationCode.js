// Reacts
import React, { memo, useEffect, useState } from "react";
import Countdown from "react-countdown";
// Hooks
import { useNavigate } from "react-router-dom";
// Components, Services, Functions
import Logo from "common/components/UI/Logo";
import ApiCall from "common/services/ApiCall";
// Redux
import { useDispatch } from "react-redux";
import { SET_SPINNER } from "redux/actions/mainActions/generalActions";
// Styles, Icons, Images
import "./Login.scss";
import imgMain from "assets/images/pics/login-otp.svg";
import Text from "common/components/UI/text/Text";
import FilledButton from "common/components/UI/button/FilledButton";

/* memoize countdown for prevent reset timer when input filled */
const RemainTimeCountdown = memo(({ setHasTime }) => {
	const timeRemain = 90;
	const handleStopTimer = (e) => {
		// console.log(e);
		setHasTime(true);
	};

	return (
		<Countdown
			date={Date.now() + timeRemain * 1000}
			renderer={({ minutes, seconds }) => (
				<>
					<span>{minutes}</span>:<span>{seconds}</span>
				</>
			)}
			onComplete={(e) => handleStopTimer(e)}
		/>
	);
});

const VerificationCode = () => {
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

				<div className="login-header__back-btn" onClick={() => navigate("/login")} />
			</div>

			<div className="login-body">
				<Text ns="verify-header" className="login-body__title" />

				<div className="text-center mt-3">
					<img src={imgMain} alt="" />
				</div>

				<form onSubmit={handleRegister} noValidate autoComplete="off" className="login-form">
					<Text
						as="label"
						ns="code-sent"
						params={{ phone }}
						htmlFor="validate-number"
						className="login-form__label login-form__label_small"
					/>

					<input
						id="validate-number"
						className={`login-form__input ${!isValidOtp && "login-form__input_error"}`}
						autoFocus={true}
						type="tel"
						maxLength={4}
						onChange={handleSetOtp}
					/>

					<p className="login-form__error-message">{!isValidOtp && "The code entered is incorrect"}</p>

					<FilledButton as="button" ns="continue" type="submit" className="login-form__submit" />
				</form>

				<div className="mt-3">
					{hasTime ? (
						<Text ns="resend" className="timer timer-resend" onClick={handleReGetOtp} />
					) : (
						<div className="timer">
							<Text ns="resend-time" className="timer" />
							<div className="timer-tag text-center">
								<RemainTimeCountdown setHasTime={setHasTime} />
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
export default VerificationCode;
