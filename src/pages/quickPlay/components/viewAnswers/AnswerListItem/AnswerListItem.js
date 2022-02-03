import arrowBack from "assets/images/icons/arrow-back.svg";
import imagePlaceholder from "assets/images/icons/imagePlaceholder.svg";
import './AnswerListItem.scss'

const AnswerListItem = ({ index, question, myInfo, rivalInfo , handleSetSelectedAnswer}) => {

 
    return (
        <div onClick={()=>handleSetSelectedAnswer(question , index)} className="answer-list-item" key={question._id}>
            <img src={imagePlaceholder} />
            <div className="answer-list-item__question-data">
                <div className="answer-list-item__question-data--question">
                    <span className="answer-list-item__question-data--question--number">{index + 1}.</span>
                    <p>{question.title}</p>
                </div>
                <div className="answer-list-item__question-data--answer">
                    <span className="answer-list-item__question-data--answer--title">Answer:</span>
                    <p>{question.answer}</p>
                </div>
            </div>
            <div style={{ backgroundColor: `${question[myInfo.player]?.answer == question.answer ? "#12AE25" : "#F53636"}` }} className="answer-list-item__answer-stat"></div>
        </div>

    )
}

export default AnswerListItem;