import styles from "./FutureContact.module.css";
import { PhoneIcon, MailIcon, GlobeIcon, MapPinIcon } from "./Icons";

const PHONE_NUMBERS = ["+998 77 680 90 90", "+998 77 680 28 00"];

const FUTURE_ITEMS = [
  {
    emoji: "🤖",
    title: "Raqamli texnologiyalar",
    text: "Sun'iy intellekt elementlarini nomzodlarni saralash jarayoniga joriy etish.",
  },
  {
    emoji: "🌐",
    title: "Xalqaro hamkorlik",
    text: "Mintaqaviy loyihalar va xalqaro hamkorlik aloqalarini kengaytirish.",
  },
  {
    emoji: "🎓",
    title: "HR madaniyati",
    text: "O'zbekistonda HR madaniyatini yuksaltirishga qaratilgan trening va master-klasslar.",
  },
];

function FutureContact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <span className="eyebrow">Kelajak</span>
        <h2 className="section-heading">Kelajakka nazar</h2>

        <div className={styles.futureGrid}>
          {FUTURE_ITEMS.map((item) => (
            <div key={item.title} className={styles.futureCard}>
              <h4>
                <span className={styles.emoji}>{item.emoji}</span>
                {item.title}
              </h4>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

        <hr className={styles.divider} />

        <div className={styles.contactHead}>
          <h3>Biz bilan bog'laning</h3>
          <p>Biznesingiz uchun eng yaxshi kadrlarni topishga tayyormiz!</p>
        </div>

        <div className={styles.contactGrid}>
          <div className={styles.contactCard}>
            <div className={styles.iconWrap}>
              <PhoneIcon />
            </div>
            <div>
              <h4>Telefon</h4>
              {PHONE_NUMBERS.map((number) => (
                <a key={number} href={`tel:${number.replace(/\s/g, "")}`}>
                  {number}
                </a>
              ))}
            </div>
          </div>

          <div className={styles.contactCard}>
            <div className={styles.iconWrap}>
              <MailIcon />
            </div>
            <div>
              <h4>Elektron pochta</h4>
              <a href="mailto:info@empirerecruiting.uz">
                info@empirerecruiting.uz
              </a>
            </div>
          </div>

          <div className={styles.contactCard}>
            <div className={styles.iconWrap}>
              <GlobeIcon />
            </div>
            <div>
              <h4>Veb-sayt</h4>
              <p>www.empirerecruiting.uz</p>
            </div>
          </div>

          <div className={styles.contactCard}>
            <div className={styles.iconWrap}>
              <MapPinIcon />
            </div>
            <div>
              <h4>Manzil</h4>
              <p>Toshkent shahri</p>
            </div>
          </div>
        </div>

        <p className={styles.closing}>
          <strong>Empire Recruiting</strong> — Muvaffaqiyatli jamoa sari
          ilk qadamni biz bilan tashlang!
        </p>

        <div className={styles.ctaRow}>
          <a href="mailto:info@empirerecruiting.uz" className="btn btn--primary">
            Biz bilan bog'laning
          </a>
        </div>
      </div>
    </section>
  );
}

export default FutureContact;
