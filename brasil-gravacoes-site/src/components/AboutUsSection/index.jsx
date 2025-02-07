import styles from'./aboutUs.module.scss';
import { FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { HiDocumentSearch } from "react-icons/hi";
import { BsShop } from "react-icons/bs";

const AboutUs = () => {
    return (
        <section className={styles.aboutUs}>
            <div className={styles.info}>
                <h2>SOBRE<br/>NÓS</h2>
                <p>
                Na Brasil Gravações, transformamos brindes em experiências marcantes. Somos especialistas em personalizar cada item com qualidade e precisão, refletindo a identidade de sua empresa. Desde pequenos detalhes a grandes lotes, nosso compromisso é entregar soluções criativas que fortalecem conexões e impressionam.
                </p>
            </div>
            <div className={styles.imgContainer}>
                <img src="/public/img/misc/silk-1.gif" alt="um pote de tinta serigrafica pink"/>
            </div>
            <div className={styles.companyPrinciples}>
                <div className={styles.itens}>
                    <h2>Missão</h2>
                    <p>
                        Personalizar brindes com excelência, fortalecendo marcas e conexões.
                    </p>
                </div>
                <div className={styles.itens}>
                    <h2>Visão</h2>
                    <p>
                        Ser referência em criatividade e qualidade no mercado de brindes personalizados.
                    </p>
                </div>
                <div className={styles.itens}>
                    <h2>Valores</h2>
                    <p>
                        Compromisso, inovação, respeito e foco no cliente.
                    </p>
                </div>
            </div>
            <div className={styles.listContainer}>
                <ul>
                    <li> {<BsShop className={styles.icon} />} Brasil Gravacoes LTDA</li>
                    <li>{<HiDocumentSearch className={styles.icon} />} CNPJ: 48.025.949/0001-72</li>
                    <li>{<FiPhoneCall className={styles.icon}/> } 11 0000-0000</li>
                    <li>{<FaWhatsapp className={styles.icon} />} 11 9.0000-0000</li>
                </ul>
            </div>
            <div className={styles.star}>
                <img alt="" src="/public/img/misc/star.svg"/>
            </div>
        </section>
    )
}

export default AboutUs;