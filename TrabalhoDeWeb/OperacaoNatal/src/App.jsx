
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


function App() {

  return (
    <>
     <RouterProvider router={router}/>

      {/* <img className="ufo" id="mascote1" src="src/visual/Nicolau (1).png" alt=""/>
      <img className="ufo" id="mascote2"src="src/visual/Nicolau_Sino.png" alt=""/>
      <img className="ufo" id="mascote3"src="src/visual/Natalina.png" alt=""/>
      <img className="ufo" id="mascote4"src="src/visual/Floquinho (1).png" alt=""/>
      <img className="ufo" id="mascote5" src="src/visual/Bell (2).png" alt=""/> */}

    <img src={libras} id="Libras" />

    <footer>
      <p>Operação Natal ©2024</p>
      <div className="acessibilidade">
        <p>A+ | A-</p>
        <img src={contrast} alt="" />
        <p>Alto Contraste</p>
      </div>
    </footer>
    </>
  )
}

export default App
