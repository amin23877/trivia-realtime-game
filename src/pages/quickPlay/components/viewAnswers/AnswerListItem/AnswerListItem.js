import arrowBack from "assets/images/icons/arrow-back.svg";
import imagePlaceholder from "assets/images/icons/imagePlaceholder.svg";
import "./AnswerListItem.scss";
import Text from "common/components/UI/text/Text";

const AnswerListItem = ({ index, question, myInfo, rivalInfo, handleSetSelectedAnswer }) => {
	console.log("q,est", question);

	return (
		<div onClick={() => handleSetSelectedAnswer(question, index)} className="answer-list-item" key={question._id}>
			<img src={imagePlaceholder} />
			<div className="answer-list-item__question-data">
				<div className="answer-list-item__question-data--question">
					<span className="answer-list-item__question-data--question--number">{index + 1}.</span>
					<p>{question.title}</p>
				</div>
				<div className="answer-list-item__question-data--answer">
					<span className="answer-list-item__question-data--answer--title">
						<Text as="span" ns="answer" />:
					</span>
					<p>{question.answer}</p>
				</div>
			</div>
			<div
				style={{
					backgroundColor: `${
						question[myInfo.player]?.answer == question.answer || question.playerAnswer == question.answer
							? "#12AE25"
							: "#F53636"
					}`,
				}}
				className="answer-list-item__answer-stat"
			></div>
		</div>
	);
};

export default AnswerListItem;
