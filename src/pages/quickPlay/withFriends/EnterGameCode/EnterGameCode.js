import { Button } from "@material-ui/core";
import arrowBack from "assets/images/icons/arrow-back.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './EnterGameCode.scss'
const EnterGameCode = ({handleOpenCategories , joinCode , setJoinCode , handleJoinWithCode}) => {
    const navigate = useNavigate();

    return (
        <div className="enter-game-code w-100 h-100">
            <div className="enter-game-code__header">
                <img onClick={() => navigate('/')} src={arrowBack} />
                <p>Play With Friends</p>
            </div>
            <div className="enter-game-code__join-code">
                <p>Enter a join code</p>
                <div className="enter-game-code__join-code--form">
                    <input value={joinCode} onChange={(e) => setJoinCode(e.target.value)} />
                    <Button onClick={handleJoinWithCode} className={`${joinCode==''?'enter-game-code__join-code--form--disabled':''}`} disabled={joinCode == ''}>Join</Button>
                </div>
            </div>
            <div className="enter-game-code__create-game">
                <p>Create a new game to play with friends</p>
                <div className="enter-game-code__create-game--button">
                <Button onClick={handleOpenCategories}>Create a Game</Button>

                </div>
            </div>
        </div>
    )
}

export default EnterGameCode;