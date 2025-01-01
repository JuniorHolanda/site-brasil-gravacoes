//import listImgBannerHero from '../img/hero-banner/listImgBannerHero'
import { IoMdAdd } from 'react-icons/io';
import '../../styles/components/forms/form-color.scss';
import FormImprinting from './FormImprinting.jsx';
import { useEffect, useState } from 'react';

function FormColor() {
  const [pantone, setPantone] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/pantone', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setPantone(data);
      })
      .catch((error) => {
        console.error('Erro:', error);
      });
  }, []);

  return (
    <fieldset className="form__color" id="formColor">
      <span className="form__container-title">
        {/* fora do span, legend tem um comportamento estranho, a tag age como se tivesse com position absolute ou relative, ignorando o fluxo do código e transbordando o elemento pai */}
        <legend className="form__color-title">Escolha a cor</legend>
      </span>

      <div className="form__camp">
        <FormImprinting
          name="colorId"
          text="Selecione uma cor"
          options={pantone}
        />
        <button className="btn-icon">
          <IoMdAdd />
        </button>
      </div>

      <div className="form__info">
        <div className="form__counter-colors-container">
          <p className="form__counter-colors">Você adicionou 3 Cores</p>
        </div>
        <ul className="form__list">
          <li className="form__item-list">513c</li>
          <li className="form__item-list">204c</li>
          <li className="form__item-list">156c</li>
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
