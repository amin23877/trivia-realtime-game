import React from "react";
import { Tab, Tabs } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Footer from "../../common/components/footer/Footer";

import "./SearchExplore.scss";

// images
import searchIcon from "../../assets/images/icons/search-primary-icon.svg";
import rateIcon from "../../assets/images/icons/rate-mini.svg";
import hashtagIcon from "../../assets/images/icons/hashtag.svg";
import profilePic from "../../assets/images/test/profile-pic.jpg";

// customize mui tab
const StyledTab = withStyles({
	root: {
		minWidth: "25%",
	},
})(Tab);

const Search = () => {
	return (
		<div className="position-relative">
			<input className="explore-search-input" type="text" placeholder="Search" />
			<span className="explore-search-button">
				<img alt="search" src={searchIcon} />
			</span>
		</div>
	);
};

const FilterResult = () => {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className="explore-result-filter">
			<Tabs
				value={value}
				textColor="primary"
				indicatorColor="primary"
				onChange={handleChange}
				aria-label="filter-result-tabs"
			>
				<StyledTab label="All" />
				<StyledTab label="Tags" />
				<StyledTab label="People" />
				<StyledTab label="Topics" />
			</Tabs>
		</div>
	);
};

const ResultItem = ({ hashtag, avatar, title, description, rate }) => {
	return (
		<div className="explore-result-item">
			{hashtag ? (
				<div className="explore-result-item__hashtag">
					<img alt="hashtag" src={hashtagIcon} />
				</div>
			) : (
				<div style={{ backgroundImage: `url("${avatar}")` }} className="explore-result-item__avatar" />
			)}

			<div>
				<p className="explore-result-item__title">{title}</p>
				<p className="explore-result-item__desc">{description}</p>
				{rate && (
					<span className="explore-result-item__rate">
						<img alt="" width={12} src={rateIcon} /> {rate}
					</span>
				)}
			</div>
		</div>
	);
};

const ExploreResult = () => {
	return (
		<div className="explore-result-wrapper">
			<FilterResult />

			<div className="explore-result-header">
				<p>Recent searches</p>
				<p className="explore-result-remove">Remove</p>
			</div>

			<div className="explore-result-list">
				<ResultItem hashtag title="Ali Dall" description="5k players" />
				<ResultItem avatar={profilePic} title="Ali Dall" description="5k players" />
				<ResultItem avatar={profilePic} title="Ali Dall" description="5k players" />
				<ResultItem avatar={profilePic} title="Ali Dall" rate={4.8} />
			</div>
		</div>
	);
};

const SearchExplore = () => {
	return (
		<div className="explore-root">
			<Search />
			<ExploreResult />
			<Footer />
		</div>
	);
};

export default SearchExplore;
