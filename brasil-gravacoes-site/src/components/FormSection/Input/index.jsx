import { useState } from 'react';
import styles from './input.module.scss'
import { RiFileUploadLine } from "react-icons/ri";




function Input ({labelTitle}) {
  const lastWord = labelTitle.split(" ").pop();
  const [img, setImg] = useState(null);
  
  function showImg (e) {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      const imgUrl = URL.createObjectURL(file)
      setImg(imgUrl)
    }
  }

  return (
    <>
      <h2>{labelTitle}</h2>
      {img && <img src={img} alt={`${lastWord} do cliente`}/>}  
      
      <label>
        <RiFileUploadLine className={styles.icon}/>
        <input type="file" onChange={showImg}/>
      </label>
    </>
  );
}

export default Input