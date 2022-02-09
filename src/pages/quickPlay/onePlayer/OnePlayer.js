import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./OnePlayer.scss";
import { useNavigate, useParams } from "react-router-dom";
import { GET_CATEGORIES_LIST } from "redux/actions/mainActions/generalActions";
import { SOCKET_BASE_URL } from "common/values/CORE";
import { io } from "socket.io-client";
import WaitForStart from "./waitForStart/WaitForStart";
import ShowQuestion from "../components/showQuestion/ShowQuestion";
import CategoriesList from "../components/categories/CategoriesList";
import GameResult from "./gameResult/GameResult";

const OnePlayer = ({ type = 'quickPlay' }) => {
	const Dispatch = useDispatch();
	const navigate = useNavigate();
	let { id } = useParams();
	console.log('type', type)
	const categories = useSelector((state) => state.stateGeneral.categoriesList);
	const [selectedCategory, setSelectedCategory] = useState();
	const [singleGameQuestion, setSingleGameQuestion] = useState();
	const [gameState, setGameState] = useState(type === 'quickPlay' ? "showCategories" : 'showWaitForStart');
	const [socket, setSocket] = useState();
	const [authData, setAuthData] = useState();
	const [myInfo, setMyInfo] = useState({ player: "player1", score: 0 });
	const [time, setTime] = useState(20);
	const [questionNumber, setQuestionNumber] = useState(0);
	const [correctAnswer, setCorrectAnswer] = useState();
	const [myOption, setMyOption] = useState();
	const [gameResultData, setGameResult] = useState();

	const socketUrl = SOCKET_BASE_URL;
	const token = localStorage.getItem("token") ? `${localStorage.getItem("token").replace('Bearer ', '')}` : null;

	const myRef = useRef(myInfo);
	const socketRef = useRef(socket);

	useEffect(() => {
		myRef.current = myInfo;
		socketRef.current = socket;
	}, [myInfo, socket]);

	useEffect(() => {
		const socketp = io(socketUrl, { transports: ["websocket"] });
		setSocket(socketp);
		socketp.on("connect", () => {
			console.log("connected");
			socketp.emit("auth", { token });
		});

		socketp.on("authentication", (e) => {
			setAuthData(e)
			if (type == 'topic' || type == 'league') {
				console.log('id is', id)
				setSelectedCategory({ _id: id })
			}
		});
		socketp.on("singleGameToken", handleSingleGameToken);
		socketp.on("singleGameQuestion", handleSingleGameQuestion);
		socketp.on("singleGameScore", handleSingleGameScore);
		socketp.on("singleGameFinish", (e) => {
			setTimeout(() => {
				setGameState("gameResult");
				setGameResult(e);
				// socketp.close();
			}, 1000);
		});
	}, []);

	useEffect(() => {
		if (!categories) {
			Dispatch(GET_CATEGORIES_LIST(token));
		}
	}, [categories]);

	useEffect(() => {
		if (selectedCategory) {
			if (authData.socketid) {
				switch (type) {
					case 'quickPlay':
						socket.emit("singleGame", { CategoryId: selectedCategory._id });
						break;
					case 'topic':
						socket.emit("singleGame", { TopicId: id });
						break;
					case 'league':
						socket.emit("singleGame", { OnePlayerLeagueId: id });
						break;
				}
			}
		}
	}, [selectedCategory]);

	const handleSingleGameToken = (e) => {
		console.log("eee", e);
		localStorage.setItem("quickPlay-token", e.token);
		socketRef.current.emit("singleGameStart", { gameToken: e.token });
	};
	const handleSingleGameQuestion = (e) => {
		setTimeout(() => {
			setSingleGameQuestion(e);
			setGameState("showQuestions");
			setCorrectAnswer(null);
			setMyOption(null);
		}, 1000);
	};

	const handleSingleGameScore = (e) => {
		console.log("score", e);
		setCorrectAnswer(e.answer);
		setMyInfo({ ...myRef.current, score: myRef.current.score + e.score });
	};

	const handleGotoBack = () => {
		switch (type) {
			case 'quickPlay':
				navigate('/');

				break;
			case 'topic':
				navigate("/topics/" + id);
				break;
			case 'league':
				navigate("/leagues/" + id);
				break;
		}
	};

	const handleSelectCategory = (category) => {
		setGameState("showWaitForStart");
		setSelectedCategory(category);
	};
	const handleSelectOption = (opt) => {
		socket.emit("singleGameAnswer", { gameToken: localStorage.getItem("quickPlay-token"), answer: opt });
		setMyOption(opt);
	};
	const handlePlayAgain = () => {
		if (type == 'quickPlay') {
			setSelectedCategory(null)
			setGameState("showCategories");
		} else {
			setSelectedCategory({ _id: id })
			setGameState("showWaitForStart");
		}
		setSingleGameQuestion(null)
		setMyInfo({ player: "player1", score: 0 })
		setTime(20)
		setQuestionNumber(0)
		setCorrectAnswer(null)
		setMyOption(null)
		setGameResult(null)
	}

	return (
		<>
			{gameState == "showCategories" && (
				<CategoriesList
					categories={categories}
					handleGotoBack={handleGotoBack}
					handleSelectCategory={handleSelectCategory}
				/>
			)}
			{gameState == "showWaitForStart" && <WaitForStart />}
			{gameState == "showQuestions" && (
				<ShowQuestion
					singleGameQuestion={singleGameQuestion}
					handleSelectOption={handleSelectOption}
					myInfo={myInfo}
					single={true}
					time={time}
					setTime={setTime}
					questionNumber={questionNumber}
					setQuestionNumber={setQuestionNumber}
					correctAnswer={correctAnswer}
					myOption={myOption}
					authData={authData}
				/>
			)}
			{gameState == "gameResult" && <GameResult handlePlayAgain={handlePlayAgain} myInfo={myInfo} gameResultData={gameResultData} />}
		</>
	);
};

export default OnePlayer;
