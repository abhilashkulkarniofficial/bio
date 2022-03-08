import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import ProjectsContainer from './containers/ProjectsContainer';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/bio/" element={<App />} />
      <Route path="/bio/projects" element={<ProjectsContainer />} />
    </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
