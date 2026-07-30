import styles from "./Quality.module.css";
import qualityDesk from "../assets/images/quality-desk.jpg";

const CRITERIA = [
  {
    title: "Texnik ko'nikmalar",
    text: "Professional testlar va sertifikatlar orqali tasdiqlanadi.",
  },
  {
    title: "Soft-skills",
    text: "Kommunikatsiya, liderlik va moslashuvchanlik baholanadi.",
  },
  {
    title: "Kompaniya qadriyatlari",
    text: "Madaniyatga moslik va uzoq muddatli hamkorlik imkoniyati.",
  },
];

function Quality() {
  return (
    <section className="section">
      <div className="container">
        <span className="eyebrow">Sifat standarti</span>
        <h2 className="section-heading">Sifat va ishonch kafolati</h2>

        <div className={styles.wrap}>
          <div className={styles.imageWrap}>
            <img src={qualityDesk} alt="Empire Recruiting sifat nazorati jarayoni" />
          </div>

          <div>
            <div className={styles.intro}>
              <h3>Biz faqat CV yig'ish bilan cheklanmaymiz</h3>
              <p>
                Har bir nomzod uchta asosiy mezon bo'yicha qat'iy filtrdan
                o'tkaziladi:
              </p>
            </div>

            <div className={styles.criteria}>
              {CRITERIA.map((item, index) => (
                <div key={item.title} className={styles.criterion}>
                  <span className={styles.num}>{index + 1}</span>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Quality;
