import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Footer from './components/sharedComponents/Footer'
import ScrollToTop from './components/sharedComponents/scrollToTop';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
)
