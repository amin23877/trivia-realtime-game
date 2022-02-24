import React, { useRef, useState } from "react";
import { useWhenClickOutside } from "common/hooks/useWhenClickOutside";
import { SearchInput } from "pages/searchExplore/searchExploreComponents/SearchInput";
import { SearchResult } from "pages/searchExplore/searchExploreComponents/SearchResult";
import { useSearch } from "pages/searchExplore/useSearch";

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

	const results = useSearch(searchText);

	return (
		<div className="explore-root explore-root_box">
			<SearchInput
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
				results={results}
				className={inputIsActive ? "explore-result-wrapper_open" : ""}
			/>

			<div className={`explore-root__overlay ${inputIsActive ? "explore-root__overlay_open" : ""}`} />
		</div>
	);
};
