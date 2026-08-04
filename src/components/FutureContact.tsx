import styles from "./FutureContact.module.css";
import { PhoneIcon, MailIcon, GlobeIcon, MapPinIcon, TelegramIcon } from "./Icons";

const PHONE_NUMBERS = ["+998 77 680 90 90", "+998 77 680 28 00"];
const TELEGRAM_LINK = "https://t.me/impire_hr";

type Props = {
  onApply: () => void;
};

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

function FutureContact({ onApply }: Props) {
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
            <div className={styles.contactInfo}>
              <h4>Telefon</h4>
              {PHONE_NUMBERS.map((number) => (
                <a key={number} href={`tel:${number.replace(/\s/g, "")}`} className={styles.phoneNumber}>
                  {number}
                </a>
              ))}
            </div>
          </div>

          <div className={styles.contactCard}>
            <div className={styles.iconWrap}>
              <TelegramIcon />
            </div>
            <div className={styles.contactInfo}>
              <h4>Telegram</h4>
              <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer">
                @impire_hr
              </a>
            </div>
          </div>

          <div className={styles.contactCard}>
            <div className={styles.iconWrap}>
              <MailIcon />
            </div>
            <div className={styles.contactInfo}>
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
            <div className={styles.contactInfo}>
              <h4>Veb-sayt</h4>
              <p>www.empirerecruiting.uz</p>
            </div>
          </div>

          <div className={styles.contactCard}>
            <div className={styles.iconWrap}>
              <MapPinIcon />
            </div>
            <div className={styles.contactInfo}>
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
          <button type="button" className="btn btn--primary" onClick={onApply}>
            Ariza qoldirish
          </button>
          <a
            href={TELEGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--ghost"
          >
            Telegramda bog'laning
          </a>
        </div>
      </div>
    </section>
  );
}

export default FutureContact;
