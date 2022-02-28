import arrowBack from "assets/images/icons/arrow-back.svg";
import imagePlaceholder from "assets/images/icons/imagePlaceholder.svg";
import { useState } from "react";
import AnswerDetail from "./AnswerDetail/AnswerDetail";
import AnswerListItem from "./AnswerListItem/AnswerListItem";
import AnswerReport from "./AnswerReport/AnswerReport";
import './ViewAnswers.scss'

const ViewAnswers = ({ gameResultData, myInfo, rivalInfo,single , doubleGameReady ,handleBackAnswers}) => {
    console.log('gameResultData', gameResultData)
    const [selectedAnswer, setSelectedAnswer] = useState();
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState();
    const [openReport, setOpenReport] = useState(false);
    const handleSetSelectedAnswer = (e, index) => {
        setSelectedAnswer(e)
        setSelectedAnswerIndex(index)
    }
    return (
        <>
            {openReport && <AnswerReport setOpenReport={setOpenReport} />}
            {
                selectedAnswer ?
                    <AnswerDetail
                        myInfo={myInfo}
                        rivalInfo={rivalInfo}
                        single={single}
                        index={selectedAnswerIndex}
                        question={selectedAnswer}
                        doubleGameReady={doubleGameReady}
                        handleSetSelectedAnswer={handleSetSelectedAnswer}
                        setOpenReport={setOpenReport}
                    />
                    :
                    <div className="view-answers w-100 h-100">
                        <div className="view-answers__header">
                            <img src={arrowBack} onClick={handleBackAnswers}/>
                            <p>Questions</p>
                        </div>
                        <div className="view-answers__questions">
                            {gameResultData.questions.map((question, index) => (
                                <AnswerListItem
                                    myInfo={myInfo}
                                    rivalInfo={rivalInfo}
                                    index={index}
                                    question={question}
                                    key={question._id}
                                    handleSetSelectedAnswer={handleSetSelectedAnswer}
                                />
                            ))}
                        </div>
                    </div>
            }
        </>
    )

}

export default ViewAnswers;