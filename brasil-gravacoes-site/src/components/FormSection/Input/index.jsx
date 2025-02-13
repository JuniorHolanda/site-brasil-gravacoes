import { useState } from 'react';
import styles from './input.module.scss'
import { RiFileUploadLine } from "react-icons/ri";




function Input ({labelTitle}) {

  const [img, setImg] = useState(null);

  function showImg (e) {
    if (e.target.files.length > 0) {
      setImg(e.target.files[0])
    }
  }

  return (
    <>
      {img && 
        <img src={img.src} alt="" />
      }
      <h2>{labelTitle}</h2>
      
      <label>
        <RiFileUploadLine className={styles.icon}/>
        <input type="file" onChange={showImg}/>
      </label>
    </>
  );
}

export default Input