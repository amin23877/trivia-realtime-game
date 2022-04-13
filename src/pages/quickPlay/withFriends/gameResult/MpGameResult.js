import "./MpGameResult.scss";
import { Button } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import kingImage from "assets/images/icons/king.svg";

import { useNavigate } from "react-router-dom";
import { IMAGE_URL } from "common/values/CORE";
import * as animationData from "assets/gif/resultConfetti.json";
import Lottie from "react-lottie";
import Text from "common/components/UI/text/Text";

const defaultOptions = {
	loop: true,
	autoplay: true,
	animationData: animationData,
	rendererSettings: {
		preserveAspectRatio: "xMidYMid slice",
	},
};

const MpGameResult = ({ myInfo, gameResultData, authData, handleStartGame, joinCode, mpGamesId, type }) => {
	const navigate = useNavigate();

	return (
		<div className="mp-game-result w-100 h-100">
			<Lottie
				options={defaultOptions}
				height={"100%"}
				onClick={() => console.log("ok!")}
				width={"100%"}
				style={{ position: "absolute", zIndex: 0, top: 0, left: 0 }}
				isStopped={false}
				isPaused={false}
			/>
			<div className="mp-game-result__avatar mp-game-result__avatar-center mt-38px mb-56px">
				<div className={`mp-game-result__avatar--image flex-center`}>
					<img className={`game-result__avatar--image--king`} src={kingImage} alt="" />

					<div className={`mp-game-result__avatar--image--inner game-result__avatar--image--winner-ring`}>
						<img src={IMAGE_URL + gameResultData?.scores[0].avatar} alt="" />
					</div>
					<p className={`mp-game-result__avatar--image--name`}>{gameResultData?.scores[0].username}</p>
				</div>
			</div>
			<div className={`mp-game-result__score-board`}>
				<div className={`mp-game-result__score-board--table`}>
					<div className={`mp-game-result__score-board--table--tr `}>
						<div></div>
						<Text ns="correct-answer" />
						<Text ns="score" />
					</div>
					{gameResultData?.scores.map((score, index) => (
						<div
							className={`mp-game-result__score-board--table--tr p-r-25px ${
								score.username === authData.username ? "bg-gray" : ""
							}`}
						>
							<div>
								<p>{index + 1}.</p>
								<p>
									<img src={IMAGE_URL + score.avatar} alt="" />
								</p>
								<p>{score.username}</p>
							</div>
							<p>{score.score}</p>
							<p>{score.score}</p>
						</div>
					))}
				</div>
			</div>
			<div className="mp-game-result__actions">
				<Button
					onClick={handleStartGame}
					className={`mp-game-result__actions--play-again ${
						(type === "quickPlay" ? mpGamesId.categoryGameId : mpGamesId.topicGameId) !== joinCode
							? "mp-game-result__actions--disabled"
							: ""
					}`}
				>
					<Text ns="start-again" as="span" />
				</Button>
				<Button onClick={() => navigate("/")} className="mp-game-result__actions--back-home">
					<ArrowBackIcon />
					<Text ns="back-to-home" as="span" />
				</Button>
			</div>
		</div>
	);
};

export default MpGameResult;
