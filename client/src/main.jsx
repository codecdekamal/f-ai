import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'
import Auth0ProviderWithNavigate from './auth/Auth0ProviderWithNavigate.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router> 
      <Auth0ProviderWithNavigate>
             <App /> 
      </Auth0ProviderWithNavigate>

    </Router>
  </React.StrictMode>,
)
