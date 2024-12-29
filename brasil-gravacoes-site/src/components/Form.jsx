//import listImgBannerHero from '../img/hero-banner/listImgBannerHero'
import '../styles/components/hero-form.scss';

function Form() {
  return (
    <form action="" className="form">
      <fieldset className="form__color">
        <legend className="form__color-title">Escolha uma cor</legend>
        <div className="form__camp">
          <label htmlFor="pantone">Pantone</label>
          <input
            type="text"
            id="pantone"
            name="pantone"
            placeholder="Digite o código Pantone"
          />
        </div>
        <div className="form__info">
          <ul className="form__list">
            <li className="form__item-list">513C</li>
            <li className="form__item-list">2048C</li>
            <li className="form__item-list">C50 M45 Y100 K8</li>
            <li className="form__item-list">3 Cores</li>
          </ul>
        </div>
      </fieldset>
    </form>
  );
}

export default Form;
