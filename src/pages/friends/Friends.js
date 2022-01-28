import React from "react";

import { useNavigate } from "react-router-dom";

import Footer from "common/components/footer/Footer";

import { InputAdornment, OutlinedInput } from "@material-ui/core";

import "./Friends.scss";
import SearchIcon from "@material-ui/icons/Search";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const Friends = () => {
	const navigate = useNavigate();

	const handleGoBack = () => {
		navigate(-1);
	};

	const friends = [
		{ name: "Tanaz-MRD" },
		{ name: "Mohammad fari" },
		{ name: "Ali Mansoorie" },
		{ name: "Fatemeh 2u" },
		{ name: "Mohammad fari" },
		{ name: "Tanaz-MRD" },
		{ name: "Mohammad fari" },
		{ name: "Ali Mansoorie" },
		{ name: "Fatemeh 2u" },
		{ name: "Mohammad fari" },
		{ name: "Tanaz-MRD" },
		{ name: "Mohammad fari" },
		{ name: "Ali Mansoorie" },
		{ name: "Fatemeh 2u" },
		{ name: "Mohammad fari" },
		{ name: "Tanaz-MRD" },
		{ name: "Mohammad fari" },
		{ name: "Ali Mansoorie" },
		{ name: "Fatemeh 2u" },
		{ name: "Mohammad fari" },
	];

	const handleSearch = () => {};

	return (
		<div className="w-100 h-100 friends">
			<div className="_body-height friends-body">
				<div className="d-flex align-items-center _header-goback">
					<ArrowBackIcon className="color-primary" onClick={handleGoBack} />
					<div className="_header-title mx-2">Friends</div>
				</div>

				<div id="seachbox" className="searchbox">
					<OutlinedInput
						// value={''}
						// id='outlined-secondary'
						// variant='outlined'
						// color='secondary'
						placeholder=""
						onChange={handleSearch}
						autoComplete="off"
						endAdornment={
							<InputAdornment className="pl-1" position="end">
								<SearchIcon className="color-primary" />
							</InputAdornment>
						}
					/>
				</div>

				<div className="friends-list">
					{friends.map((el, index) => (
						<div key={index} className="d-flex justify-content-between align-items-center friends-item">
							<div className="d-flex align-items-center">
								<div className="avatar"></div>
								<div className="name">{el.name}</div>
							</div>

							<div className="remove">Remove</div>
						</div>
					))}
				</div>
			</div>

			<div className="_footer">
				<Footer />
			</div>
		</div>
	);
};
export default Friends;
