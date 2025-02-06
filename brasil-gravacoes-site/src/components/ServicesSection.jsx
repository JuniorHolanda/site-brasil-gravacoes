import CardServices from './CardServices.jsx';
import '../styles/components/services-section.scss';
import listCard from '../json/db-cards.json';
function ServicesSection() {

  return (
    <section className="services-section">
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
