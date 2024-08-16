import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; 
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'; 
import "bootstrap";  
import { BrowserRouter } from "react-router-dom";
import './assets/css/fontawesome.min.css';
 

// import './assets/css/magnific-popup.min.css';
// import './assets/css/swiper-bundle.min.css';
// import './assets/css/jquery.datetimepicker.min.css';
import './assets/css/style.css'

 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App /> 
        </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
