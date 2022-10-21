import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
//import { render } from "react-dom";
import Admin from "./components/Admin"
import DriverSection from './components/DriverSection';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="Admin" element={<Admin />} />
      <Route path="DriverSection" element={<DriverSection />} />
    </Routes>
  </BrowserRouter>
);

