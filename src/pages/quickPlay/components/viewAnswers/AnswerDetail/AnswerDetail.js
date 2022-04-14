import { useState } from "react";
import { Button } from "@material-ui/core";
import { useTranslation } from "react-i18next";

import Text from "common/components/UI/text/Text";

import "./AnswerDetail.scss";
import greenTime from "assets/images/icons/Green-time.svg";
import flagIcon from "assets/images/icons/flag.svg";
import arrowBack from "assets/images/icons/arrow-back.svg";

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
	const { i18n } = useTranslation();
	const questionData = question?.question[i18n.language] || "";

	return (
		<div className="answer-detail w-100 h-100">
			<div className="answer-detail__header">
				<div onClick={() => handleSetSelectedAnswer(null, null)}>
					<img src={arrowBack} alt="" />
					<p>
						<Text as="span" ns="question" /> {index + 1}
					</p>
				</div>
				<img src={flagIcon} onClick={() => setOpenReport(true)} alt="flag" />
			</div>
			<div className="answer-detail__question">
				<div className="answer-detail__question--number">{index + 1}</div>
				<p className="answer-detail__question--text">{questionData.title}</p>
			</div>
			<div className="answer-detail__timer" style={pauseTimer ? { filter: "opacity(0.5)" } : {}}>
				<img src={greenTime} alt="" />
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
					className={`${questionData.answer === questionData.option1 ? "answer-detail__options--true" : ""} ${
						question[myInfo.player]?.answer === questionData.option1 &&
						question[myInfo.player]?.answer !== questionData.answer
							? "answer-detail__options--false"
							: ""
					}`}
				>
					{question[myInfo.player]?.answer === questionData.option1 && (
						<Text ns="you" className="answer-detail__options--selected-answer" />
					)}
					{!single && question[rivalInfo?.player].answer === questionData.option1 && (
						<p className="answer-detail__options--selected-answer">
							{doubleGameReady[rivalInfo.player].username}
						</p>
					)}
					{questionData.option1}
				</Button>
				<Button
					className={`${questionData.answer === questionData.option2 ? "answer-detail__options--true" : ""} ${
						question[myInfo.player]?.answer === questionData.option2 &&
						question[myInfo.player]?.answer !== questionData.answer
							? "answer-detail__options--false"
							: ""
					}`}
				>
					{questionData.option2}
					{question[myInfo.player]?.answer === questionData.option2 && (
						<Text ns="you" className="answer-detail__options--selected-answer" />
					)}
					{!single && question[rivalInfo?.player].answer === questionData.option2 && (
						<p className="answer-detail__options--selected-answer">
							{doubleGameReady[rivalInfo.player].username}
						</p>
					)}
				</Button>
				<Button
					className={`${questionData.answer === questionData.option3 ? "answer-detail__options--true" : ""} ${
						question[myInfo.player]?.answer === questionData.option3 &&
						question[myInfo.player]?.answer !== questionData.answer
							? "answer-detail__options--false"
							: ""
					}`}
				>
					{questionData.option3}
					{question[myInfo.player]?.answer === questionData.option3 && (
						<Text ns="you" className="answer-detail__options--selected-answer" />
					)}
					{!single && question[rivalInfo?.player].answer === questionData.option3 && (
						<p className="answer-detail__options--selected-answer">
							{doubleGameReady[rivalInfo.player].username}
						</p>
					)}
				</Button>
				<Button
					className={`${questionData.answer === questionData.option4 ? "answer-detail__options--true" : ""} ${
						question[myInfo.player]?.answer === questionData.option4 &&
						question[myInfo.player]?.answer !== questionData.answer
							? "answer-detail__options--false"
							: ""
					}`}
				>
					{questionData.option4}
					{question[myInfo.player]?.answer === questionData.option4 && (
						<Text ns="you" className="answer-detail__options--selected-answer" />
					)}
					{!single && question[rivalInfo?.player].answer === questionData.option4 && (
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
