import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Using ! assertion since we know #root exists in index.html
const root = ReactDOM.createRoot(document.getElementById('root')!)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
