import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.tsx'
import './index.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { Home } from './pages/home.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' Component = {Home}/>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
)
