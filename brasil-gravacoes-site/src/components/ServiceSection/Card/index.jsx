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

            <div className={styles.container.images}>
                <div className="card-services__container-main">
                    <img className='card-services__main-img' src={mainImg} alt={mainAltImg} />
                </div>

                {expandCard && (
                    <div className='card-services__container-gallery'>
                        <div className="card-services__container-secondary-img">
                            <img className='card-services__secondary-img' src={secondImg} alt={secondAltImg} />
                        </div>

                        <div className="card-services__container-secondary-img">
                            <img className='card-services__secondary-img' src={thirdImg} alt={thirdAltImg} />
                        </div> 
                    </div> 
                )}

            </div>

            <div className="card-services__container-text">
                <h2 className='card-services__title'>{title}</h2>
                <p className='card-services__text'>{description}</p>
            </div>
            {expandCard && (
                    <div className='card-services__container-info'>
                        <p className='card-services__info'>
                            Preços a partir de
                            <br />
                            <strong className="card-services__strong">
                                R$ {price.toFixed(2).replace('.', ',')}
                            </strong>
                        </p>
                        <p className='card-services__info'>{details}</p>
                        <p className='card-services__info'>
                            prazos a partir{deliveryTime},<br/>
                            <span className="card-services__span-italic">NEGOCIÁVEL</span></p>
                    </div> 
                    
                )}
            <div className="card-services__container-btn">
                <a className='card-service__link card-service__link-form' href="/"><i className="card-service__link fa-solid fa-table-list">ORÇAMENTO</i></a>
                <a className='card-service__link card-service__link-modal' href="/"><i className="card-service__link fa-solid fa-eye">SABER MAIS</i></a>
            </div>

            {expandCard && (
                <img className='card-services__star' src='../public/img/misc/star.svg' alt='Uma estrela de 8 pontas'></img> 
            )}
        </div>
    );
}

export default CardServices;