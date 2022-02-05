import React from "react";

import "./ChangeCover.scss";

// images
import cover from "assets/images/test/profile-header.jpg";
import { ReactComponent as EditIcon } from "assets/images/icons/edit.svg";
import { ReactComponent as TrashIcon } from "assets/images/icons/delete-icon.svg";

/*
 * 	this component show user cover image
 *  and render buttons for delete or change it
 * */
const ChangeCover = () => {
	// get user cover from state

	const handleEdit = () => {
		// 1 - send post request to server
		// 2 - update state
	};

	const handleDelete = () => {
		// clear cover section in state
	};

	return (
		<div style={{ backgroundImage: `url('${cover}')` }} className="change-cover-section">
			<label className="change-cover-section__edit">
				<EditIcon />

				<input onChange={handleEdit} name="upload-new-cover" type="file" hidden />
			</label>

			<span onClick={handleDelete} className="change-cover-section__delete">
				<TrashIcon />
			</span>
		</div>
	);
};

export default ChangeCover;
