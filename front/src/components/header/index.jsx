import bloob1 from '../../assets/visual/Bloob1.png'
import bloobClaro from '../../assets/visual/Bloob1-claro.png'
import bloob2 from '../../assets/visual/Bloob2.png'
import estrelas from '../../assets/visual/Estrelas.png'
import logo from '../../assets/visual/logoOpn.png'
import logo2 from '../../assets/visual/logo-vertical-branco.png'
import menu from '../../assets/visual/menu.png'


import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Header(){
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
      setIsVisible(prevState => !prevState);
    };
    

    const navegar = useNavigate();
    const clicklogo = ()=> {        
        navegar('/Home')
    };
    
    return(
        <>
        <img src={menu} className='sandwich' onClick={toggleVisibility}/> 
        <nav className={isVisible ? 'nav-visible' : 'nav-hidden'}>
            <div className="blobLog">
                <img src={bloob1} alt=""/>
                <img src={bloobClaro} alt=""/>
                <img onClick={clicklogo} src={logo} id='logo1' alt="Logo"/>
                <img onClick={clicklogo} src={logo2} id='logo2' alt="Logo"/>
            </div>
            <div className="items" >
                <img src={bloob2} alt=""/>
                <img src={estrelas} alt=""/>
                <ul>
                    <li className="item1">
                        <NavLink role="navigation" aria-label="Home" to={'/Home'} className={({ isActive }) => isActive ? 'ativo' : ''}>Home</NavLink>
                    </li>
                    <li className="item2">
                        <NavLink role="navigation" aria-label="Sobre" to={'/Sobre'} className={({ isActive }) => isActive ? 'ativo' : ''}>Sobre</NavLink>
                    </li>
                    <li className="item3">
                        <NavLink role="navigation" aria-label="Contribuições" to={'/Contribuicoes'} className={({ isActive }) => isActive ? 'ativo' : ''}>Contribuições</NavLink>
                    </li>
                    <li className="item4">
                        <NavLink role="navigation" aria-label="Informações" to={'/Informacoes'} className={({ isActive }) => isActive ? 'ativo' : ''}>Informações</NavLink>
                    </li>
                    <li className="item5">
                        <NavLink role="navigation" aria-label="Login" to={'/Login'} className={({ isActive }) => isActive ? 'ativo' : ''}>Login</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    );

}

export default Header;
