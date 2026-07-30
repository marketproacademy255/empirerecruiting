import styles from "./WhyUs.module.css";
import { ZapIcon, GraduationCapIcon, ShieldCheckIcon, LockIcon } from "./Icons";
import whyUsTeam from "../assets/images/whyus-team.jpg";

const ITEMS = [
  {
    icon: ZapIcon,
    title: "Tezkorlik va aniqlik",
    text: "Vakansiyalarni qisqa fursatlarda va sifatli yopish — vaqt va resurs tejaymiz.",
  },
  {
    icon: GraduationCapIcon,
    title: "Ekspertiza",
    text: "Bozor tendentsiyalarini chuqur tushunadigan professional HR mutaxassislar jamoasi.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Kafolat",
    text: "Sinov davrida nomzod ishdan bo'shasa, bepul almashtirib berish kafolati.",
  },
  {
    icon: LockIcon,
    title: "Maxfiylik",
    text: "Ma'lumotlar xavfsizligi va biznes sirlarini qat'iy saqlash.",
  },
];

function WhyUs() {
  return (
    <section id="why-us" className="section">
      <div className="container">
        <span className="eyebrow">Afzalliklar</span>
        <h2 className="section-heading">Nima uchun aynan Empire Recruiting?</h2>

        <div className={styles.grid}>
          <div className={styles.list}>
            {ITEMS.map((item) => (
              <div key={item.title} className={styles.item}>
                <div className={styles.iconWrap}>
                  <item.icon />
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.visual}>
            <img src={whyUsTeam} alt="Empire Recruiting jamoasi" className={styles.photo} />
            <p className={styles.quote}>
              "Har bir kompaniya uchun mukammal mutaxassisni topish —
              bizning ishimiz."
            </p>
            <p className={styles.quoteBy}>Empire Recruiting jamoasi</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
