
import {
  createBrowserRouter,
  RouterProvider,
  Link
} from "react-router-dom"
import Informacoes from './components/informacoes'
import Sobre from "./components/sobre";
import Contato from "./components/contato";
import './App.css'

const router = createBrowserRouter([
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
    element: <Informacoes/>
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
