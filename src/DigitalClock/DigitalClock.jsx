import React, {useState,useEffect} from 'react';
import styles from './DigitalClock.module.css';

function DigitalClock() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());},1000);

            return()=>{
                clearInterval(intervalId);
            }
        },[]);

    function formatTime(){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? 'PM' : 'AM';

        hours = hours % 12 || 12;
        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
    }

    function padZero(number){
        return (number < 10 ? `0` : ``)+number;
    
    }


    return(
        <div className={styles.container}>
            <div className={styles.display}>
                <h1 className={styles.h1}>Đồng Hồ Điện Tử</h1>
                <span className={styles.clock}>{formatTime()}</span>
            </div>
        </div>
    )

}
export default DigitalClock;