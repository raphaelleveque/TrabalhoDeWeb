import React, { useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Link
} from "react-router-dom"
import toastr from 'toastr';
import Informacoes from './components/informacoes'
import Home from './components/home'
import Sobre from "./components/sobre";
import Contribuicoes from "./components/contribuicoes";
import './App.css'
import contrast from "./assets/visual/contraste.png"
import Login from "./components/Login";

toastr.options = {
  positionClass: 'toast-bottom-left',  // Define a posição padrão como inferior esquerda
  closeButton: true,
  progressBar: true,
  timeOut: 5000,  // Define o tempo de exibição padrão do toast
  extendedTimeOut: 1000,
  hideMethod: 'fadeOut',
  showMethod: 'fadeIn',
};

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
          <div><button aria-label="Aumentar tamanho da fonte" onClick={increaseFont}>A+</button>  | <button aria-label="Diminuir tamanho da fonte" onClick={decreaseFont}>A-</button></div>
          <img src={contrast} alt="Alto Contraste" onClick={toggleContrast} style={{ cursor: 'pointer' }} />
          <button role="switch" onClick={toggleContrast} style={{ cursor: 'pointer' }}>Alto Contraste</button>
        </div>
      </head>


      <RouterProvider router={router}/>
    </div>
  )
}

export default App
