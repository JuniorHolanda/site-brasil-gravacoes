//import MainLogo from '/public/img/misc/main-logo.svg';
import { useState } from 'react';
import styles from './mainHeader.module.scss'


function MainHeader() {

    // quando for true o nav bar ganha a classe active e mostra o menu lateral
    const [menuHamburguer, setMenuHamburguer] = useState(false);

    // alterna o valor do menuHamburguer entre true e false
    function showMenuHamburguer() {
        setMenuHamburguer(!menuHamburguer);
    }

    return (
        <header className={styles.mainHeader}>
            <div>
                <img src='/public/img/misc/main-logo.svg' alt="Logo da empresa Brasil Gravações" />
            </div>

            <span onClick={showMenuHamburguer}>
                <span></span>
                <span></span>
                <span></span>
            </span>

            {/* adiciona a classe main-header___nav-bar e o operador ternário verifica o valor de menuHamburguer para adicionar ou remover a classe active */}
            <nav className={menuHamburguer ? 'navBarActive' : ''}>
                <ul>
                    <li>HOME</li>
                    <li>SOBRE NÓS</li>
                    <li>ORÇAMENTO</li>
                    <li>CLIENTES</li>
                    <li>CATÁLOGO</li>
                    <li>CONTATO</li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader
