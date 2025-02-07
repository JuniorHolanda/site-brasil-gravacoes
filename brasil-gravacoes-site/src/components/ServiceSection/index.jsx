import CardServices from './Card/index.jsx';
import styles from './servicesSection.module.scss' ;
import listCard from '../../json/db-cards.json';
function ServicesSection() {

  return (
    <section className={styles.services}>
      {listCard.map((card) => (
        <CardServices
          key={card.cardId}
          {...card}
        />
      ))}
    </section>
  );
}

export default ServicesSection;
