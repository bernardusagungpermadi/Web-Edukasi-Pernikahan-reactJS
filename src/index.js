import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
        <App />
        </Provider>
    </React.StrictMode>
);

// Nav Scroll Window
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})

