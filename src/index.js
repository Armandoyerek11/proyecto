import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Matricula from './routes/matricula';
import Matricu from './routes/matricu';


ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter>
<Routes>
  <Route path= "/" element= {<App />}>
    <Route path= "/matricula" element={<Matricula/>} >
      <Route path= ":matricu" element= {<Matricu/>}/>
      </Route>
  </Route>
</Routes>
</BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

