// Reacts
import React from "react";
import { Link } from "react-router-dom";

// Styles, Icons, Images
import "./CardTopic.scss";
import { IMAGE_URL } from "common/values/CORE";

const CardTopic = ({ data }) => {
	return (
		<Link to={`/topics/${data._id}`}>
			<div className="_wh-100 cardTopic">
				<div className="card-img">
					<img src={`${IMAGE_URL}${data?.logo}`} alt="" />
				</div>
				<div className="d-flex flex-column justify-content-between card-info">
					<p className="title">{data?.name}</p>
					<div className="d-flex align-items-center gap-1">
						<p className="subtitle">{data.categoryName}</p>
						<span> / </span>
						<p className="subtitle">{data?.singlePlays || 0 + data?.doublePlays || 0} plays</p>
					</div>
				</div>
			</div>
		</Link>
	);
};
export default CardTopic;
