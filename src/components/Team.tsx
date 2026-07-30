import styles from "./Team.module.css";
import teamPhoto from "../assets/images/team-photo.jpg";

const HIGHLIGHTS = [
  {
    emoji: "🌍",
    title: "Xalqaro tajriba",
    text: "Global HR amaliyotlari va tendentsiyalarini chuqur o'rganish.",
  },
  {
    emoji: "👤",
    title: "Shaxsiy menejer",
    text: "Har bir mijoz uchun alohida mas'ul mutaxassis biriktiriladi.",
  },
  {
    emoji: "📈",
    title: "Doimiy rivojlanish",
    text: "Jamoaviy treninglar va xalqaro sertifikatsiyalar.",
  },
];

function Team() {
  return (
    <section id="team" className="section section--alt">
      <div className="container">
        <span className="eyebrow">Jamoa</span>
        <h2 className="section-heading">Bizning mutaxassislarimiz</h2>

        <div className={styles.top}>
          <div className={styles.visual}>
            <img src={teamPhoto} alt="Empire Recruiting mutaxassislari jamoasi" />
          </div>

          <div>
            <h3 className={styles.name}>Ekspert jamoa</h3>
            <p className={styles.text}>
              Jamoamiz ko'p yillik tajribaga ega bo'lgan rekruterlar,
              psixologlar va HR-strateglardan iborat. Biz doimiy ravishda
              xalqaro rekruting tendentsiyalarini o'rganib, ularni
              O'zbekiston bozoriga muvaffaqiyatli tatbiq etamiz.
            </p>
          </div>
        </div>

        <div className={styles.grid}>
          {HIGHLIGHTS.map((item) => (
            <div key={item.title} className={styles.card}>
              <h4>
                <span className={styles.emoji}>{item.emoji}</span>
                {item.title}
              </h4>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
