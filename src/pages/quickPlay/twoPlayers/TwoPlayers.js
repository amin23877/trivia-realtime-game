import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./TwoPlayers.scss";
import { useNavigate } from "react-router-dom";
import { GET_CATEGORIES_LIST } from "redux/actions/mainActions/generalActions";
import SearchForPlayer from "./searchForPlayer/SearchForPlayer";
import { SOCKET_BASE_URL } from "common/values/CORE";
import { io } from "socket.io-client";
import WaitForStart from "./waitForStart/WaitForStart";
import ShowQuestion from "../components/showQuestion/ShowQuestion";
import CategoriesList from "../components/categories/CategoriesList";
import GameResult from "./gameResult/GameResult";

const TwoPlayers = () => {
	const Dispatch = useDispatch();
	const navigate = useNavigate();

	const categories = useSelector((state) => state.stateGeneral.categoriesList);
	const [selectedCategory, setSelectedCategory] = useState();
	const [doubleGameReady, setDoubleGameReady] = useState();
	const [doubleGameQuestion, setDoubleGameQuestion] = useState();
	const [gameState, setGameState] = useState("showCategories");
	const [socket, setSocket] = useState();
	const [socketId, setSocketId] = useState();
	const [myInfo, setMyInfo] = useState({ player: "player1", score: 0 });
	const [rivalInfo, setRivalInfo] = useState({ player: "player2", score: 0 });
	const [time, setTime] = useState(20);
	const [questionNumber, setQuestionNumber] = useState(0);
	const [correctAnswer, setCorrectAnswer] = useState();
	const [rivalAnswer, setRivalAnswer] = useState();
	const [myOption, setMyOption] = useState();
	const [gameResultData, setGameResult] = useState();

	const socketUrl = SOCKET_BASE_URL;
	const token = localStorage.getItem("token") ? `${localStorage.getItem("token")}` : null;

	const myRef = useRef(myInfo);
	const rivalRef = useRef(rivalInfo);

	useEffect(() => {
		myRef.current = myInfo;
		rivalRef.current = rivalInfo;
	}, [myInfo, rivalInfo]);
	useEffect(() => {
		const socketp = io(socketUrl, { transports: ["websocket"] });
		setSocket(socketp);
		socketp.on("connect", () => {
			console.log("connected");
			socketp.emit("auth", { token });
		});

		socketp.on("authentication", (e) => {
			setSocketId(e.socketid);
		});
		socketp.on("doubleGameReady", handleDoubleGameReady);
		socketp.on("doubleGame", (e) => {
			// console.log("doubleGame", e);
		});
		socketp.on("doubleGameQuestion", handleDoubleGameQuestion);
		socketp.on("doubleGameScore", handleDoubleGameScore);
		socketp.on("doubleGameFinish", (e) => {
			setGameState("gameResult");
			setGameResult(e);
			socketp.close();
		});
	}, []);

	useEffect(() => {
		if (!categories) {
			// alert('ok!')
			Dispatch(GET_CATEGORIES_LIST(token));
		} else {
			// alert(categories.length)
		}
	}, [categories]);

	useEffect(() => {
		if (selectedCategory) {
			if (socketId) {
				socket.emit("doubleGame", { CategoryId: selectedCategory._id });
			}
		}
	}, [selectedCategory]);
	// console.log('selectedCategory', selectedCategory)
	// console.log('socket', socket)
	const handleDoubleGameReady = (e) => {
		setDoubleGameReady(e);
		setGameState("showWaitForStart");
		localStorage.setItem("quickPlay-token", e.token);
		setMyInfo({ ...myInfo, player: e.player1.phone == localStorage.getItem("phone") ? "player1" : "player2" });
		setRivalInfo({
			...rivalInfo,
			player: e.player1.phone == localStorage.getItem("phone") ? "player2" : "player1",
		});
	};
	const handleDoubleGameQuestion = (e) => {
		setTimeout(() => {
			setDoubleGameQuestion(e);
			setGameState("showQuestions");
			setCorrectAnswer(null);
			setRivalAnswer(null);
			setMyOption(null);
		}, 1000);
	};

	const handleDoubleGameScore = (e) => {
		console.log("score", e);
		if (e.answer) {
			setCorrectAnswer(e.answer);
		} else {
			setRivalAnswer(() => {
				console.log("rival", rivalRef.current);
				console.log("me", myRef.current);
				return e[`${rivalRef.current.player}Answer`];
			});
			setMyInfo({ ...myRef.current, score: myRef.current.score + e[`${myRef.current.player}Score`] });
			setRivalInfo({ ...rivalRef.current, score: rivalRef.current.score + e[`${rivalRef.current.player}Score`] });
		}
		// setDoubleGameQuestion(e);
		// setGameState('showQuestions');
	};

	const handleGotoBack = () => {
		navigate("/");
	};

	const handleSelectCategory = (category) => {
		setGameState("showSearchForPlayer");
		setSelectedCategory(category);
	};
	const handleCloseSearch = () => {
		setSelectedCategory(null);
		setGameState("showCategories");
		// socket.io.disconnect();
		// socket.io.open();
	};
	const handleSelectOption = (opt) => {
		socket.emit("doubleGameAnswer", { gameToken: localStorage.getItem("quickPlay-token"), answer: opt });
		setMyOption(opt);
	};

	return (
		<>
			{(gameState == "showCategories" || gameState == "showSearchForPlayer") && (
				<CategoriesList
					categories={categories}
					handleGotoBack={handleGotoBack}
					handleSelectCategory={handleSelectCategory}
				/>
			)}
			{gameState == "showSearchForPlayer" && (
				<SearchForPlayer handleClose={handleCloseSearch} selectedCategory={selectedCategory} />
			)}

			{gameState == "showWaitForStart" && <WaitForStart doubleGameReady={doubleGameReady} />}
			{gameState == "showQuestions" && (
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
			)}
			{gameState == "gameResult" && (
				<GameResult
					myInfo={myInfo}
					rivalInfo={rivalInfo}
					gameResultData={gameResultData}
					doubleGameReady={doubleGameReady}
				/>
			)}
		</>
	);
};

export default TwoPlayers;
