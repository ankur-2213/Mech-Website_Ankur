import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ClickSpark from './UI/ClickSpark.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClickSpark>
    <App />
    </ClickSpark>
  </React.StrictMode>,
)
