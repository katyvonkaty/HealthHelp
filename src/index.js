import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from "axios";

axios.defaults.baseUrl= "https://randomuser.me/api/"

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
