import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { REDIRECT_URL } from './config.js'

const redirectUrl = REDIRECT_URL.trim()

if (redirectUrl) {
  window.location.replace(redirectUrl)
} else {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
