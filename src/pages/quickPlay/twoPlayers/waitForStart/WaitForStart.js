import { useState } from "react";
import './WaitForStart.scss'
import explosion from 'assets/images/icons/explosion.svg';
import { IMAGE_URL } from "common/values/CORE";

const WaitForStart = ({ doubleGameReady }) => {
    console.log('doubleGameReady', doubleGameReady)
    const [rivalInfo, setRivalInfo] = useState(doubleGameReady.player1.phone == localStorage.getItem('phone') ? doubleGameReady.player2 : doubleGameReady.player1)
    const [myInfo, setMyInfo] = useState(doubleGameReady.player1.phone == localStorage.getItem('phone') ? doubleGameReady.player1 : doubleGameReady.player2)

    return (
        <div className="wait-for-start w-100 h-100">
            <div className="wait-for-start__title">
                <p>Waiting To Start...</p>
            </div>
            <div className="wait-for-start__user-info">
                <div className="wait-for-start__user-info--avatar">
                    <img src={IMAGE_URL + doubleGameReady.player1.avatar} />
                </div>
                <div className="wait-for-start__user-info--name">
                    <p>You - {myInfo.phone}</p>
                    <p>Level {myInfo.level}</p>
                </div>
            </div>

            <div className="wait-for-start__divider-container">
                <img src={explosion} />
            </div>

            <div className="wait-for-start__user-info wait-for-start__user-info-pull-right">
                <div className="wait-for-start__user-info-pull-right--avatar wait-for-start__user-info--avatar">
                    <img src={IMAGE_URL + myInfo.avatar} />
                </div>
                <div className="wait-for-start__user-info--name">
                    <p>{rivalInfo.username} - {rivalInfo.phone}</p>
                    <p>Level {rivalInfo.level}</p>
                </div>
            </div>

            {/* <p style={{color:'#fff'}}>{localStorage.getItem('quickPlay-token')}</p> */}
        </div>
    )
}

export default WaitForStart