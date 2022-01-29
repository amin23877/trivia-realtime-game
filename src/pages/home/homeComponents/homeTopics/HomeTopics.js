// Reacts
import React from "react";
// Hooks
// Packages
// Components, Services, Functions
import { IMAGE_URL } from "common/values/CORE";
// Redux
import { useSelector } from "react-redux";
// Material - lab
// Styles, Icons, Images
import "./HomeTopics.scss";
import imgMain from "assets/images/test/1.png";
import iconRate from "assets/images/icons/rate-mini.svg";

const HomeTopics = ({ type }) => {
	const stateTopic = useSelector((state) => state.stateTopic);
	const topics = stateTopic.topics.filter((el) => el.type === type)[0]?.topicList;

	return (
		<div className="w-100 h-100 d-flex justify-content-between align-items-stretch homeTopics">
			{topics?.map((el, index) => (
				<div key={index} className="topic-card">
					<div className="card-img">
						<img src={`${IMAGE_URL}${el?.logo}`} alt="" />
						{/* <img src={imgMain} alt="" /> */}
					</div>
					<div className="d-flex flex-column justify-content-between card-info">
						<p className="title">{el?.name}</p>
						<div className="d-flex justify-content-between align-items-center">
							<p className="subtitle">{`${el?.singlePlays} plays`}</p>
							<p className="rate">
								<img className="mx-1" src={iconRate} alt="" />
								<span>{el?.rate}</span>
							</p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default HomeTopics;
