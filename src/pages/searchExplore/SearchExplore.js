import React, { useEffect, useRef, useState } from "react";

import "./SearchExplore.scss";

// images
import searchIcon from "assets/images/icons/search-primary-icon.svg";
import rateIcon from "assets/images/icons/rate-mini.svg";
import profilePic from "assets/images/test/profile-pic.jpg";
import Avatar from "common/components/UI/Avatar";

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

const ResultItem = ({ logo, name, description, rate }) => {
	return (
		<div className="explore-result-item">
			<Avatar src={logo} size={{ mobile: 40, desktop: 44 }} />

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
const SearchResult = ({ searchText, inputIsActive }) => {
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
		<div className={`explore-result-wrapper ${inputIsActive ? "explore-result-wrapper_open" : ""}`}>
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

export const SearchExploreBox = () => {
	const [searchText, setSearchText] = useState("");
	const [inputIsActive, setInputIsActive] = useState(false);

	const handleSearchInput = (e) => setSearchText(e.target.value);

	const handleActivate = () => setInputIsActive(true);
	const handleDeactivate = () => setInputIsActive(false);

	return (
		<div className="explore-root explore-root_box">
			<Search
				value={searchText}
				onChange={handleSearchInput}
				onFocus={handleActivate}
				onBlur={handleDeactivate}
			/>

			<SearchResult inputIsActive={inputIsActive} searchText={searchText} />

			<div className={`explore-root__overlay ${inputIsActive ? "explore-root__overlay_open" : ""}`} />
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
		</div>
	);
};

export default SearchExplore;
