import styles from "./Clients.module.css";
import clientsSegments from "../assets/images/clients-segments.jpg";

function Clients() {
  return (
    <section className="section section--alt">
      <div className="container">
        <span className="eyebrow">Hamkorlar</span>
        <h2 className="section-heading">Kimlar uchun xizmat qilamiz?</h2>

        <div className={styles.grid}>
          <div className={styles.imageWrap}>
            <img
              src={clientsSegments}
              alt="Xalqaro kompaniyalar, yirik mahalliy ishlab chiqarish, startaplar, moliya va bank sektori"
            />
          </div>

          <div>
            <h3 className={styles.name}>Bizning mijozlarimiz</h3>
            <p className={styles.text}>
              Empire Recruiting har bir sektor uchun moslashtirilgan
              yondashuvni taklif etadi. Xalqaro kompaniyalardan tortib tez
              rivojlanayotgan startaplarga qadar — barcha darajadagi
              bizneslar uchun professional kadrlar yechimlari.
            </p>
            <div className={styles.managerBox}>
              Har bir mijoz uchun alohida strategiya va shaxsiy menejer
              biriktiriladi.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Clients;
