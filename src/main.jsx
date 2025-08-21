import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/css/style.css' // tu CSS principal
import './assets/vendors/themify-icons/css/themify-icons.css' // ejemplo

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
