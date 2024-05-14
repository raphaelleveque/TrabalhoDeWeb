import React, { useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Link
} from "react-router-dom"
import Informacoes from './components/informacoes'
import Home from './components/home'
import Sobre from "./components/sobre";
import Contribuicoes from "./components/contribuicoes";
import './App.css'
import libras from "./assets/visual/libras.png"
import contrast from "./assets/visual/contraste.png"
import Login from "./components/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/Home",
    element: <Home/>
  },
  {
    path: "/Sobre",
    element: <Sobre/>
  },
  {
    path: "/Contribuicoes",
    element: <Contribuicoes/>
  },
  {
    path: "/Informacoes",
    element: <Informacoes/>
  },
  {
    path: "/Login",
    element: <Login/>
  }
]);

const increaseFont = () => {
  const tamanhoAtual = parseFloat(getComputedStyle(document.documentElement).fontSize); 
  document.documentElement.style.fontSize = (tamanhoAtual + 2) + 'px';
};

const decreaseFont = () => {
  const tamanhoAtual = parseFloat(getComputedStyle(document.documentElement).fontSize); 
  if(tamanhoAtual < 5) return;
  document.documentElement.style.fontSize = (tamanhoAtual - 2) + 'px';
};

function App() {
  const [highContrast, setHighContrast] = useState(false);

  const toggleContrast = () => {
    setHighContrast(!highContrast);
  };

  return (
    <div className={highContrast ? 'high-contrast' : 'dafault-contrast'}>
      <RouterProvider router={router}/>

      <footer>
        <p>Operação Natal ©2024</p>
        <div className="acessibilidade">
          <p><span onClick={increaseFont}>A+</span>  | <span onClick={decreaseFont}>A-</span></p>
          <img src={contrast} alt="Alto Contraste" onClick={toggleContrast} style={{ cursor: 'pointer' }} />
          <p>Alto Contraste</p>
        </div>
      </footer>
    </div>
  )
}

export default App
