// Reacts
import React from "react";
// Hooks
import { useNavigate } from "react-router-dom";
// Packages
// Components, Services, Functions
import { MOCK_LEADERS } from "common/mocks/MOCK";
import { MOCK_CARDINFO } from "common/mocks/MOCK";
import CountdownTimer from "common/components/CountdownTimer/CountDownTimer";
// Redux
// Material - lab
// Styles, Icons, Images
import "./LeaguesInner.scss";
import Countdown from "react-countdown";
import CloseIcon from "@material-ui/icons/Close";
import PersonIcon from "@material-ui/icons/Person";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";

const LeaguesInner = () => {
	const playerNum = 2;
	const timeRemain = 45050;

	const styleBgImg = {
		// background: `url('...')`,
	};

	const mockLeaders = MOCK_LEADERS;
	const mockLeadersBest = [mockLeaders[0], mockLeaders[1], mockLeaders[2]];
	const mockLeadersOther = mockLeaders;

	const navigate = useNavigate();

	const handleGoBack = () => {
		navigate(-1);
	};

	const handleStop = (e) => {
		console.log(e);
	};

	const handlePlay = () => {
		console.log("TODO handlePlay");
	};

	return (
		<div className="w-100 h-100 leaguesInner">
			<div className="leaguesInner-header">
				<div className="d-flex justify-content-between align-items-center sec-img" style={styleBgImg}>
					<p className="d-flex justify-content-center align-items-center" onClick={handleGoBack}>
						<CloseIcon />
					</p>
					<p className="d-flex justify-content-center align-items-center">
						<ShareOutlinedIcon />
					</p>
				</div>

				<div className="sec-info">
					<p className="title">Grand League of Genes and Inheritance</p>
					<p className="subtitle">Topic: Biology and living things</p>
					<div className="pt-2 d-flex justify-content-between align-items-center">
						<div id="primaryWhiteBlack" className="d-flex timer">
							<Countdown
								date={Date.now() + timeRemain * 1000}
								renderer={CountdownTimer}
								onComplete={(e) => handleStop(e)}
							/>
						</div>

						<p className="grey">
							{playerNum > 1 ? <SupervisorAccountIcon /> : <PersonIcon />}
							<span className="mx-1">{`${playerNum} player`}</span>
						</p>
					</div>
				</div>
			</div>

			<div className="leaguesInner-body">
				<div className="description">
					<p className="title">Description:</p>
					<p className="text">
						Considering the great and undeniable importance of genes in the life of every creature on this
						planet, I decided to design this league to make you better and more familiar with your own genes
						and the different races of humanity. It goes without saying that there are special prizes for
						the winners of this league I will be happy if you participate in this challenge
					</p>
				</div>

				<div className="awards">
					<p className="title">Winners Awards:</p>
					<p>
						<span className="key">first one:</span>
						<span className="mx-2 value">$ 250</span>
					</p>
					<p>
						<span className="key">second one:</span>
						<span className="mx-2 value">$ 200</span>
					</p>
					<p>
						<span className="key">Third one:</span>
						<span className="mx-2 value">$ 180</span>
					</p>
					<p>
						<span className="key">Fourth to tenth one:</span>
						<span className="mx-2 value">$ 90</span>
					</p>
				</div>

				<div className="board">
					<p className="title">Latest results:</p>
					<p className="subtitle">Your position: 0</p>

					<div className="best">
						<div className="d-flex best-users">
							{mockLeadersBest.map((el, index) => (
								<div key={index} className={`user ${index === 1 ? "best-user" : ""}`}>
									<div className="mx-auto avatar"></div>
									<p className="username">{el.username}</p>
									<p className="points">{`${el.points} points`}</p>
									<p className="reward">{`$ ${el.reward}`}</p>
								</div>
							))}
						</div>

						<div className="d-flex align-items-center levels">
							<div className="level level-2">2</div>
							<div className="level level-1">1</div>
							<div className="level level-3">3</div>
						</div>
					</div>
					<div className="results">
						<div className="d-flex headers">
							<p className="clm reward">reward</p>
							{playerNum > 1 ? <p className="clm points">points</p> : null}

							<p className="clm score">score</p>
						</div>
						{mockLeadersOther.map((el, index) => (
							<div key={index} className="d-flex align-items-center _br-bottom user">
								<span className="index">{`${index + 4}.`}</span>
								<div className="avatar"></div>
								<p className="username">{el.username}</p>
								<p className="clm reward">{`$ ${el.reward}`}</p>
								{playerNum > 1 ? <p className="clm points">{`${el.points}`}</p> : null}
								<p className="clm score">{`${el.score}`}</p>
							</div>
						))}

						<p className="seemore">See more</p>
					</div>
				</div>
			</div>

			<div className="d-flex justify-content-center align-items-center leaguesInner-footer">
				<button className="btn-play" onClick={handlePlay}>
					<span className="mx-1">Play Now</span>
				</button>
			</div>
		</div>
	);
};

export default LeaguesInner;
