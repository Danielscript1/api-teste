import React from 'react';
import ReactDOM from 'react-dom/client';
import  Routes  from './routes';
import { GlobalStyle } from 'styles/GlobalStyle';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle/>  
    <Routes/>
  </React.StrictMode>
);


