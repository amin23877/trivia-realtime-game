import { useState, useEffect } from "react";
import "./AnswerDetail.scss";
import greenTime from "assets/images/icons/Green-time.svg";
import flagIcon from "assets/images/icons/flag.svg";
import { Button } from "@material-ui/core";
import arrowBack from "assets/images/icons/arrow-back.svg";
import Text from "common/components/UI/text/Text";

const AnswerDetail = ({
	question,
	doubleGameReady,
	myInfo,
	rivalInfo,
	index,
	single,
	handleSetSelectedAnswer,
	setOpenReport,
}) => {
	const [pauseTimer, setPauseTimer] = useState(true);

	return (
		<div className="answer-detail w-100 h-100">
			<div className="answer-detail__header">
				<div onClick={() => handleSetSelectedAnswer(null, null)}>
					<img src={arrowBack} />
					<p>
						<Text as="span" ns="question" /> {index + 1}
					</p>
				</div>
				<img src={flagIcon} onClick={() => setOpenReport(true)} />
			</div>
			<div className="answer-detail__question">
				<div className="answer-detail__question--number">{index + 1}</div>
				<p className="answer-detail__question--text">{question.title}</p>
			</div>
			<div className="answer-detail__timer" style={pauseTimer ? { filter: "opacity(0.5)" } : {}}>
				<img src={greenTime} />
				<p style={{ color: "#12AE25" }} className="answer-detail__timer--text">
					20
				</p>
				<div className="answer-detail__timer--progressbar">
					<div
						style={{ backgroundColor: "#12AE25", width: "100%" }}
						className="answer-detail__timer--progressbar--inside"
					></div>
				</div>
			</div>
			<div className="answer-detail__options">
				<Button
					className={`${question.answer == question.option1 ? "answer-detail__options--true" : ""} ${
						question[myInfo.player]?.answer == question.option1 &&
						question[myInfo.player]?.answer != question.answer
							? "answer-detail__options--false"
							: ""
					}`}
				>
					{question[myInfo.player]?.answer == question.option1 && (
						<Text ns="you" className="answer-detail__options--selected-answer" />
					)}
					{!single && question[rivalInfo?.player].answer == question.option1 && (
						<p className="answer-detail__options--selected-answer">
							{doubleGameReady[rivalInfo.player].username}
						</p>
					)}
					{question.option1}
				</Button>
				<Button
					className={`${question.answer == question.option2 ? "answer-detail__options--true" : ""} ${
						question[myInfo.player]?.answer == question.option2 &&
						question[myInfo.player]?.answer != question.answer
							? "answer-detail__options--false"
							: ""
					}`}
				>
					{question.option2}
					{question[myInfo.player]?.answer == question.option2 && (
						<Text ns="you" className="answer-detail__options--selected-answer" />
					)}
					{!single && question[rivalInfo?.player].answer == question.option2 && (
						<p className="answer-detail__options--selected-answer">
							{doubleGameReady[rivalInfo.player].username}
						</p>
					)}
				</Button>
				<Button
					className={`${question.answer == question.option3 ? "answer-detail__options--true" : ""} ${
						question[myInfo.player]?.answer == question.option3 &&
						question[myInfo.player]?.answer != question.answer
							? "answer-detail__options--false"
							: ""
					}`}
				>
					{question.option3}
					{question[myInfo.player]?.answer == question.option3 && (
						<Text ns="you" className="answer-detail__options--selected-answer" />
					)}
					{!single && question[rivalInfo?.player].answer == question.option3 && (
						<p className="answer-detail__options--selected-answer">
							{doubleGameReady[rivalInfo.player].username}
						</p>
					)}
				</Button>
				<Button
					className={`${question.answer == question.option4 ? "answer-detail__options--true" : ""} ${
						question[myInfo.player]?.answer == question.option4 &&
						question[myInfo.player]?.answer != question.answer
							? "answer-detail__options--false"
							: ""
					}`}
				>
					{question.option4}
					{question[myInfo.player]?.answer == question.option4 && (
						<Text ns="you" className="answer-detail__options--selected-answer" />
					)}
					{!single && question[rivalInfo?.player].answer == question.option4 && (
						<p className="answer-detail__options--selected-answer">
							{doubleGameReady[rivalInfo.player].username}
						</p>
					)}
				</Button>
			</div>
		</div>
	);
};

export default AnswerDetail;
