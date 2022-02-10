import { useEffect, useState } from "react";
import './GameResult.scss'
import explosion from 'assets/images/icons/explosion.svg';
import { IMAGE_URL } from "common/values/CORE";
import kingImage from 'assets/images/icons/king.svg';
import looserCup from 'assets/images/icons/looser.svg';
import winnerCup from 'assets/images/icons/winner.svg';
import { Button } from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useNavigate } from "react-router-dom";
const GameResult = ({ myInfo, rivalInfo, gameResultData, doubleGameReady ,handleShowAnswers,handleNewRival }) => {
    const [winState, setWinState] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        if (gameResultData) {
            if (gameResultData[`${myInfo.player}Score`] > gameResultData[`${rivalInfo.player}Score`]) {
                setWinState(2)
            } else if (gameResultData?.player1Score == gameResultData?.player2Score) {
                setWinState(1)
            } else {
                setWinState(0)
            }
        }
    }, [gameResultData])
    const _handleResultTitle = () => {
        if (gameResultData) {
            if (gameResultData[`${myInfo.player}Score`] > gameResultData[`${rivalInfo.player}Score`]) {
                return (<span>Congratulations! <br /> you win</span>)
            } else if (gameResultData?.player1Score == gameResultData?.player2Score) {
                return (<span>You are equal!</span>)
            } else {
                return (<span>I`m sorry. you lost :(</span>)

            }
        }
    }
    return (
        <div className="game-result w-100 h-100">
            <p className="game-result__title">{_handleResultTitle()}</p>
            <div className="game-result__avatar">
                <div className={`game-result__avatar--image`}>
                    {
                        winState == 0 &&
                        <img className={`game-result__avatar--image--king`} src={kingImage} />
                    }
                    <div className={`game-result__avatar--image--inner ${winState != 2 ? 'game-result__avatar--image--winner-ring' : ''}`}>
                        <img src={IMAGE_URL + doubleGameReady[rivalInfo.player].avatar} />
                    </div>
                    <p className={`game-result__avatar--image--name`}>{doubleGameReady[rivalInfo.player].username}</p>
                </div>
                <div className={`game-result__avatar--image`}>
                    {
                        winState == 2 &&
                        <img className={`game-result__avatar--image--king`} src={kingImage} />
                    }
                    <div className={`game-result__avatar--image--inner ${winState != 0 ? 'game-result__avatar--image--winner-ring' : ''}`}>
                        <img src={IMAGE_URL + doubleGameReady[myInfo.player].avatar} />
                    </div>
                    <p className={`game-result__avatar--image--name`}>You</p>

                </div>
            </div>
            <div className={`game-result__score-board`}>
                <img className={`game-result__score-board--cup`} src={winState == 0 ? looserCup : winnerCup} />
                <div className={`game-result__score-board--table`}>
                    <div className={`game-result__score-board--table--tr`}>
                        <p>{gameResultData && gameResultData[`${rivalInfo.player}Score`]}</p>
                        <p>Total Score</p>
                        <p>{gameResultData && gameResultData[`${myInfo.player}Score`]}</p>
                    </div>
                    <div className={`game-result__score-board--table--tr`}>
                        <p>{gameResultData && gameResultData[`${rivalInfo.player}Score`]}</p>
                        <p>Correct Answers</p>
                        <p>{gameResultData && gameResultData[`${myInfo.player}Score`]}</p>
                    </div>
                </div>
            </div>
            <div className="game-result__level-bar">
                <div style={{ width: doubleGameReady[myInfo.player].level * 10 + '%' }} className="game-result__level-bar--inner">
                    <p>Level {doubleGameReady[myInfo.player].level}</p>
                </div>
            </div>
            {/* <Button className="game-result__play-again">Play Again</Button> */}
            {/* <Button className="game-result__new-opponent" onClick={handleNewRival}>New Opponent</Button> */}
            <Button className="game-result__view-answer" onClick={handleShowAnswers}>View Answers</Button>
            <Button onClick={() => navigate('/')} className="game-result__back-to-home"><ArrowBackIcon />Back To Home</Button>

        </div>
    )
}

export default GameResult