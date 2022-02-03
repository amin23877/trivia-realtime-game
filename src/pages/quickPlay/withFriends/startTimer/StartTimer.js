import './StartTimer.scss';
import logoImg from "assets/images/icons/logo-white.svg";
import { useEffect, useState } from 'react';

const StartTimer = () => {
    const [time, setTime] = useState(5)
    let timerInterval;

    useEffect(() => {
        timerInterval = setInterval(decreaseTime, 1000)

        return () => clearInterval(timerInterval)
    }, [time])
    const decreaseTime = () => {
        if (time > 0) {
            let timeT = time - 1;
            setTime(timeT)
        } else {
            setTime(5)
        }
    }
    return (
        <div className="start-timer w-100 h-100">
            <img src={logoImg} />
            <div className="start-timer__timer">
                <div className="start-timer__timer--dummy"></div>
                <div className="start-timer__timer--data">
                    {
                        time != 0 ? time : 'Go'
                    }
                </div>
            </div>
        </div>
    )
}

export default StartTimer