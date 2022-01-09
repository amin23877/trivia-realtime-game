import axios from 'axios';
import { BASE_URL } from 'common/values/CORE';

const baseUrl = BASE_URL;
const token = localStorage.getItem('token')
  ? `Bearer ${localStorage.getItem('token')}`
  : null;

class ApiCall {
  post(url, body) {
    return axios.post(baseUrl + url, body, {
      headers: { Authorization: token },
    });
  }

  get(url) {
    return axios.get(baseUrl + url, {
      headers: { Authorization: token },
    });
  }
}

export default ApiCall;
