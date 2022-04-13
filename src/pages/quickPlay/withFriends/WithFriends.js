import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./WithFriends.scss";
import { useNavigate, useParams } from "react-router-dom";
import { GET_CATEGORIES_LIST } from "redux/actions/mainActions/generalActions";
import { SOCKET_BASE_URL } from "common/values/CORE";
import { io } from "socket.io-client";
import ShowQuestion from "../components/showQuestion/ShowQuestion";
import CategoriesList from "../components/categories/CategoriesList";
import EnterGameCode from "./EnterGameCode/EnterGameCode";
import FriendsList from "./FriendsList/FriendsList";
import StartTimer from "./startTimer/StartTimer";
import MpGameResult from "./gameResult/MpGameResult";

const WithFriends = ({ type = "quickPlay" }) => {
	const Dispatch = useDispatch();
	const navigate = useNavigate();
	let { id } = useParams();

	const categories = useSelector((state) => state.stateGeneral.categoriesList);
	const [selectedCategory, setSelectedCategory] = useState();
	const [mpQuestion, setMpQuestion] = useState();
	const [gameState, setGameState] = useState("EnterGameCode");
	const [socket, setSocket] = useState();
	const [authData, setAuthData] = useState();
	const [myInfo, setMyInfo] = useState({ player: "player1", score: 0 });
	const [time, setTime] = useState(20);
	const [questionNumber, setQuestionNumber] = useState(0);
	const [correctAnswer, setCorrectAnswer] = useState();
	const [myOption, setMyOption] = useState();
	const [gameResultData, setGameResult] = useState();
	const [mpGamesId, setMpGamesId] = useState();
	const [joinCode, setJoinCode] = useState("");
	const [users, setUsers] = useState([]);

	const socketUrl = SOCKET_BASE_URL;
	const token = localStorage.getItem("token") ? `${localStorage.getItem("token").replace("Bearer ", "")}` : null;

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
			setAuthData(e);
			setUsers([e]);
		});
		socketp.on("mpPlayerList", (e) => {
			setUsers([...e]);
		});
		socketp.on("mpGamesId", (e) => {
			setMpGamesId(e);
			// setJoinCode(e.categoryGameId);
		});
		socketp.on("entermp", (e) => {
			setGameState("friendsList");
		});
		socketp.on("mpready", () => {
			setGameState("startTimer");
		});

		socketp.on("mpquestion", handleMpQuestion);
		socketp.on("mpscore", handleMpScore);
		socketp.on("mpfinish", (e) => {
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
	}, [Dispatch, categories, token]);

	useEffect(() => {
		if (selectedCategory) {
			if (authData?.socketid) {
				switch (type) {
					case "quickPlay":
						socket.emit("setidmp", { CategoryId: selectedCategory._id, id: mpGamesId.categoryGameId });
						socket.emit("preparemp", { id: mpGamesId.categoryGameId });

						break;
					case "topic":
						socket.emit("setidmp", { TopicId: id, id: mpGamesId.topicGameId });
						socket.emit("preparemp", { id: mpGamesId.topicGameId });

						break;
				}

				setGameState("friendsList");
			} else {
				console.log("socketId Not Found", authData);
				alert("socket id not detected");
				document.location.reload();
			}
		}
	}, [selectedCategory]);

	const handleMpQuestion = (e) => {
		setTimeout(() => {
			setMpQuestion(e);
			setGameState("showQuestions");
			setCorrectAnswer(null);
			setMyOption(null);
		}, 1000);
	};

	const handleMpScore = (e) => {
		console.log("score", e);
		if (e.answer) {
			setCorrectAnswer(e.answer);
			setMyInfo({ ...myRef.current, score: myRef.current.score + e.score });
		}
	};

	const handleGotoBack = () => {
		setGameState("EnterGameCode");
	};

	const handleSelectCategory = (category) => {
		// setGameState("showWaitForStart");
		setSelectedCategory(category);
	};
	const handleSelectOption = (opt) => {
		socket.emit("answermp", { id: joinCode, answer: opt });
		setMyOption(opt);
	};
	const handleJoinWithCode = (opt) => {
		if (joinCode !== "") {
			socket.emit("entermp", { id: joinCode });
		}
	};
	const handleOpenCategories = () => {
		if (joinCode == "") {
			setJoinCode(type === "quickPlay" ? mpGamesId.categoryGameId : mpGamesId.topicGameId);
		}
		switch (type) {
			case "quickPlay":
				setGameState("showCategories");
				break;
			case "topic":
				setSelectedCategory({ _id: id });
				break;
			default:
				setGameState("showCategories");
				break;
		}
	};
	const handleLeaveGame = () => {
		if (joinCode !== "") {
			if (joinCode === (type === "quickPlay" ? mpGamesId.categoryGameId : mpGamesId.topicGameId)) {
				socket.emit("cancelmp", { id: joinCode });
			} else {
				socket.emit("exitmp", { id: joinCode });
			}
			navigate("/");
		}
	};
	const handleStartGame = () => {
		if (joinCode !== "") {
			if (joinCode === (type === "quickPlay" ? mpGamesId.categoryGameId : mpGamesId.topicGameId)) {
				socket.emit("startmp", { id: joinCode });
			}
		}
	};

	return (
		<>
			{gameState === "EnterGameCode" && (
				<EnterGameCode
					handleOpenCategories={handleOpenCategories}
					joinCode={joinCode}
					setJoinCode={setJoinCode}
					handleJoinWithCode={handleJoinWithCode}
				/>
			)}
			{gameState === "showCategories" && (
				<CategoriesList
					categories={categories}
					handleGotoBack={handleGotoBack}
					handleSelectCategory={handleSelectCategory}
				/>
			)}
			{gameState === "friendsList" && (
				<FriendsList
					joinCode={joinCode}
					categories={categories}
					handleGotoBack={handleGotoBack}
					handleSelectCategory={handleSelectCategory}
					users={users}
					mpGamesId={mpGamesId}
					handleLeaveGame={handleLeaveGame}
					handleStartGame={handleStartGame}
					type={type}
				/>
			)}
			{gameState === "startTimer" && <StartTimer />}
			{gameState === "showQuestions" && (
				<ShowQuestion
					singleGameQuestion={mpQuestion}
					handleSelectOption={handleSelectOption}
					myInfo={myInfo}
					single={true}
					withFriends={true}
					time={time}
					authData={authData}
					setTime={setTime}
					questionNumber={questionNumber}
					setQuestionNumber={setQuestionNumber}
					correctAnswer={correctAnswer}
					myOption={myOption}
				/>
			)}
			{gameState === "gameResult" && (
				<MpGameResult
					authData={authData}
					myInfo={myInfo}
					gameResultData={gameResultData}
					handleStartGame={handleStartGame}
					mpGamesId={mpGamesId}
					joinCode={joinCode}
					type={type}
				/>
			)}
		</>
	);
};

export default WithFriends;
