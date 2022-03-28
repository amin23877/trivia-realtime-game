import React from "react";
import ShareModal from "common/components/modals/ShareModal";
import Text from "common/components/UI/text/Text";
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
const CardInner = ({ banner, title, type, subtitle, children, bannerSize = 110, rounded = true }) => {
	const navigate = useNavigate();

	const handleGoBack = () => {
		navigate(-1);
	};

	return (
		<div className="card-inner">
			<p className="card-inner__desktop-title">{title}</p>

			<div className={`card-inner__card ${rounded ? "card-inner__card_rounded" : ""}`}>
				<div
					className="card-inner__banner"
					style={{
						backgroundImage: `url("${IMAGE_URL}${banner}")`,
						minHeight: bannerSize,
					}}
				>
					<p
						className="d-flex d-xl-none justify-content-center align-items-center _backdrop-filter"
						onClick={handleGoBack}
					>
						<ArrowBackIcon />
					</p>

					<ShareModal
						title={type}
						renderButton={(handleOpen) => (
							<p
								onClick={handleOpen}
								className="d-flex d-xl-none justify-content-center align-items-center _backdrop-filter"
							>
								<ShareOutlinedIcon />
							</p>
						)}
					/>
				</div>

				<div className="card-inner__info">
					<div className="d-flex flex-column flex-xl-row justify-content-between">
						<p className="card-inner__mobile-title">{title}</p>

						<p className="card-inner__subtitle">{subtitle}</p>

						<ShareModal
							title={type}
							renderButton={(handleOpen) => (
								<p onClick={handleOpen} className="card-inner__share">
									<ShareIcon />
									<Text ns="share" />
								</p>
							)}
						/>
					</div>

					{children}
				</div>
			</div>
		</div>
	);
};

export default CardInner;
