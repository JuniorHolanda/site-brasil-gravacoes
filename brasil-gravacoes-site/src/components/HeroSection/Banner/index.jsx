import styles from './banner.module.scss'
import imgBanner from './img/1.jpg'

function HeroBanner() {
    return (
        <div className={styles.banner}>
            <div>
                <img src={imgBanner} alt="" />
            </div>
            <h2>SILK SCREEN</h2>
        </div>
    )
}

export default HeroBanner;