// Reacts
import React from "react";
import { Link } from "react-router-dom";

// Styles, Icons, Images
import "./CardTopic.scss";
import { IMAGE_URL } from "common/values/CORE";
import iconRate from "assets/images/icons/rate-mini.svg";

const CardTopic = ({ data }) => {
	return (
		<Link to={`/topics/${data._id}`}>
			<div className="_wh-100 cardTopic">
				<div className="card-img">
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
		</Link>
	);
};
export default CardTopic;
