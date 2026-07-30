import styles from "./Hero.module.css";
import { ArrowRightIcon } from "./Icons";
import heroBuilding from "../assets/images/hero-building.jpg";

function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <div>
          <span className="eyebrow">Empire Recruiting</span>
          <h1 className={styles.title}>
            Kelajak kadrlarini
            <br />
            birlashtiramiz
          </h1>
          <p className={styles.subtitle}>
            Professional rekruting va HR yechimlar — biznes va iste'dodlar
            o'rtasidagi ishonchli ko'prik.
          </p>

          <div className={styles.ctaRow}>
            <a href="#contact" className="btn btn--primary">
              Biz bilan bog'laning
              <ArrowRightIcon />
            </a>
            <a href="#services" className="btn btn--ghost">
              Xizmatlarimiz
            </a>
          </div>

          <div className={styles.stats}>
            <div>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>Kafolatli almashtirish</div>
            </div>
            <div>
              <div className={styles.statNumber}>4+</div>
              <div className={styles.statLabel}>Xizmat yo'nalishi</div>
            </div>
            <div>
              <div className={styles.statNumber}>1:1</div>
              <div className={styles.statLabel}>Shaxsiy menejer</div>
            </div>
          </div>
        </div>

        <div className={styles.visual}>
          <img src={heroBuilding} alt="Empire Recruiting ofisi" className={styles.photo} />
          <span className={styles.badge}>Toshkent, O'zbekiston</span>
          <div className={styles.card}>
            <div className={styles.cardTitle}>Executive Search</div>
            <div className={styles.cardText}>
              Top-menejerlar va C-level yetakchilarni tanlash bo'yicha
              individual yondashuv.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
