import styles from './cardServices.module.scss';
import { useState } from 'react';


function CardServices(
    {
        serviceTagLine,

        mainImg,
        mainAltImg,

        secondImg,
        secondAltImg,

        thirdImg,
        thirdAltImg,

        title,
        price,
        description,
        details,
        deliveryTime
    }) {

    
    //controlador de estado que expande ou retrai o card, somente para desktop
    const [expandCard, setExpandCard] = useState(false);
    
    // altera o valor do controlador de estado. true = expandir / false = retrair
    function toggleExpandCard(expand) {
        setExpandCard(expand);

        if (expandCard == false) {
            console.log(!expandCard)
        }
    }
    
    return (
        <div className={styles.card}
            onMouseEnter={() => toggleExpandCard(true)} //expande o card
            onMouseLeave={() => toggleExpandCard(false)} // retrai o card
        >
            
            <h3 className={styles.header}>{serviceTagLine}</h3>

            <div className={styles.containerImages}>
                <div className={styles.containerMain}>
                    <img className={styles.mainImg} src={mainImg} alt={mainAltImg} />
                </div>

                {expandCard && (
                    <div className={styles.containerGallery}>
                        <div className={styles.containerSecondaryImg}>
                            <img className={styles.secondaryImg} src={secondImg} alt={secondAltImg} />
                        </div>

                        <div className="secondary-img">
                            <img className={styles.containerSecondaryImg} src={thirdImg} alt={thirdAltImg} />
                        </div> 
                    </div> 
                )}

            </div>

            <div className={styles.containerText}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.text}>{description}</p>
            </div>
            {expandCard && (
                    <div className={styles.containerInfo}>
                        <p>
                            Preços a partir de
                            <br />
                            <strong>
                                R$ {price.toFixed(2).replace('.', ',')}
                            </strong>
                        </p>
                        <p>{details}</p>
                        <p>
                            prazos a partir{deliveryTime},<br/>
                            <span>NEGOCIÁVEL</span>
                        </p>
                    </div> 
                    
                )}
            <div className={styles.containerBtn}>
                <a className={`${styles.link} ${styles.form}`} href="/"><i className="card-service__link fa-solid fa-table-list">ORÇAMENTO</i></a>
                <a className={`${styles.link} ${styles.modal}`} href="/"><i className="card-service__link fa-solid fa-eye">SABER MAIS</i></a>
            </div>

            {expandCard && (
                <img className={styles.star} src='../img/misc/star.svg' alt='Uma estrela de 8 pontas'></img> 
            )}
        </div>
    );
}

export default CardServices;