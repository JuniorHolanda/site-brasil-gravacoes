import HeroBanner from "./HeroBanner";
import '../styles/components/Hero-section.scss'

function HeroSection() {
    
    return (
        <section className="hero">
            <div className="hero__cta">
                <h1 className="hero__title">
                    Brindes marcantes começam com uma<br/> <strong className="hero__strong">boa estampa!</strong>
                </h1>
                <a className="hero__link" href="/"><i className="hero__icon fa-brands fa-whatsapp"></i>ORÇAMENTO</a>
            </div>
            <HeroBanner />
        </section>
    )
}

export default HeroSection