import '../styles/components/about-us.scss'
import { FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { HiDocumentSearch } from "react-icons/hi";
import { BsShop } from "react-icons/bs";

const AboutUs = () => {
    return (
        <section className='about-us'>
            <div className="about-us__first-content">
                <h2 className='about-us__title'>SOBRE<br/>NÓS</h2>
                <p className="about-us__text">
                Na Brasil Gravações, transformamos brindes em experiências marcantes. Somos especialistas em personalizar cada item com qualidade e precisão, refletindo a identidade de sua empresa. Desde pequenos detalhes a grandes lotes, nosso compromisso é entregar soluções criativas que fortalecem conexões e impressionam.
                </p>
            </div>

            <div className="about-us__img-container">
                <img className="about-us__img" src="/public/img/misc/silk-1.gif" alt="um pote de tinta serigrafica pink"/>
            </div>

            <div className="about-us__company-principles">
                <div className='about-us__itens'>
                    <h2 className='about-us__title-principles'>Missão</h2>
                    <p className='about-us__text-principles'>
                        Personalizar brindes com excelência, fortalecendo marcas e conexões.
                    </p>
                </div>
                <div className='about-us__itens'>
                    <h2 className='about-us__title-principles'>Visão</h2>
                    <p className='about-us__text-principles'>
                        Ser referência em criatividade e qualidade no mercado de brindes personalizados.
                    </p>
                </div>
                <div className='about-us__itens'>
                    <h2 className='about-us__title-principles'>Valores</h2>
                    <p className='about-us__text-principles'>
                        Compromisso, inovação, respeito e foco no cliente.
                    </p>
                </div>
            </div>

            <div className='about-us__list-container'>
                <ul className="about-us__list">
                    <li className="about-us__list-item"> {<BsShop className='about-us__icon' />} Brasil Gravacoes LTDA</li>
                    <li className="about-us__list-item">{<HiDocumentSearch className='about-us__icon' />} CNPJ: 48.025.949/0001-72</li>
                    <li className="about-us__list-item">{<FiPhoneCall className='about-us__icon'/> } 11 0000-0000</li>
                    <li className="about-us__list-item">{<FaWhatsapp className='about-us__icon' />} 11 9.0000-0000</li>
                </ul>
            </div>

            <div className="about-us__star">
                <img alt="" src="/public/img/misc/star.svg"/>
            </div>
            
        </section>
    )
}

export default AboutUs;