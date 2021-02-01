import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from "axios";

axios.defaults.baseURL = "https://api.imgflip.com/get_memes";
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use( request => {
  console.log(request);
  return request
}, error => {
  console.log(error)
  return Promise.reject(error);
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
