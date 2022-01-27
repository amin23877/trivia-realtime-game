import { useEffect, useState } from "react";
import './GameResult.scss'
import explosion from 'assets/images/icons/explosion.svg';
import { IMAGE_URL } from "common/values/CORE";
import kingImage from 'assets/images/icons/king.svg';
import looserCup from 'assets/images/icons/looser.svg';
import winnerCup from 'assets/images/icons/winner.svg';
import { Button } from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import userIcon from 'assets/images/icons/footer-profile.svg';

import { useNavigate } from "react-router-dom";
const GameResult = ({ myInfo, gameResultData }) => {
    const navigate = useNavigate();

  
    return (
        <div className="game-result w-100 h-100">
            <div className="game-result__avatar game-result__avatar-center mt-38px mb-56px">
               
                <div className={`game-result__avatar--image flex-center`}>
                   
                    <div className={`game-result__avatar--image--inner`}>
                        <img src={userIcon} />
                    </div>
                    <p className={`game-result__avatar--image--name`}>{gameResultData?.message}</p>

                </div>
            </div>
            <div className={`game-result__score-board`}>
                <div className={`game-result__score-board--table`}>
                    <div className={`game-result__score-board--table--tr p-0-35px`}>
                        <p>Total Score</p>
                        <p>{gameResultData && gameResultData.score}</p>
                    </div>
                    <div className={`game-result__score-board--table--tr p-0-35px`}>
                        <p>Correct Answers</p>
                        <p>{gameResultData && gameResultData.score}</p>
                    </div>
                </div>
            </div>
            <div className="game-result__level-bar mb-24px">
                <div style={{ width: 7 * 10 + '%' }} className="game-result__level-bar--inner">
                    <p>Level {7}</p>
                </div>
            </div>
            <Button className="game-result__play-again">Play Again</Button>
            <Button className="game-result__new-opponent">New Opponent</Button>
            <a className="game-result__view-answer" href="#">View Answers</a>
            <Button onClick={() => navigate('/')} className="game-result__back-to-home"><ArrowBackIcon />Back To Home</Button>

        </div>
    )
}

export default GameResult