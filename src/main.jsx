import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ContextProvider, { APIContext } from './Context/CountriesApi.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>

      <App />
    </ContextProvider>
  </StrictMode>,
)
