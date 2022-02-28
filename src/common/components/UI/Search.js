import React, { useState } from "react";
import PropTypes from "prop-types";

//---assets
import "./Search.scss";

const Search = ({
	/**
	 * This callback will be called when user submit the form
	 * @param value value entered by user into the search box will be passed to this callback as the first argument
	 * @example
	 * ```js
	 * <Search cb={(value) => doSomething...} />
	 * ```
	 */
	cb,
	placeholder,
}) => {
	const [value, setValue] = useState("");
	const submitSearchHandler = (e) => {
		e.preventDefault();
		cb(value);
		setValue("");
	};
	return (
		<form onSubmit={submitSearchHandler} className="search--box">
			<input
				className="search--box__input"
				value={value}
				placeholder={placeholder}
				onChange={(e) => setValue(e.currentTarget.value)}
				autoComplete="off"
			/>
			<button className="search--box__button">
				<div className="search--box__icon" />
			</button>
		</form>
	);
};

Search.propTypes = {
	cb: PropTypes.func.isRequired,
	placeholder: PropTypes.string,
};

export default Search;
