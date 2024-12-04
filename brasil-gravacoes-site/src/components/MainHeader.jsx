//import MainLogo from '/public/img/misc/main-logo.svg';
import { useState } from 'react';
import '../styles/components/Main-header.scss'


function MainHeader() {

    // quando for true o nav bar ganha a classe active e mostra o menu lateral
    const [menuHamburguer, setMenuHamburguer] = useState(false);

    // alterna o valor do menuHamburguer entre true e false
    function showMenuHamburguer() {
        setMenuHamburguer(!menuHamburguer);
    }

    return (
        <header className="main-header">
            <div className="main-header__container-logo">
                <img className='main-header__main-logo' src='/public/img/misc/main-logo.svg' alt="Logo da empresa Brasil Gravações" />
            </div>

            <span className="main-header__container-hamburguer" onClick={showMenuHamburguer}>
                <span className="item-hamburguer"></span>
                <span className="item-hamburguer"></span>
                <span className="item-hamburguer"></span>
            </span>

            {/* adiciona a classe main-header___nav-bar e o operador ternário verifica o verifica o valor de menuHamburguer para adicionar ou remover a classe active */}
            <nav className={`main-header__nav-bar ${menuHamburguer ? 'main-header__nav-bar--active' : ''}`}>
                <ul className="main-header__list-menu">
                    <li className="main-header__item-menu">HOME</li>
                    <li className="main-header__item-menu">SOBRE NÓS</li>
                    <li className="main-header__item-menu">ORÇAMENTO</li>
                    <li className="main-header__item-menu">CLIENTES</li>
                    <li className="main-header__item-menu">CATÁLOGO</li>
                    <li className="main-header__item-menu">CONTATO</li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader
