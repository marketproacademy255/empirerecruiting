import { useState } from "react";
import styles from "./Header.module.css";
import { MenuIcon, CloseIcon } from "./Icons";

const NAV_LINKS = [
  { href: "#about", label: "Biz haqimizda" },
  { href: "#services", label: "Xizmatlar" },
  { href: "#process", label: "Jarayon" },
  { href: "#why-us", label: "Afzalliklar" },
  { href: "#team", label: "Jamoa" },
];

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.bar}`}>
        <a href="#top" className={styles.logo}>
          <span className={styles.logoMark}>E</span>
          Empire Recruiting
        </a>

        <nav className={styles.nav}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <a href="#contact" className="btn btn--primary">
            Bog'lanish
          </a>
          <button
            className={styles.menuBtn}
            aria-label={open ? "Menyuni yopish" : "Menyuni ochish"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <div className={`${styles.mobilePanel} ${open ? styles.open : ""}`}>
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={styles.navLink}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <a href="#contact" className="btn btn--primary" onClick={() => setOpen(false)}>
          Bog'lanish
        </a>
      </div>
    </header>
  );
}

export default Header;
