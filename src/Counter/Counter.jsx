import React,{useState} from 'react';
import styles from './Counter.module.css';

function Counter(){
    const [count, setCount] = useState(0);

    function handleIncrement(){
        setCount(count+1);
    }
    function handleDecrement(){
        setCount(count-1);
    }
    function handleReset(){
        setCount(0);
    }
    let name = 'Bộ Đếm';
    if(count ==16){
        name = 'Kun Lâm'
    }
    return(
        <div className={styles.container}>
            <h1 className={styles.h1}>{name}</h1>
            <p className={styles.num}>{count}</p>
            <div className={styles.btnCon}>
            <button className={styles.button} onClick={handleDecrement}>Giảm</button>
            <button className={styles.button} onClick={handleReset}>Reset</button>
            <button className={styles.button} onClick={handleIncrement}>Tăng</button>
            </div>
        </div>
    );


}

export default Counter;