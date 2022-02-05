import React from "react";
import PropTypes from "prop-types";

//----assets
import "./PerformanceContentSection.scss";
//----components
import { Link } from "react-router-dom";

const PerformanceContentSection = ({ title, seeMoreLink, children }) => {
	return (
		<div className="performance-content-section">
			<p className="profile-performance--title">{title}</p>
			<div className="performance-content-section--contents">
				{children}
				<div className="performance-content-section--contents__footer">
					<Link to={seeMoreLink}>See more</Link>
				</div>
			</div>
		</div>
	);
};

PerformanceContentSection.propTypes = {
	title: PropTypes.string,
	seeMoreLink: PropTypes.string,
	children: PropTypes.node,
};
export default PerformanceContentSection;
