import React from "react";

import RouterConfig from "common/services/Router";

import Spinner from "./common/components/spinner/Spinner";
import SnackbarShow from "common/components/snackbar/SnackbarShow"; // #snackbar step1

import { useSelector } from "react-redux";

import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css/bundle";
import useRTL from "common/hooks/useRTL";

export default function App() {
	const stateGeneral = useSelector((state) => state.stateGeneral);
	const { direction } = useRTL();

	// #routerConfig step2
	return (
		<div style={{ height: "100%", direction }}>
			<RouterConfig />
			{stateGeneral.spinner ? <Spinner /> : null}
			{stateGeneral.snackbar?.show ? <SnackbarShow /> : null}
		</div>
	);
}
