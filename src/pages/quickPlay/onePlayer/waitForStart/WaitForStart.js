import { useState } from "react";
import './WaitForStart.scss'
import explosion from 'assets/images/icons/explosion.svg';
import { IMAGE_URL } from "common/values/CORE";

const WaitForStart = ({ doubleGameReady }) => {
    console.log('doubleGameReady', doubleGameReady)

    return (
        <div className="wait-for-start-single w-100 h-100">
            <div className="wait-for-start-single__title">
                <p>Waiting for the match to start ...</p>
            </div>
           
            
        </div>
    )
}

export default WaitForStart