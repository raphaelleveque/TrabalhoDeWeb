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
    <div className={highContrast ? 'high-contrast' : 'default-contrast'}>

      <head>
        <div className="acessibilidade">
          <div><button onClick={increaseFont}>A+</button>  | <button onClick={decreaseFont}>A-</button></div>
          <img src={contrast} alt="Alto Contraste" onClick={toggleContrast} style={{ cursor: 'pointer' }} />
          <button onClick={toggleContrast} style={{ cursor: 'pointer' }}>Alto Contraste</button>
        </div>
      </head>


      <RouterProvider router={router}/>
    </div>
  )
}

export default App
