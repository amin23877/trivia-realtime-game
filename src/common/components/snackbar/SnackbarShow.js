// #snackbar step0
import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { SET_SNACKBAR } from "redux/actions/mainActions/generalActions";

import Snackbar from "@material-ui/core/Snackbar";
import { makeStyles } from "@material-ui/core/styles";

import "./SnackbarShow.scss";
import CloseIcon from "@material-ui/icons/Close";
import { TYPE_SNAKBAR } from "common/values/TYPES";
import { CORE } from "common/values/CORE";

const useStyles = makeStyles((theme) => ({
	root: {},
	snackbarInline: {
		position: "relative",
	},
	snackbarIcon: {
		position: "absolute !important",
	},
}));

const SnackbarShow = () => {
	const autoHideDuration = 5000;
	const classes = useStyles();
	const [Progress, setProgress] = useState(0);

	const stateGeneral = useSelector((state) => state.stateGeneral);

	const messageDefault = stateGeneral.snackbar.message
		? stateGeneral.snackbar.message
		: stateGeneral.snackbar.type === TYPE_SNAKBAR.SUCCESS
		? CORE.SNAKBAR_MESSAGE.success
		: stateGeneral.snackbar.type === TYPE_SNAKBAR.ERROR
		? CORE.SNAKBAR_MESSAGE.error
		: CORE.SNAKBAR_MESSAGE.alert;

	const dispatch = useDispatch();
	const handleClose = () => {
		dispatch(SET_SNACKBAR({ show: false }));
	};

	useEffect(() => {
		setProgress((oldProgress) => {
			if (oldProgress === 100) {
				return 0;
			}
			const diff = Math.random() * 10;
			return Math.min(oldProgress + diff, 100);
		});
	}, []);

	return (
		<Snackbar
			anchorOrigin={{
				vertical: "top",
				horizontal: "center",
			}}
			open={stateGeneral.snackbar?.show}
			autoHideDuration={autoHideDuration}
			onClick={handleClose}
			onClose={handleClose}
			// message={stateGeneral?.snackbar?.message}
			// action={}
		>
			<div className="py-2 px-3 snackbar">
				<div
					className={`p-2 snackbar-body d-flex align-items-center justify-content-start 
				${
					stateGeneral?.snackbar?.type === TYPE_SNAKBAR.SUCCESS
						? "success"
						: stateGeneral?.snackbar?.type === TYPE_SNAKBAR.ERROR
						? "error"
						: "alert"
				}
				`}
				>
					<p className="px-1">{messageDefault}</p>
					<CloseIcon className="icon-close" onClick={handleClose} />
				</div>
			</div>
		</Snackbar>
	);
};

export default SnackbarShow;
