//import listImgBannerHero from '../img/hero-banner/listImgBannerHero'
import FormColor from './FormColor.jsx';
import '../../styles/components/forms/form-section.scss';
import FormImprinting from './FormImprinting.jsx';
import BtnSubmit from './BtnSubmit.jsx';
import { useEffect, useState } from 'react';

function FormSection() {
  const [inputValue, setInputValue] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/gravacao', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setInputValue(data);
      })
      .catch((error) => {
        console.error('Erro:', error);
      });
  }, []);

  return (
    <form className="form" action="">
      <FormColor />
      <FormImprinting
        name="gravacao_id"
        text="Selecione uma gravação"
        options={inputValue}
      />
      <BtnSubmit text="Enviar" />
    </form>
  );
}

export default FormSection;
