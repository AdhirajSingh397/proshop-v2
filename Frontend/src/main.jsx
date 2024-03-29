import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx'
import './assets/styles/index.css'
import './assets/styles/bootstrap.custom.css'
import './index.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import HomeScreen from './screens/HomeScreen.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
