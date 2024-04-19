import bloob1 from '../../assets/visual/Bloob1.png'
import bloobClaro from '../../assets/visual/Bloob1-claro.png'
import bloob2 from '../../assets/visual/Bloob2.png'
import estrelas from '../../assets/visual/Estrelas.png'
import logo from '../../assets/visual/logo-vertical-detalhes-em-branco.png'

import { Link } from 'react-router-dom'

function Header(){
    return(
        <nav>
            <div className="blobLog">
                <img src={bloob1} alt=""/>
                <img src={bloobClaro} alt=""/>
                <img src={logo} alt=""/>
            </div>
            <div className="items">
                <img src={bloob2} alt=""/>
                <img src={estrelas} alt=""/>
                <ul>
                    <li className="item1">
                        <Link to={'/Home'}>Home</Link>
                    </li>
                    <li className="item2">
                        <Link to={'/Sobre'}>Sobre</Link>
                    </li>
                    <li className="item3">
                        <Link to={'/Contribuicoes'}>Contribuições</Link>
                    </li>
                    <li className="item4">
                        <Link to={'/Informacoes'}>Informações</Link>
                    </li>
                    <li className="item5">
                        <Link to={'/Login'}>Login</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );

}

export default Header;