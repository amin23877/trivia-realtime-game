import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "redux/store"; // #redux step1
import App from "./App";
import "common/services/i18n";

import "assets/scss/main.scss";

ReactDOM.render(
	// #redux step2
	<React.Suspense fallback={null}>
		<Provider store={store}>
			<App />
		</Provider>
	</React.Suspense>,
	document.getElementById("root")
);
