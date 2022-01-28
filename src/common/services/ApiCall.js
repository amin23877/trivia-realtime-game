import axios from "axios";
import { BASE_URL } from "common/values/CORE";

const baseUrl = BASE_URL;

class ApiCall {
	post(url, body) {
		const token = localStorage.getItem("token") ? `Bearer ${localStorage.getItem("token")}` : null;
		return axios.post(baseUrl + url, body, {
			headers: { Authorization: token },
		});
	}

	get(url) {
		const token = localStorage.getItem("token") ? `Bearer ${localStorage.getItem("token")}` : null;
		return axios.get(baseUrl + url, {
			headers: { Authorization: token },
		});
	}
}

export default ApiCall;
