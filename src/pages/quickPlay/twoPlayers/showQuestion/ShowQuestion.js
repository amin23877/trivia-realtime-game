import { useState } from "react";
import './ShowQuestion.scss'
import explosion from 'assets/images/icons/explosion.svg';
import { IMAGE_URL } from "common/values/CORE";
import { Button } from "@material-ui/core";

const ShowQuestion = ({ socket, doubleGameQuestion, handleSelectOption }) => {
    console.log('doubleGameQuestion', doubleGameQuestion)
    console.log('socket', socket)

    return (
        <div className="show-question w-100 h-100">
            <p>{doubleGameQuestion.title}</p>
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