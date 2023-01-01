import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const restEndpoint = "http://localhost:5000/getData";

const callRestApi = async () => {
    const response = await fetch(restEndpoint);
    const jsonResponse = await response.json();
    console.log(jsonResponse);
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
