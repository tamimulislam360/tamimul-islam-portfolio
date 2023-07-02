import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {RouterProvider} from 'react-router-dom'
import router from './routes/routes.tsx'
import ThemeProvider from './context/ThemeProvider.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
