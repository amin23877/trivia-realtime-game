import React, { forwardRef } from "react";
import { ResultItem } from "pages/searchExplore/searchExploreComponents/ResultItem";

/*
 *  fake data
 * */
const previousViewedSearches = [];

/*
 * This component show previous viewed results if search box is empty
 * and show result for typed text in search box
 * */
export const SearchResult = forwardRef(({ searchText, results, className }, ref) => {
	const renderResult = (results) => results.map((result, index) => <ResultItem key={index} data={result} />);

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
				{searchText && results && renderResult(results)}
			</div>
		</div>
	);
});
