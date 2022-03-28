import { Button } from "@material-ui/core";
import arrowBack from "assets/images/icons/arrow-back.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EnterGameCode.scss";
import Text from "common/components/UI/text/Text";
const EnterGameCode = ({ handleOpenCategories, joinCode, setJoinCode, handleJoinWithCode }) => {
	const navigate = useNavigate();

	return (
		<div className="enter-game-code w-100 h-100">
			<div className="enter-game-code__header">
				<img onClick={() => navigate("/")} src={arrowBack} />
				<Text ns="play-with-friend" />
			</div>
			<div className="enter-game-code__join-code">
				<Text ns="enter-join-code" />
				<div className="enter-game-code__join-code--form">
					<input value={joinCode} onChange={(e) => setJoinCode(e.target.value)} />
					<Button
						onClick={handleJoinWithCode}
						className={`${joinCode == "" ? "enter-game-code__join-code--form--disabled" : ""}`}
						disabled={joinCode == ""}
					>
						<Text as="span" ns="join" />
					</Button>
				</div>
			</div>
			<div className="enter-game-code__create-game">
				<Text ns="create-game-msg" />
				<div className="enter-game-code__create-game--button">
					<Button onClick={handleOpenCategories}>
						<Text as="span" ns="create-game" />
					</Button>
				</div>
			</div>
		</div>
	);
};

export default EnterGameCode;
