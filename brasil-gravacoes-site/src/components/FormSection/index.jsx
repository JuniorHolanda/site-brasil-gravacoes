import styles from './formSection.module.scss';
import { useEffect, useState } from 'react';
import { RiFileUploadLine } from "react-icons/ri";

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
            <label>
              <RiFileUploadLine className={styles.icon}/>
              Eviar Layout
              <input type="file"/>
            </label>
            <label>
              <RiFileUploadLine className={styles.icon}/>
              Eviar Logo
              <input type="file"/>
            </label>
          </div>
        </div>
      </section>
    </section>
  )
}

export default FormSection;
