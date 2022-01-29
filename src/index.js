import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './utils/reportWebVitals';
import { GlobalStyle } from './GlobalStyles.js'
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import { Home } from './components/Home.js';
import { App } from './App.js';
import { Modal } from './components/Modal.js';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/app" element={<App/>} >
              <Route path="modal" element={<Modal/>}>
                 <Route path=":id" element={<Modal/>} />
              </Route>
            </Route>
            <Route path="*" element={<p>URL Error</p>}/>
        </Routes> 
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

