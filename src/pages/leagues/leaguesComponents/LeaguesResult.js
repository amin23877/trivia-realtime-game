// Reacts
import React from "react";
// Hooks
import { useNavigate } from "react-router-dom";
// Packages
// Components, Services, Functions
// Redux
// Material - lab
// Styles, Icons, Images
import "./LeaguesResult.scss";

const LeaguesResult = () => {
	const isMyResult = false;

	const navigate = useNavigate();

	const handleGoBack = () => {
		navigate(-1);
	};

	const handlePlay = () => {
		console.log("TODO handlePlay");
	};

	return (
		<div className="w-100 h-100 d-flex flex-column justify-content-center align-items-center leaguesResult">
			<div className="d-flex flex-column justify-content-center align-items-center leaguesResult-header">
				<div className="avatar">{/* <img src={avatar} alt='' /> */}</div>
				<p className="score">High Score: 370</p>
			</div>

			<div className="w-100 leaguesResult-body">
				<div className="m-auto box-result">
					<div className="d-flex ressults bg-grey score">
						<p className="">Score</p>
						<p className="ml-auto">221</p>
					</div>

					<div className="d-flex ressults">
						<p className="">Correct Answers</p>
						<p className="ml-auto">12</p>
					</div>

					<div className="d-flex ressults bg-grey">
						<p className="">League Rank</p>
						<p className="ml-auto">9</p>
					</div>

					<div className="d-flex ressults reward">
						<p className="">Your Reward:</p>
						<p className="ml-auto">$80221</p>
					</div>
				</div>

				<div className="box-level">
					<p className="level">level 7</p>
				</div>
				<div className="m-auto box-btns">
					<button className="btns btn-play" onClick={handlePlay}>
						<span className="mx-1">Play again</span>
					</button>

					<button className="btns btn-back" onClick={handleGoBack}>
						<span className="mx-1">Back To League Page</span>
					</button>
				</div>
			</div>
		</div>
	);
};
export default LeaguesResult;
