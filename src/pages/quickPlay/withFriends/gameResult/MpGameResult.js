import { useEffect, useState } from "react";
import './MpGameResult.scss'
import { Button } from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import userIcon from 'assets/images/icons/footer-profile.svg';
import kingImage from 'assets/images/icons/king.svg';

import { useNavigate } from "react-router-dom";
import { IMAGE_URL } from "common/values/CORE";
const MpGameResult = ({ myInfo, gameResultData, authData, handleStartGame,joinCode ,mpGamesId }) => {
    const navigate = useNavigate();
    console.log('gameResultData', gameResultData)
    return (
        <div className="mp-game-result w-100 h-100">
            <div className="mp-game-result__avatar mp-game-result__avatar-center mt-38px mb-56px">

                <div className={`mp-game-result__avatar--image flex-center`}>
                    <img className={`game-result__avatar--image--king`} src={kingImage} />

                    <div className={`mp-game-result__avatar--image--inner game-result__avatar--image--winner-ring`}>
                        <img src={IMAGE_URL + gameResultData?.scores[0].avatar} />
                    </div>
                    <p className={`mp-game-result__avatar--image--name`}>{gameResultData?.scores[0].username}</p>

                </div>
            </div>
            <div className={`mp-game-result__score-board`}>
                <div className={`mp-game-result__score-board--table`}>
                    <div className={`mp-game-result__score-board--table--tr `}>
                        <div></div>
                        <p>Correct answers</p>
                        <p>Score</p>
                    </div>
                    {gameResultData?.scores.map((score, index) => (
                        <div className={`mp-game-result__score-board--table--tr p-r-25px ${score.username == authData.username ? 'bg-gray' : ''}`}>
                            <div>
                                <p>{index + 1}.</p>
                                <p><img src={IMAGE_URL + score.avatar} /></p>
                                <p>{score.username}</p>
                            </div>
                            <p>{score.score}</p>
                            <p>{score.score}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mp-game-result__actions">
                <Button onClick={handleStartGame} className={`mp-game-result__actions--play-again ${mpGamesId.categoryGameId !==joinCode ?'mp-game-result__actions--disabled':''}`}>Start Again</Button>
                <Button onClick={() => navigate('/')} className="mp-game-result__actions--back-home">
                    <ArrowBackIcon />
                    Back To Home
                </Button>
            </div>
        </div>
    )
}

export default MpGameResult