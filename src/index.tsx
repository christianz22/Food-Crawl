import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import BucketContextProvider from './components/BucketList/BucketContextProvider';
import AuthContextProvider from './authentication/AuthContextProvider';

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <BucketContextProvider>
      <App />
      </BucketContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
