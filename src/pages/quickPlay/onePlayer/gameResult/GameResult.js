import { useEffect, useState } from "react";
import "./GameResult.scss";
import { Button } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import userIcon from "assets/images/icons/footer-profile.svg";
import bgSvg from "assets/images/backgrounds/resultBg.svg";

import { useNavigate } from "react-router-dom";
import { IMAGE_URL } from "common/values/CORE";
import Lottie from "react-lottie";
import * as animationData from "assets/gif/resultConfetti.json";
import Text from "common/components/UI/text/Text";
const GameResult = ({ myInfo, authData, gameResultData, handlePlayAgain, handleNewCat, handleShowAnswers }) => {
	const navigate = useNavigate();
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};
	return (
		<div className="game-result w-100 h-100">
			<Lottie
				options={defaultOptions}
				height={"100%"}
				onClick={() => console.log("ok!")}
				width={"100%"}
				style={{ position: "absolute", zIndex: 0, top: 0, left: 0 }}
				isStopped={false}
				isPaused={false}
			/>
			<div className="game-result__avatar game-result__avatar-center mt-38px mb-56px">
				<div className={`game-result__avatar--image flex-center`}>
					<div className={`game-result__avatar--image--inner game-result__avatar--image--winner-ring`}>
						<img src={IMAGE_URL + authData.avatar} />
					</div>
					<p className={`game-result__avatar--image--name`}>{gameResultData?.message}</p>
				</div>
			</div>
			<div className={`game-result__score-board`}>
				<div className={`game-result__score-board--table`}>
					<div className={`game-result__score-board--table--tr p-0-35px`}>
						<Text ns="total-score" />
						<p>{gameResultData && gameResultData.score}</p>
					</div>
					<div className={`game-result__score-board--table--tr p-0-35px`}>
						<Text ns="correct-answer" />
						<p>{gameResultData && gameResultData.score}</p>
					</div>
				</div>
			</div>
			<div className="game-result__level-bar mb-24px">
				<div style={{ width: 7 * 10 + "%" }} className="game-result__level-bar--inner">
					<p>
						<Text as="span" ns="level" /> {7}
					</p>
				</div>
			</div>
			<Button className="game-result__play-again" onClick={handlePlayAgain}>
				<Text ns="play-again" />
			</Button>
			<Button className="game-result__new-opponent" onClick={handleNewCat}>
				<Text as="span" ns="new-cat" />
			</Button>
			<Button className="game-result__view-answer" onClick={handleShowAnswers}>
				<Text as="span" ns="view-answers" />
			</Button>
			<Button onClick={() => navigate("/")} className="game-result__back-to-home">
				<ArrowBackIcon />
				<Text as="span" ns="back-to-home" />
			</Button>
		</div>
	);
};

export default GameResult;
