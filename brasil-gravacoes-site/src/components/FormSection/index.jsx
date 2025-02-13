import styles from './formSection.module.scss';
import Input from './Input';

function FormSection() {



  return(
    <section className={styles.wrapper}>
      <header className={styles.header}>
        <h2>Rápido no orçamento</h2>
        <h3>Imbatível na entrega</h3>
      </header>
      <section>
        <div className={styles.containerForm}>
          <div className={styles.inputImg}>
            <Input labelTitle='Enviar Layout'/>
            <Input labelTitle='Enviar logo'/>
          </div>
        </div>
      </section>
    </section>
  )
}

export default FormSection;
