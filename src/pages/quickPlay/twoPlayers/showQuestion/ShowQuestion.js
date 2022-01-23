import { useState, useEffect } from "react";
import './ShowQuestion.scss'
import explosion from 'assets/images/icons/explosion.svg';
import { IMAGE_URL } from "common/values/CORE";
import { Button } from "@material-ui/core";

const ShowQuestion = ({ doubleGameQuestion, handleSelectOption, doubleGameReady, myInfo, rivalInfo }) => {
    console.log('doubleGameQuestion', doubleGameQuestion)
    const [questionNumber, setQuestionNumber] = useState(1)
    useEffect(() => {
        setQuestionNumber(questionNumber + 1)
    }, [doubleGameQuestion])
    return (
        <div className="show-question w-100 h-100">
            <div className="show-question__header">
                <div className="show-question__header--player-info">
                    <img src={IMAGE_URL + doubleGameReady[myInfo.player].avatar} />
                    <p>your score</p>
                    <span>{myInfo.score}</span>
                </div>
                <div className="show-question__header--player-info pull-right">
                    <img src={IMAGE_URL + doubleGameReady[rivalInfo.player].avatar} />
                    <p>{doubleGameReady[rivalInfo.player].username}</p>
                    <span>{rivalInfo.score}</span>
                </div>
            </div>
            <div className="show-question__question">
                <div className="show-question__question--number">
                    {questionNumber}/7
                </div>
                <p className="show-question__question--text">{doubleGameQuestion.title}</p>

            </div>
            <div className="show-question__options">
                <Button onClick={() => handleSelectOption(doubleGameQuestion.option1)}>{doubleGameQuestion.option1}</Button>
                <Button onClick={() => handleSelectOption(doubleGameQuestion.option2)}>{doubleGameQuestion.option2}</Button>
                <Button onClick={() => handleSelectOption(doubleGameQuestion.option3)}>{doubleGameQuestion.option3}</Button>
                <Button onClick={() => handleSelectOption(doubleGameQuestion.option4)}>{doubleGameQuestion.option4}</Button>
            </div>

        </div>
    )
}

export default ShowQuestion