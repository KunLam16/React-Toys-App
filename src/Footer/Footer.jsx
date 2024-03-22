import styles from './Footer.module.css';

function Footer(){
    return(
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p className={styles.copyright}>&copy;{new Date().getFullYear()} React Toys by KunLam16</p>
            </div>
        </footer>
    )
}
export default Footer;