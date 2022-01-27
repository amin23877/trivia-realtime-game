import React, { useEffect, useRef, useState } from "react";
import { Tab, Tabs } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Footer from "common/components/footer/Footer";

import "./SearchExplore.scss";

// images
import searchIcon from "assets/images/icons/search-primary-icon.svg";
import rateIcon from "assets/images/icons/rate-mini.svg";
import profilePic from "assets/images/test/profile-pic.jpg";

/*
 *  fake data
 * */
const previousViewedSearches = [
	{ name: "Ali Dall", description: "5k players", logo: profilePic },
	{ name: "Ali Dall", rate: 4.8, logo: profilePic },
	{ name: "Ali Dall", description: "5k players", logo: profilePic },
	{ name: "Ali Dall", description: "5k players", logo: profilePic },
	{ name: "Ali Dall", description: "5k players", logo: profilePic },
];

/*
 *  this hook fetch results from api
 * */
const useSearch = (word) => {
	const [response, setResponse] = useState(null);

	const cache = useRef({});

	useEffect(() => {
		if (!word) return;

		if (cache.current[word]) {
			setResponse(cache.current[word]);
			return;
		}

		const Authorization = localStorage.getItem("token") ? `Bearer ${localStorage.getItem("token")}` : null;

		fetch(`https://quizup.site/api/topic?containstag=${word}`, {
			headers: { Authorization },
		})
			.then((r) => r.json())
			.then((r) => {
				cache.current[word] = r.result;
				setResponse(r.result);
			})
			.catch((e) => console.log(e));
	}, [word]);

	return response;
};

// customize mui tab
const StyledTab = withStyles({
	root: {
		minWidth: "25%",
		textTransform: "none",
		fontSize: 16,
		"&$selected": {
			color: "#6D6BE6",
		},
		"&:focus": {
			color: "#6D6BE6",
		},
	},
	selected: {},
})(Tab);

const StyledTabs = withStyles({
	indicator: {
		borderRadius: 2,
		backgroundColor: "#6D6BE6",
	},
})(Tabs);

const Search = (props) => {
	return (
		<div className="position-relative">
			<input {...props} className="explore-search-input" type="text" placeholder="Search" />
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
			<StyledTabs value={value} onChange={handleChange} aria-label="filter-result-tabs">
				<StyledTab label="All" />
				<StyledTab label="Tags" />
				<StyledTab label="People" />
				<StyledTab label="Topics" />
			</StyledTabs>
		</div>
	);
};

const ResultItem = ({ logo, name, description, rate }) => {
	return (
		<div className="explore-result-item">
			<div style={{ backgroundImage: `url("${logo}")` }} className="explore-result-item__avatar" />

			<div>
				<p className="explore-result-item__title">{name}</p>
				<p className="explore-result-item__desc">{description}</p>
				{rate && (
					<span className="explore-result-item__rate">
						<img alt="" width={9} src={rateIcon} /> {rate}
					</span>
				)}
			</div>
		</div>
	);
};

/*
 * This component show previous viewed results if search box is empty
 * and show result for typed text in search box
 * */
const SearchResult = ({ searchText }) => {
	const response = useSearch(searchText);

	const renderResult = (results) =>
		results.map((result, index) => (
			<ResultItem
				key={index}
				name={result.name}
				logo={result.logo}
				rate={result.rate}
				description={result.description}
			/>
		));

	return (
		<div className="explore-result-wrapper">
			<FilterResult />

			<div className="explore-result-header">
				<p>Recent searches</p>
				<p className="explore-result-remove">Remove</p>
			</div>

			<div className="explore-result-list">
				{!searchText && renderResult(previousViewedSearches)}
				{searchText && response && renderResult(response)}
			</div>
		</div>
	);
};

const SearchExplore = () => {
	const [searchText, setSearchText] = useState("");

	const handleSearchInput = (e) => setSearchText(e.target.value);

	return (
		<div className="explore-root">
			<Search value={searchText} onChange={handleSearchInput} />
			<SearchResult searchText={searchText} />
			<Footer />
		</div>
	);
};

export default SearchExplore;
