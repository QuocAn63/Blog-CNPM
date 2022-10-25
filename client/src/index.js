import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './components/GlobalStyle';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <GlobalStyle>
         <App />
      </GlobalStyle>
   </React.StrictMode>,
);
