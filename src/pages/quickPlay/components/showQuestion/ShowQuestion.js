import { useState, useEffect } from "react";
import "./ShowQuestion.scss";
import redTime from "assets/images/icons/Red-time.svg";
import yellowTime from "assets/images/icons/Yellow-time.svg";
import greenTime from "assets/images/icons/Green-time.svg";

import { IMAGE_URL } from "common/values/CORE";
import { Button } from "@material-ui/core";
import Text from "common/components/UI/text/Text";

const ShowQuestion = ({
	doubleGameQuestion,
	handleSelectOption,
	doubleGameReady,
	myInfo,
	rivalInfo,
	time,
	setTime,
	questionNumber,
	setQuestionNumber,
	correctAnswer,
	rivalAnswer,
	myOption,
	single,
	singleGameQuestion,
	authData,
	withFriends,
}) => {
	const [pauseTimer, setPauseTimer] = useState(false);
	// let timeT = 20;
	let timerInterval;

	useEffect(() => {
		timerInterval = setInterval(decreaseTime, 1000);

		return () => clearInterval(timerInterval);
	}, [time]);
	const decreaseTime = () => {
		if (time > 0) {
			let timeT = time - 1;
			setTime(timeT);
		} else {
			setTime(20);
		}
	};

	useEffect(() => {
		setQuestionNumber(questionNumber + 1);
		setTime(20);
		setPauseTimer(false);
	}, [single ? singleGameQuestion : doubleGameQuestion]);

	const _handleSelectOption = (e) => {
		clearInterval(timerInterval);
		handleSelectOption(e);
		setPauseTimer(true);
	};
	const _renderClockIcon = () => {
		if (time < 5) {
			return redTime;
		} else if (time < 15) {
			return yellowTime;
		} else {
			return greenTime;
		}
	};
	const _renderColor = () => {
		if (time < 5) {
			return "#F53636";
		} else if (time < 15) {
			return "#FFB526";
		} else {
			return "#12AE25";
		}
	};
	const _renderProgressStyle = () => {
		if (time < 5) {
			return {
				backgroundColor: "#F53636",
				width: (time / 20) * 100 + "%",
			};
		} else if (time < 15) {
			return {
				backgroundColor: "#FFB526",
				width: (time / 20) * 100 + "%",
			};
		} else {
			return {
				backgroundColor: "#12AE25",
				width: (time / 20) * 100 + "%",
			};
		}
	};
	return (
		<div className="show-question w-100 h-100">
			<div className="show-question__header">
				<div className="show-question__header--player-info">
					<img
						src={single ? IMAGE_URL + authData.avatar : IMAGE_URL + doubleGameReady[myInfo.player].avatar}
						alt=""
					/>
					<Text ns="your-score" />
					<span>{myInfo.score}</span>
				</div>

				{!single && (
					<div className="show-question__header--player-info pull-right">
						<img src={IMAGE_URL + doubleGameReady[rivalInfo.player].avatar} alt="" />
						<p>{doubleGameReady[rivalInfo.player].username}</p>
						<span>{rivalInfo.score}</span>
					</div>
				)}
			</div>
			<div className="show-question__question">
				<div className="show-question__question--number">
					{questionNumber}
					{(!single || withFriends) && "/7"}
				</div>
				<p className="show-question__question--text">
					{(single ? singleGameQuestion : doubleGameQuestion).title}
				</p>
			</div>
			<div className="show-question__timer" style={pauseTimer ? { filter: "opacity(0.5)" } : {}}>
				<img src={_renderClockIcon()} alt="" />
				<p style={{ color: _renderColor() }} className="show-question__timer--text">
					{time}
				</p>
				<div className="show-question__timer--progressbar">
					<div style={_renderProgressStyle()} className="show-question__timer--progressbar--inside"></div>
				</div>
			</div>
			<div className="show-question__options">
				<Button
					className={`${pauseTimer ? "show-question__options--disabled" : ""} ${
						correctAnswer === (single ? singleGameQuestion : doubleGameQuestion).option1
							? "show-question__options--true"
							: ""
					} ${
						myOption === (single ? singleGameQuestion : doubleGameQuestion).option1 &&
						myOption !== correctAnswer &&
						correctAnswer != null
							? "show-question__options--false"
							: ""
					}`}
					onClick={() => _handleSelectOption((single ? singleGameQuestion : doubleGameQuestion).option1)}
				>
					{(single ? singleGameQuestion : doubleGameQuestion).option1}
					{!single && rivalAnswer === doubleGameQuestion?.option1 && (
						<p className="show-question__options--rival-selection">
							{doubleGameReady[rivalInfo.player].username}
						</p>
					)}
				</Button>
				<Button
					className={`${pauseTimer ? "show-question__options--disabled" : ""} ${
						correctAnswer === (single ? singleGameQuestion : doubleGameQuestion).option2
							? "show-question__options--true"
							: ""
					} ${
						myOption === (single ? singleGameQuestion : doubleGameQuestion).option2 &&
						myOption !== correctAnswer &&
						correctAnswer != null
							? "show-question__options--false"
							: ""
					}`}
					onClick={() => _handleSelectOption((single ? singleGameQuestion : doubleGameQuestion).option2)}
				>
					{(single ? singleGameQuestion : doubleGameQuestion).option2}
				</Button>
				<Button
					className={`${pauseTimer ? "show-question__options--disabled" : ""} ${
						correctAnswer === (single ? singleGameQuestion : doubleGameQuestion).option3
							? "show-question__options--true"
							: ""
					} ${
						myOption === (single ? singleGameQuestion : doubleGameQuestion).option3 &&
						myOption !== correctAnswer &&
						correctAnswer != null
							? "show-question__options--false"
							: ""
					}`}
					onClick={() => _handleSelectOption((single ? singleGameQuestion : doubleGameQuestion).option3)}
				>
					{(single ? singleGameQuestion : doubleGameQuestion).option3}
				</Button>
				<Button
					className={`${pauseTimer ? "show-question__options--disabled" : ""} ${
						correctAnswer === (single ? singleGameQuestion : doubleGameQuestion).option4
							? "show-question__options--true"
							: ""
					} ${
						myOption === (single ? singleGameQuestion : doubleGameQuestion).option4 &&
						myOption !== correctAnswer &&
						correctAnswer != null
							? "show-question__options--false"
							: ""
					}`}
					onClick={() => _handleSelectOption((single ? singleGameQuestion : doubleGameQuestion).option4)}
				>
					{(single ? singleGameQuestion : doubleGameQuestion).option4}
				</Button>
			</div>
		</div>
	);
};

export default ShowQuestion;
