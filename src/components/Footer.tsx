import styles from "./Footer.module.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <a href="#top" className={styles.logo}>
            <span className={styles.logoMark}>E</span>
            Empire Recruiting
          </a>

          <nav className={styles.links}>
            <a href="#about">Biz haqimizda</a>
            <a href="#services">Xizmatlar</a>
            <a href="#process">Jarayon</a>
            <a href="#why-us">Afzalliklar</a>
            <a href="#team">Jamoa</a>
            <a href="#contact">Aloqa</a>
          </nav>
        </div>

        <div className={styles.bottom}>
          <span>© {year} Empire Recruiting. Barcha huquqlar himoyalangan.</span>
          <span>Toshkent, O'zbekiston</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
