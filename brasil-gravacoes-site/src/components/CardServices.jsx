import '../styles/components/card-services.scss';
import { useState } from 'react';


function CardServices() {

    
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
        <div className="card-services"
            onMouseEnter={() => toggleExpandCard(true)} //expande o card
            onMouseLeave={() => toggleExpandCard(false)} // retrai o card
        >
            
            <h3 className='card-services__header'>CORES VIBRANTES</h3>

            <div className="card-services__container-images">
                <div className="card-services__container-main">
                    <img className='card-services__main-img' src={`/public/img/card-services/silkscreen/1.jpg`} alt="" />
                </div>

                {expandCard && (
                    <div className='card-services__container-gallery'>
                        <div className="card-services__container-secondary-img">
                            <img className='card-services__secondary-img' src={`/public/img/card-services/silkscreen/1.jpg`} alt="" />
                        </div>

                        <div className="card-services__container-secondary-img">
                            <img className='card-services__secondary-img' src={`/public/img/card-services/silkscreen/1.jpg`} alt="" />
                        </div> 
                    </div> 
                )}

            </div>

            <div className="card-services__container-text">
                <h2 className='card-services__title'>Silk <br />Screen</h2>
                <p className='card-services__text'>perfeito para camisetas, brindes e materiais promocionais</p>
            </div>
            {expandCard && (
                    <div className='card-services__container-info'>
                        <p className='card-services__info'>Preços a partir de R$ 160,00</p>
                        <p className='card-services__info'>Trabalhamos com Pantone</p>
                        <p className='card-services__info'>prazos a partir de 5 dias, negociável</p>
                    </div> 
                    
                )}
            <div className="card-services__container-btn">
                <a className='card-service__link card-service__link-form' href="/"><i className="card-service__link fa-solid fa-table-list">ORÇAMENTO</i></a>
                <a className='card-service__link card-service__link-modal' href="/"><i className="card-service__link fa-solid fa-eye">SABER MAIS</i></a>
            </div>
        </div>
    );
}

export default CardServices;