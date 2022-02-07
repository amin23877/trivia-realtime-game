// Reacts
import { IMAGE_URL } from "common/values/CORE";
import React from "react";
// Hooks
// Packages
// Components, Services, Functions
// Redux
// Material - lab
// Styles, Icons, Images
import "./CardTopic.scss";
import iconRate from "assets/images/icons/rate-mini.svg";

const CardTopic = ({ data }) => {
	return (
		<div className="_wh-100 cardTopic">
			<div className="_wh-100 card-img">
				<img src={`${IMAGE_URL}${data?.logo}`} alt="" />
			</div>
			<div className="d-flex flex-column justify-content-between card-info">
				<p className="title">{data?.name}</p>
				<div className="d-flex justify-content-between align-items-center">
					<p className="subtitle">{`${data?.singlePlays || 0 + data?.doublePlays || 0} plays`}</p>
					<p className="rate">
						<img className="mx-1" src={iconRate} alt="" />
						<span>{data?.rate}</span>
					</p>
				</div>
			</div>
		</div>
	);
};
export default CardTopic;
