import styles from "./Services.module.css";
import {
  UsersIcon,
  PresentationIcon,
  DatabaseIcon,
  UserCheckIcon,
} from "./Icons";
import massRecruitmentImg from "../assets/images/service-mass-recruitment.jpg";
import executiveSearchImg from "../assets/images/service-executive-search.jpg";
import itTechImg from "../assets/images/service-it-tech.jpg";
import hrConsultingImg from "../assets/images/service-hr-consulting.jpg";

const SERVICES = [
  {
    icon: UsersIcon,
    image: massRecruitmentImg,
    title: "Mass Recruitment",
    text: "Savdo vakillari, operatorlar va xizmat ko'rsatish xodimlari uchun tezkor ommaviy tanlov.",
  },
  {
    icon: PresentationIcon,
    image: executiveSearchImg,
    title: "Executive Search",
    text: "Top-menejerlar va C-level darajasidagi yetakchilarni tanlash.",
  },
  {
    icon: DatabaseIcon,
    image: itTechImg,
    title: "IT & Tech Recruiting",
    text: "Dasturchilar, tahlilchilar va texnik mutaxassislarni aniq filtrlar asosida yollash.",
  },
  {
    icon: UserCheckIcon,
    image: hrConsultingImg,
    title: "HR Konsalting",
    text: "Baholash markazlari, kadrlar siyosatini optimallashtirish va intervyu jarayonlarini yo'lga qo'yish.",
  },
];

function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <span className="eyebrow">Xizmatlar</span>
        <h2 className="section-heading">Biz taqdim etadigan xizmatlar</h2>

        <div className={styles.grid}>
          {SERVICES.map((service) => (
            <div key={service.title} className={styles.card}>
              <img
                src={service.image}
                alt={service.title}
                className={styles.thumb}
              />
              <div className={styles.body}>
                <div className={styles.iconWrap}>
                  <service.icon />
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
