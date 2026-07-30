import styles from "./About.module.css";
import aboutMeeting from "../assets/images/about-meeting.jpg";

const STATS = [
  { number: "2019", label: "Faoliyat boshlangan yil" },
  { number: "O'zbekiston", label: "Faoliyat hududi" },
  { number: "4", label: "Xizmat yo'nalishi" },
  { number: "100%", label: "Mijozga individual yondashuv" },
];

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.panel}>
            <img src={aboutMeeting} alt="Empire Recruiting jamoasi HR strategiyasini muhokama qilmoqda" />
          </div>

          <div>
            <span className="eyebrow">Kompaniya haqida</span>
            <h2 className="section-heading">Biz kimmiz?</h2>
            <div style={{ marginTop: 24 }}>
              <h3 className={styles.name}>Empire Recruiting</h3>
              <p className={styles.text}>
                O'zbekiston bozorida zamonaviy va xalqaro standartlarga
                javob beruvchi ilg'or rekruting agentligi. Biz biznes va
                iste'dodlar o'rtasidagi ko'prik vazifasini bajarib,
                kompaniyalarga o'z jamoasini shakllantirishda strategik
                hamkorlikni taklif etamiz.
              </p>
              <div className={styles.missionBox}>
                <p className={styles.missionText}>
                  <strong>Missiyamiz:</strong> Har bir kompaniya uchun
                  mukammal mutaxassisni va har bir mutaxassis uchun o'z
                  o'rnini topishga ko'maklashish.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.statsStrip}>
          {STATS.map((stat) => (
            <div key={stat.label} className={styles.stat}>
              <div className={styles.panelNumber}>{stat.number}</div>
              <div className={styles.panelLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
