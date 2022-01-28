import { CORE } from "common/values/CORE";

export const handleCatchErrorFunc = (err) => {
	// console.log(err.response);
	// console.log(err.request);
	// console.log(err.message);

	if (err.response.status === 401) {
		// localStorage.clear();
		window.location.href = "/login";
	}

	let message = "";

	switch (err) {
		case "serverDown":
			message = CORE.ERROR_MESSAGE.server;
			break;
		case "timeOut":
			message = CORE.ERROR_MESSAGE.timeOut;
			break;
		case "notJson":
			message = CORE.ERROR_MESSAGE.notJson;
			break;
		case "default":
			message = CORE.ERROR_MESSAGE.default;
			break;
		default:
			message = CORE.ERROR_MESSAGE.default;
	}

	return {
		type: "ERROR",
		message: message,
		btnTitleClose: "Close",
	};
};
