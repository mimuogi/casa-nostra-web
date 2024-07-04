import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.tsx'
import './index.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { Home } from './pages/home.tsx';
import { About } from './pages/about.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' Component = {Home}/>
        <Route path ='/about' Component={About} />
      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
)
