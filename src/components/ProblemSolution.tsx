import styles from "./ProblemSolution.module.css";

const PROBLEMS = [
  {
    title: "Uzoq vaqt va resurs sarfi",
    text: "Malakali kadrlarni topish jarayoni ko'p vaqt va mablag' talab qiladi.",
  },
  {
    title: "Cultural fit baholash",
    text: "Nomzodlarning professional va shaxsiy mos kelishini aniqlash qiyin.",
  },
  {
    title: "Kadrlar qo'nimsizligi",
    text: "Tez-tez almashtirishlar barqarorlikni buzadi.",
  },
];

const SOLUTIONS = [
  {
    title: "Chuqurlashtirilgan skrining",
    text: "Kompetensiyalarni baholash tizimi.",
  },
  {
    title: "Ma'lumotlar bazasi",
    text: "Tezkor va kafolatlangan qidiruv.",
  },
  {
    title: "Individual yondashuv",
    text: "Executive Search pozitsiyalari.",
    wide: true,
  },
];

function ProblemSolution() {
  return (
    <section className="section section--alt">
      <div className="container">
        <span className="eyebrow">Muammo va yechim</span>
        <h2 className="section-heading">
          Bozordagi chaqiriqlar va bizning yechimimiz
        </h2>

        <div className={styles.columns}>
          <div>
            <h3 className={styles.colTitle}>Asosiy muammolar</h3>
            {PROBLEMS.map((item) => (
              <div key={item.title} className={styles.problemCard}>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            ))}
          </div>

          <div>
            <h3 className={styles.colTitle}>Bizning yechimimiz</h3>
            <div className={styles.solutionGrid}>
              {SOLUTIONS.map((item) => (
                <div
                  key={item.title}
                  className={`${styles.solutionCard} ${item.wide ? styles.wide : ""}`}
                >
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProblemSolution;
