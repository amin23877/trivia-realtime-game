import { useState } from "react";
import "./WaitForStart.scss";
import explosion from "assets/images/icons/explosion.svg";
import { IMAGE_URL } from "common/values/CORE";
import Lottie from "react-lottie";
import * as animationData from "assets/gif/loading.json";
import * as confettinData from "assets/gif/waitingConfetti2.json";
import bgsvg from "assets/images/backgrounds/singleGameBg.svg";
import Text from "common/components/UI/text/Text";
const WaitForStart = ({ doubleGameReady }) => {
	console.log("doubleGameReady", doubleGameReady);
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};
	const confettiOptions = {
		loop: true,
		autoplay: true,
		animationData: confettinData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};
	return (
		<div className="wait-for-start-single w-100 h-100">
			<Lottie
				options={confettiOptions}
				height={"50%"}
				width={"50%"}
				style={{
					position: "absolute",
					left: "50%",
					top: "50%",
					transform: "translate(-50% , -50%)",
					zIndex: 0,
				}}
			/>
			<img src={bgsvg} />
			<div className="wait-for-start-single__title">
				<p>
					<Text as="span" ns="wait-to-start" />
					<Lottie
						options={defaultOptions}
						height={11}
						width={214}
						style={{ display: "inline-block", width: 47, marginLeft: 10, overflow: "visible" }}
					/>
				</p>
			</div>
		</div>
	);
};

export default WaitForStart;
