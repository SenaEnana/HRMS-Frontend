import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

ReactDOM.createRoot(
  document.getElementById("root"),
)
.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);