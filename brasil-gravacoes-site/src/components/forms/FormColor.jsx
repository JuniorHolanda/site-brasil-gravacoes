//import listImgBannerHero from '../img/hero-banner/listImgBannerHero'
import { RiAddBoxLine } from 'react-icons/ri';
import '../../styles/components/forms/form-color.scss';

function FormColor() {
  return (
    <fieldset className="form__color" id="formColor">
      <span className="form__container-title">
        {/* fora do span, legend tem um comportamento estranho, a tag age como se tivesse com position absolute ou relative, ignorando o fluxo do código e transbordando o elemento pai */}
        <legend className="form__color-title">Escolha a cor</legend>
      </span>
      <div className="form__camp">
        <label htmlFor="pantone">Pantone</label>
        <input
          type="text"
          id="pantone"
          name="pantone"
          placeholder="Digite o Pantone"
        />
        <button className="btn-icon">
          <RiAddBoxLine className="teste" />
        </button>
      </div>
      <div className="form__info">
        <ul className="form__list">
          <li className="form__item-list">513c</li>
          <li className="form__item-list">204cC</li>
          <li className="form__item-list">156c</li>
          <li className="form__item-list">3 Cores</li>
        </ul>
      </div>
      <span className="form__background">
        <span className="form__liquid-gradient form__bg-1"></span>
        <span className="form__liquid-gradient form__bg-2"></span>
        <span className="form__liquid-gradient form__bg-3"></span>
        <span className="form__liquid-gradient form__bg-4"></span>
        <span className="form__liquid-gradient form__bg-5"></span>
      </span>
    </fieldset>
  );
}

export default FormColor;
