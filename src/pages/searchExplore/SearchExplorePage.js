import React, { forwardRef, useEffect, useRef, useState } from "react";
import { Navigate } from "react-router-dom";
import { useMediaQuery } from "@material-ui/core";
import Avatar from "common/components/UI/Avatar";

import "./SearchExplore.scss";

// images
import searchIcon from "assets/images/icons/search-primary-icon.svg";
import rateIcon from "assets/images/icons/rate-mini.svg";
import profilePic from "assets/images/test/profile-pic.jpg";
import ApiCall from "common/services/ApiCall";
import { IMAGE_URL } from "common/values/CORE";

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
 * 	this hook get an array of refs that applied to nodes
 * 	and invoked callback when click outside these nodes
 * */
const useWhenClickOutside = (refs, callback) => {
	useEffect(() => {
		const handleEvent = (e) => {
			for (const ref of refs) {
				// Do nothing if clicking ref's element or descendent elements
				if (!ref.current || ref.current.contains(e.target)) {
					return;
				}
			}

			callback();
		};

		document.addEventListener("mouseup", handleEvent);
		document.addEventListener("touchend", handleEvent);

		return () => {
			document.removeEventListener("mouseup", handleEvent);
			document.removeEventListener("touchend", handleEvent);
		};
	}, [callback, refs]);
};

/*
 *  this hook fetch results from api
 * */
const api = new ApiCall();

const useSearch = (word) => {
	const [response, setResponse] = useState(null);

	const cache = useRef({});

	useEffect(() => {
		if (!word) return;

		if (cache.current[word]) {
			setResponse(cache.current[word]);
			return;
		}

		api.get(`/topic?containstag=${word}`)
			.then(({ data }) => {
				cache.current[word] = data.result;
				console.log(data.result);
				setResponse(data.result);
			})
			.catch((e) => console.log(e));
	}, [word]);

	return response;
};

const Search = forwardRef(({ inputProps }, ref) => {
	// apply main input style to className prop
	inputProps.className = inputProps.className.concat(" explore-search-input");

	return (
		<div ref={ref} className="position-relative">
			<input {...inputProps} type="text" placeholder="Search" />
			<span className="explore-search-button">
				<img alt="search" src={searchIcon} />
			</span>
		</div>
	);
});

const ResultItem = ({ logo, name, description, rate }) => {
	return (
		<div className="explore-result-item">
			<Avatar src={IMAGE_URL + encodeURI(logo)} size={{ mobile: 40, desktop: 44 }} />

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
const SearchResult = forwardRef(({ searchText, className }, ref) => {
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
		<div ref={ref} className={`explore-result-wrapper ${className}`}>
			{!searchText && (
				<div className="explore-result-header">
					<p>Recent searches</p>
					<p className="explore-result-remove">Remove</p>
				</div>
			)}

			<div className="explore-result-list">
				{!searchText && renderResult(previousViewedSearches)}
				{searchText && response && renderResult(response)}
			</div>
		</div>
	);
});

// used in desktop header
export const SearchExploreBox = () => {
	const list = useRef();
	const input = useRef();

	const [searchText, setSearchText] = useState("");
	const [inputIsActive, setInputIsActive] = useState(false);

	const handleSearchInput = (e) => setSearchText(e.target.value);

	const handleActivate = () => setInputIsActive(true);

	// close box when click outside it
	useWhenClickOutside([list, input], () => {
		setInputIsActive(false);
	});

	return (
		<div className="explore-root explore-root_box">
			<Search
				ref={input}
				inputProps={{
					value: searchText,
					onChange: handleSearchInput,
					onFocus: handleActivate,
					className: inputIsActive ? "explore-search-input_active" : "",
				}}
			/>

			<SearchResult
				ref={list}
				searchText={searchText}
				className={inputIsActive ? "explore-result-wrapper_open" : ""}
			/>

			<div className={`explore-root__overlay ${inputIsActive ? "explore-root__overlay_open" : ""}`} />
		</div>
	);
};

// used on mobile ( '/search' route )
const SearchExplorePage = () => {
	const isDesktop = useMediaQuery("(min-width: 1366px)");

	const [searchText, setSearchText] = useState("");

	const handleSearchInput = (e) => setSearchText(e.target.value);

	/*
	 * 	because there is no search page on desktop
	 * 	if in desktop user navigate to '/search' address ,return it to home page
	 * */
	if (isDesktop) {
		return <Navigate to="/" />;
	}

	return (
		<div className="explore-root">
			<Search
				inputProps={{
					value: searchText,
					onChange: handleSearchInput,
				}}
			/>

			<SearchResult searchText={searchText} />
		</div>
	);
};

export default SearchExplorePage;
