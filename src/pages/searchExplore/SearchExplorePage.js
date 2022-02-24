import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useMediaQuery } from "@material-ui/core";
import { DESKTOP_BREAKPOINT } from "common/values/CORE";
import { SearchInput } from "pages/searchExplore/searchExploreComponents/SearchInput";
import { SearchResult } from "pages/searchExplore/searchExploreComponents/SearchResult";
import { useSearch } from "pages/searchExplore/useSearch";

import "./SearchExplore.scss";

// used on mobile ( '/search' route )
const SearchExplorePage = () => {
	const isDesktop = useMediaQuery(`(min-width: ${DESKTOP_BREAKPOINT})`);

	const [searchText, setSearchText] = useState("");

	const handleSearchInput = (e) => setSearchText(e.target.value);

	const results = useSearch(searchText);

	/*
	 * 	because there is no search page on desktop
	 * 	if in desktop user navigate to '/search' address ,return it to home page
	 * */
	if (isDesktop) {
		return <Navigate to="/" />;
	}

	return (
		<div className="explore-root">
			<SearchInput
				inputProps={{
					value: searchText,
					onChange: handleSearchInput,
				}}
			/>

			<SearchResult results={results} searchText={searchText} />
		</div>
	);
};

export default SearchExplorePage;
