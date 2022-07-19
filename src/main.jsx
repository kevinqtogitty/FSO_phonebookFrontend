import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

const phoneBook = []

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App phoneBook={phoneBook}/>
  </React.StrictMode>
)
