import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import { useNavigate } from "react-router-dom";
import { IMAGE_URL } from "common/values/CORE";

import "./CardInner.scss";

//images
import { ReactComponent as ShareIcon } from "assets/images/icons/share-black.svg";

/*
 * 	this component show topic (league) info on inner-topic (inner-league) page
 * */
const CardInner = ({ banner, title, subtitle, shareLink, children }) => {
	const navigate = useNavigate();

	const handleGoBack = () => {
		navigate(-1);
	};

	const handleShare = () => {};

	return (
		<div className="card-inner">
			<p className="card-inner__desktop-title">{title}</p>

			<div className="card-inner__card">
				<div
					className="card-inner__banner"
					style={{
						backgroundImage: `url("${IMAGE_URL}${banner}")`,
					}}
				>
					<p className="d-flex d-xl-none justify-content-center align-items-center" onClick={handleGoBack}>
						<ArrowBackIcon />
					</p>
					<p onClick={handleShare} className="d-flex d-xl-none justify-content-center align-items-center">
						<ShareOutlinedIcon />
					</p>
				</div>

				<div className="card-inner__info">
					<div className="d-flex flex-column flex-xl-row justify-content-between">
						<p className="card-inner__mobile-title">{title}</p>
						<p className="card-inner__subtitle">{subtitle}</p>
						<p onClick={handleShare} className="card-inner__share">
							<ShareIcon />
							Share
						</p>
					</div>

					{children}
				</div>
			</div>
		</div>
	);
};

export default CardInner;
