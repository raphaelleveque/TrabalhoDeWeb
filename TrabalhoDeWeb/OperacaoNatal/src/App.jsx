
import {
  createBrowserRouter,
  RouterProvider,
  Link
} from "react-router-dom"
import Informacoes from './components/informacoes'
import Sobre from "./components/sobre";
import Contato from "./components/contato";
import './App.css'
import Login from "./components/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Informacoes/>
  },
  {
    path: "/Home",
    element: <Informacoes/>
  },
  {
    path: "/Sobre",
    element: <Sobre/>
  },
  {
    path: "/Contribuicoes",
    element: <Contato/>
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

      <footer>
        <p>Operação Natal ©2024</p>
      </footer>
    </>
  )
}

export default App
