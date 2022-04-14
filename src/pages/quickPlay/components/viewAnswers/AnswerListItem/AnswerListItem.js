import { useTranslation } from "react-i18next";

import Text from "common/components/UI/text/Text";
import imagePlaceholder from "assets/images/icons/imagePlaceholder.svg";

import "./AnswerListItem.scss";

const AnswerListItem = ({ index, question, myInfo, rivalInfo, handleSetSelectedAnswer }) => {
	const { i18n } = useTranslation();
	const questionData = question?.question[i18n.language] || "";

	return (
		<div onClick={() => handleSetSelectedAnswer(question, index)} className="answer-list-item" key={question?._id}>
			<img src={imagePlaceholder} alt={questionData?.title} />
			<div className="answer-list-item__question-data">
				<div className="answer-list-item__question-data--question">
					<span className="answer-list-item__question-data--question--number">{index + 1}.</span>
					<p>{questionData?.title}</p>
				</div>
				<div className="answer-list-item__question-data--answer">
					<span className="answer-list-item__question-data--answer--title">
						<Text as="span" ns="answer" />:
					</span>
					<p>{questionData?.answer}</p>
				</div>
			</div>
			<div
				style={{
					backgroundColor: `${question?.playerAnswer === questionData?.answer ? "#12AE25" : "#F53636"}`,
				}}
				className="answer-list-item__answer-stat"
			></div>
		</div>
	);
};

export default AnswerListItem;
