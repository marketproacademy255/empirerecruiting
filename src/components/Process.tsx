import styles from "./Process.module.css";
import {
  SearchIcon,
  TargetIcon,
  UsersIcon,
  PresentationIcon,
  UserCheckIcon,
} from "./Icons";

const STEPS = [
  {
    icon: SearchIcon,
    title: "Talabni o'rganish",
    text: "Kompaniya madaniyati va vakansiya profili bilan chuqur tanishish.",
  },
  {
    icon: TargetIcon,
    title: "Strategiya va qidiruv",
    text: "Bozor tahlili va eng mos nomzodlarni jalb qilish.",
  },
  {
    icon: UsersIcon,
    title: "Baholash va intervyu",
    text: "Ilk suhbatlar va professional test sinovlari.",
  },
  {
    icon: PresentationIcon,
    title: "Taqdimot",
    text: "Eng saralangan nomzodlar ro'yxatini buyurtmachiga taqdim etish.",
  },
  {
    icon: UserCheckIcon,
    title: "Kafolatli yakun",
    text: "Nomzodni ishga qabul qilish va sinov muddatini kuzatib borish.",
  },
];

function Process() {
  return (
    <section id="process" className="section section--alt">
      <div className="container">
        <span className="eyebrow">Jarayon</span>
        <h2 className="section-heading">Hamkorlik qanday amalga oshiriladi?</h2>
        <p className={styles.intro}>
          Empire Recruiting har bir bosqichda mijoz bilan yaqin muloqotda
          ishlaydi — natija va sifat kafolatlangan.
        </p>

        <div className={styles.grid}>
          {STEPS.map((step, index) => (
            <div key={step.title} className={styles.step}>
              <div className={styles.stepHead}>
                <span className={styles.stepIndex}>{index + 1}</span>
                <div className={styles.stepIcon}>
                  <step.icon />
                </div>
              </div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
