import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { UserProvider } from './context/UserContext'
import { ExperienceProvider } from './context/ExperienceContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ExperienceProvider>
          <App />
        </ExperienceProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
