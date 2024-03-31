import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Auth0ProviderWithNavigate from './auth/Auth0ProviderWithNavigate.jsx';
const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <Auth0ProviderWithNavigate>
  <App></App>
  </Auth0ProviderWithNavigate>
  </BrowserRouter>
);
