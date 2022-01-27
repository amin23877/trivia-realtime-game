import React from "react";

import "./HomeTopics.scss";
import imgMain from "assets/images/test/1.png";
import iconRate from "assets/images/icons/rate-mini.svg";

const HomeTopics = ({ topics }) => {
	console.log(topics);
	return (
		<div className="w-100 h-100 d-flex justify-content-between align-items-stretch homeTopics">
			{topics?.map((el, index) => (
				<div key={index} className="topic-card">
					<div className="card-img">
						<img src={imgMain} alt="" />
					</div>
					<div className="d-flex flex-column justify-content-between card-info">
						<p className="title">{el.title}</p>
						<div className="d-flex justify-content-between align-items-center">
							<p className="subtitle">{el.subTitle}</p>
							<p className="rate">
								<img className="mx-1" src={iconRate} alt="" />
								<span>{el.rate}</span>
							</p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default HomeTopics;
