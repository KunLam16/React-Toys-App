import React,{useState} from "react";
import styles from './ColorPicker.module.css';

function ColorPicker() {

    const [color, setColor] = useState("#ffffff");
    function handleColorChange(e){
        setColor(e.target.value);
    }
    let colorP = '#000000';
    if(color == '#000000'){
        colorP = '#ffffff';
    }
  return (
    <div className={styles.divc}>
   <div className={styles.container}>
    <h1 className={styles.h1}>Chọn Màu Sắc</h1>
    <div className={styles.display} style={{backgroundColor:color}}>
        <p className={styles.para} style={{color:colorP}}>Màu đã chọn: {color}</p>
    </div >
    <label className={styles.label}>Chọn Màu:</label>
    <input className={styles.input} type="color" value={color} onChange={handleColorChange} />
   </div>
   </div >
  );
}
export default ColorPicker;