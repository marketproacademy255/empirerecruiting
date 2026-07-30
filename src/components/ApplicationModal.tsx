import { useEffect, useState, type FormEvent } from "react";
import styles from "./ApplicationModal.module.css";
import { CloseIcon, SendIcon } from "./Icons";

const VACANCIES = [
  "Mass Recruitment",
  "Executive Search",
  "IT & Tech Recruiting",
  "HR Konsalting",
  "Boshqa",
];

type Props = {
  open: boolean;
  onClose: () => void;
};

type Status = { type: "success" | "error"; text: string } | null;

function ApplicationModal({ open, onClose }: Props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [vacancy, setVacancy] = useState(VACANCIES[0]);
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<Status>(null);

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (open) {
      setName("");
      setPhone("");
      setVacancy(VACANCIES[0]);
      setMessage("");
      setStatus(null);
      setSubmitting(false);
    }
  }, [open]);

  if (!open) return null;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);

    try {
      const res = await fetch("/.netlify/functions/submit-application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, vacancy, message }),
      });

      if (!res.ok) throw new Error("request-failed");

      setStatus({
        type: "success",
        text: "Arizangiz qabul qilindi! Tez orada siz bilan bog'lanamiz.",
      });
    } catch {
      setStatus({
        type: "error",
        text: "Xatolik yuz berdi. Iltimos, birozdan so'ng qayta urinib ko'ring yoki bizga to'g'ridan-to'g'ri qo'ng'iroq qiling.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className={styles.overlay}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className={styles.modal} role="dialog" aria-modal="true" aria-labelledby="application-modal-title">
        <button className={styles.closeBtn} onClick={onClose} aria-label="Yopish">
          <CloseIcon />
        </button>

        <h3 id="application-modal-title" className={styles.title}>
          Ariza qoldirish
        </h3>
        <p className={styles.subtitle}>
          Ma'lumotlaringizni qoldiring — Empire Recruiting mutaxassisi siz
          bilan bog'lanadi.
        </p>

        <form onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label htmlFor="app-name">Ism va familiya</label>
            <input
              id="app-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ismingizni kiriting"
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="app-phone">Telefon raqam</label>
            <input
              id="app-phone"
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+998 90 123 45 67"
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="app-vacancy">Qaysi yo'nalish bo'yicha?</label>
            <select
              id="app-vacancy"
              required
              value={vacancy}
              onChange={(e) => setVacancy(e.target.value)}
            >
              {VACANCIES.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.field}>
            <label htmlFor="app-message">Qo'shimcha izoh (ixtiyoriy)</label>
            <textarea
              id="app-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tajribangiz yoki savolingiz haqida qisqacha yozing"
            />
          </div>

          <button type="submit" className={`btn btn--primary ${styles.submitBtn}`} disabled={submitting}>
            {submitting ? "Yuborilmoqda..." : "Arizani yuborish"}
            {!submitting && <SendIcon />}
          </button>

          {status && (
            <div className={`${styles.status} ${styles[status.type]}`}>
              {status.text}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default ApplicationModal;
