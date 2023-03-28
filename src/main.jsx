import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { ErrorProvider } from './contexts/ErrorContext'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ErrorProvider>
      <App />
    </ErrorProvider>
  </BrowserRouter>
)
