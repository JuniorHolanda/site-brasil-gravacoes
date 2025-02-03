import HeroBanner from './Banner/index';
import styles from './heroSection.module.scss'
function HeroSection() {
    return (
        <section className={styles.hero}>
            <div className={styles.cta}>
                <h1>
                    Brindes marcantes começam com uma<br/> <strong>boa estampa!</strong>
                </h1>
                <a href="/"><i className="hero__icon fa-brands fa-whatsapp"></i>ORÇAMENTO</a>
            </div>
            <HeroBanner />
        </section>
    )
}

export default HeroSection