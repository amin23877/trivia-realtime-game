import React from "react";

import RouterConfig from "common/services/Router";

import Spinner from "./common/components/spinner/Spinner";
import SnackbarShow from "common/components/snackbar/SnackbarShow";

import { useSelector } from "react-redux";

import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
	const stateGeneral = useSelector((state) => state.stateGeneral);

	// #routerConfig step2
	return (
		<div className="dish">
			<RouterConfig />
			{stateGeneral.spinner ? <Spinner /> : null}
			{stateGeneral.snackbar?.show ? <SnackbarShow /> : null}
		</div>
	);
}
