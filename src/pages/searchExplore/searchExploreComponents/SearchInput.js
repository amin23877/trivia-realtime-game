import React, { forwardRef } from "react";
import searchIcon from "assets/images/icons/search-primary-icon.svg";
import { useTranslation } from "react-i18next";

export const SearchInput = forwardRef(({ inputProps }, ref) => {
	// apply main input style to className prop
	inputProps.className = (inputProps.className || "") + " explore-search-input";

	const { t } = useTranslation();

	return (
		<div ref={ref} className="position-relative">
			<input {...inputProps} type="text" placeholder={t("search")} />
			<span className="explore-search-button">
				<img alt="search" src={searchIcon} />
			</span>
		</div>
	);
});
