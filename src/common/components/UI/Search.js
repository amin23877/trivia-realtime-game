import React from "react";
import PropTypes from "prop-types";

//---assets
import "./Search.scss";

const Search = ({ value, onChange, placeholder }) => {
	return (
		<div className="search--box">
			<input
				className="search--box__input"
				value={value}
				placeholder={placeholder}
				onChange={onChange}
				autoComplete="off"
			/>

			<div className="search--box__icon" />
		</div>
	);
};

Search.propTypes = {
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string,
};

export default Search;
