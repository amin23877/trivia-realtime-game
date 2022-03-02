import { useDispatch } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import { SET_SNACKBAR, SET_SPINNER } from "redux/actions/mainActions/generalActions";
import { TYPE_SNAKBAR } from "common/values/TYPES";
import ApiCall from "common/services/ApiCall";

const api = new ApiCall();

const defaultConfig = {
	showSuccessMessage: false,
	showErrorMessage: true,
	method: "get",
	body: null,
};

export const useRequest = (url, config = defaultConfig) => {
	const [response, setResponse] = useState(null);
	const [error, setError] = useState(false);
	const [success, setSuccess] = useState(false);
	const [status, setStatus] = useState("idle");

	const dispatch = useDispatch();

	const { showSuccessMessage, showErrorMessage, method, body } = config;

	const request = api[method];

	if (!request) throw new Error("unhandled request method");

	const fetcher = useCallback(() => {
		dispatch(SET_SPINNER(true));
		setStatus("loading");

		request(url, body)
			.then((res) => {
				dispatch(SET_SPINNER(false));
				setResponse(res.data);
				setSuccess(true);
				setStatus("success");

				if (showSuccessMessage) {
					dispatch(
						SET_SNACKBAR({
							show: true,
							type: TYPE_SNAKBAR.SUCCESS,
							message: res.data.msg,
						})
					);
				}
			})
			.catch((err) => {
				dispatch(SET_SPINNER(false));
				setError(true);
				setStatus("error");

				if (showErrorMessage) {
					dispatch(
						SET_SNACKBAR({
							show: true,
							type: TYPE_SNAKBAR.ERROR,
							message: err.message,
						})
					);
				}
			});
	}, [dispatch, request, url, body, showSuccessMessage, showErrorMessage]);

	/*
	 * 	fetch get requests when component will mount
	 * */
	useEffect(() => {
		if (method === "get") fetcher();
	}, [method, fetcher]);

	return { response, error, success, status, fetcher };
};
