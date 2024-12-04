//import listImgBannerHero from '../img/hero-banner/listImgBannerHero'
import '../styles/components/hero-banner.scss'

function HeroBanner() {
    
    return (
        <div className="hero-banner">
            <div className="hero-banner__container-img">
                <img className='hero-banner__img' src='/public/img/hero-banner/4.jpg' alt="" />
            </div>
            <h2 className='hero-banner__title'>SILK SCREEN</h2>
        </div>
    )
}

export default HeroBanner