import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import './TwoPlayers.scss'
import { useNavigate } from "react-router-dom";
import { GET_CATEGORIES_LIST } from 'redux/actions/mainActions/generalActions';
import SearchForPlayer from "./searchForPlayer/SearchForPlayer";
import { SOCKET_BASE_URL } from "common/values/CORE";
import { io } from "socket.io-client";
import WaitForStart from "./waitForStart/WaitForStart";
import ShowQuestion from "./showQuestion/ShowQuestion";
import CategoriesList from "./categories/CategoriesList";

const TwoPlayers = () => {
    const Dispatch = useDispatch()
    const navigate = useNavigate();

    const categories = useSelector((state) => state.stateGeneral.categoriesList);
    const [selectedCategory, setSelectedCategory] = useState()
    const [doubleGameReady, setDoubleGameReady] = useState()
    const [doubleGameQuestion, setDoubleGameQuestion] = useState()
    const [gameState, setGameState] = useState('showCategories')
    const [socket, setSocket] = useState()
    const [socketId, setSocketId] = useState()
    const [myInfo, setMyInfo] = useState({ player: 'player1', score: 0 })
    const [rivalInfo, setRivalInfo] = useState({ player: 'player2', score: 0 })
    const [time, setTime] = useState(20)
    const [questionNumber, setQuestionNumber] = useState(0)
    const [correctAnswer, setCorrectAnswer] = useState()
    const [rivalAnswer, setRivalAnswer] = useState()
    const [myOption, setMyOption] = useState()

    const socketUrl = SOCKET_BASE_URL;
    const token = localStorage.getItem('token')
        ? `${localStorage.getItem('token')}`
        : null;


    useEffect(() => {
        const socketp = io(socketUrl, { transports: ["websocket"] });
        setSocket(socketp);
        socketp.on("connect", () => {
            console.log("connected");
            socketp.emit("auth", { token });
        });

        socketp.on('authentication', (e) => {
            setSocketId(e.socketid)
        })
    }, [])
    useEffect(() => {
        if (doubleGameReady) {
            setMyInfo({ ...myInfo, player: doubleGameReady.player1.phone == localStorage.getItem('phone') ? 'player1' : 'player2' })
            setRivalInfo({ ...rivalInfo, player: doubleGameReady.player1.phone == localStorage.getItem('phone') ? 'player2' : 'player1' })
        }
    }, [doubleGameReady])
    useEffect(() => {
        if (!categories) {
            // alert('ok!')
            Dispatch(GET_CATEGORIES_LIST(`Bearer ${token}`))
        } else {
            // alert(categories.length)

        }
    }, [categories])

    useEffect(() => {
        if (selectedCategory) {
            if (socketId) {
                socket.emit("doubleGame", { CategoryId: selectedCategory._id });
            }
            socket.on("doubleGame", (e) => {
                // console.log("doubleGame", e);
            });
            socket.on("doubleGameReady", (e) => {
                setDoubleGameReady(e);
                setGameState('showWaitForStart');
                localStorage.setItem('quickPlay-token', e.token)
            });

            socket.on("doubleGameQuestion", (e) => {
                setTimeout(() => {
                    setDoubleGameQuestion(e);
                    setGameState('showQuestions');
                    setCorrectAnswer(null)
                    setRivalAnswer(null)
                    setMyOption(null)
                }, 1000)

            });
            socket.on("doubleGameScore", (e) => {
                console.log('score', e)
                if (e.answer) {
                    setCorrectAnswer(e.answer)
                } else {
                    setRivalAnswer(e[`${rivalInfo.player}Answer`])
                    setMyInfo({ ...myInfo, score: e[`${myInfo.player}Score`] })
                    setRivalInfo({ ...myInfo, score: e[`${rivalInfo.player}Score`] })
                }
                // setDoubleGameQuestion(e);
                // setGameState('showQuestions');
            });
            socket.on("doubleGameFinish", (e) => {
                socket.close();
            });
        }
    }, [selectedCategory])
    // console.log('selectedCategory', selectedCategory)
    // console.log('socket', socket)

    const handleGotoBack = () => {
        navigate('/')
    }

    const handleSelectCategory = (category) => {
        setGameState('showSearchForPlayer')
        setSelectedCategory(category)
    }
    const handleCloseSearch = () => {
        setSelectedCategory(null)
        setGameState('showCategories')
        // socket.io.disconnect();
        // socket.io.open();
    }
    const handleSelectOption = (opt) => {
        socket.emit("doubleGameAnswer", { gameToken: localStorage.getItem('quickPlay-token'), answer: opt });
        setMyOption(opt)
    }

    return (
        <>
            {
                (gameState == 'showCategories' || gameState == 'showSearchForPlayer') &&
                <CategoriesList
                    categories={categories}
                    handleGotoBack={handleGotoBack}
                    handleSelectCategory={handleSelectCategory}
                />
            }
            {
                gameState == 'showSearchForPlayer' &&
                <SearchForPlayer
                    handleClose={handleCloseSearch}
                    selectedCategory={selectedCategory}
                />
            }

            {gameState == 'showWaitForStart' &&
                <WaitForStart
                    doubleGameReady={doubleGameReady}
                />
            }
            {gameState == 'showQuestions' &&
                <ShowQuestion
                    doubleGameQuestion={doubleGameQuestion}
                    doubleGameReady={doubleGameReady}
                    handleSelectOption={handleSelectOption}
                    myInfo={myInfo}
                    rivalInfo={rivalInfo}
                    time={time}
                    setTime={setTime}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    correctAnswer={correctAnswer}
                    rivalAnswer={rivalAnswer}
                    myOption={myOption}
                />
            }
        </>
    )
}

export default TwoPlayers