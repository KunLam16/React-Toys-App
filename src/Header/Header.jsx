import styles from './Header.module.css';


function Header() {

  function handleClick() {
    localStorage.clear();
    window.location.reload();
  }
  return (
    <header className={styles.header} onClick={handleClick}>
      <h1 className={styles.h1}>React Toys</h1>
    </header>
  );
}
export default Header;