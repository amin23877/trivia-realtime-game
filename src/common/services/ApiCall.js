import { BASE_URL } from 'common/values/CORE';

const baseUrl = BASE_URL;

class ApiCall {
  isJsonString(str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }

  handleResponse(xmlhttp, resolve, reject, checkExpire) {
    xmlhttp.addEventListener('readystatechange', (e) => {
      if (xmlhttp.readyState === 4) {
        if (xmlhttp.status === 200) {
          if (this.isJsonString(xmlhttp.responseText)) {
            let output = {
              res: JSON.parse(xmlhttp.responseText),
              header: xmlhttp,
            };
            resolve(output);
          } else {
            reject('notJson');
          }
        } else if (checkExpire && xmlhttp.status === 401) {
          console.log('Err 401: accessTokenExpire');
          reject('accessTokenExpire');
        } else if (!checkExpire && xmlhttp.status === 401) {
          console.log('Err 401: refreshTokenExpire');
          reject('refreshTokenExpire');
        } else {
          try {
            JSON.parse(xmlhttp.responseText);
            let output = {
              res: JSON.parse(xmlhttp.responseText),
              header: xmlhttp,
            };
            reject(output);
          } catch (e) {
            xmlhttp.status === 500
              ? reject('serverDown')
              : reject('otherError');
          }
        }
      }
    });

    xmlhttp.addEventListener('error', () => {
      reject(xmlhttp.statusText);
    });

    xmlhttp.addEventListener('timeout', () => {
      reject('timeOut');
    });
  }

  post(url, body) {
    return new Promise((resolve, reject) => {
      var xmlhttp = new XMLHttpRequest();
      this.handleResponse(xmlhttp, resolve, reject, true);

      xmlhttp.timeout = 30000;
      xmlhttp.open('POST', baseUrl + url, true);
      xmlhttp.setRequestHeader('Content-Type', 'application/json');
      xmlhttp.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
      xmlhttp.setRequestHeader(
        'Authorization',
        localStorage.getItem('accessToken')
      );

      xmlhttp.send(body);
    });
  }

  get(url) {
    return new Promise((resolve, reject) => {
      var xmlhttp = new XMLHttpRequest();
      this.handleResponse(xmlhttp, resolve, reject, true);

      xmlhttp.timeout = 30000;
      xmlhttp.open('GET', baseUrl + url);
      xmlhttp.setRequestHeader('Content-Type', 'application/json');
      xmlhttp.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
      xmlhttp.setRequestHeader(
        'Authorization',
        localStorage.getItem('accessToken')
      );

      xmlhttp.send();
    });
  }
}

export default ApiCall;
