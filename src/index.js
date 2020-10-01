import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const API_KEY = process.env.REACT_APP_API_KEY
const SESSION_ID = process.env.REACT_APP_SESSION_ID
const TOKEN = process.env.REACT_APP_TOKEN


ReactDOM.render(<App
  apiKey={API_KEY}
  sessionId={SESSION_ID}
  token={TOKEN}
  />, document.getElementById('root'));

