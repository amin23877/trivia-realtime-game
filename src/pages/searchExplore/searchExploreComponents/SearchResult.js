import React, { forwardRef } from "react";
import { ResultItem } from "pages/searchExplore/searchExploreComponents/ResultItem";
import Text from "common/components/UI/text/Text";

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
					<Text ns="recent-search" />
					<Text ns="remove" className="explore-result-remove" />
				</div>
			)}

			<div className="explore-result-list">
				{!searchText && renderResult(previousViewedSearches)}
				{searchText && results && renderResult(results)}
			</div>
		</div>
	);
});
