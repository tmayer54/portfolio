import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { FaEnvelope, FaPaperPlane, FaCheck } from "react-icons/fa";
import "./Contact.css";

const FORMSPREE_ID = "xqeddvkj";

export default function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t.contact.title}
        </motion.h2>

        <motion.p
          className="contact-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {t.contact.subtitle}
        </motion.p>

        <motion.div
          className="contact-wrapper"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <a href="mailto:thibault.mayer54@gmail.com" className="contact-email-btn">
            <FaEnvelope /> {t.contact.emailBtn}
          </a>

          <div className="contact-divider">
            <span>or</span>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder={t.contact.formName}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
            <input
              type="email"
              name="email"
              placeholder={t.contact.formEmail}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
            <textarea
              name="message"
              placeholder={t.contact.formMessage}
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
            />
            <button
              type="submit"
              className={`btn btn-primary${status === "sent" ? " btn-success" : ""}${status === "error" ? " btn-error" : ""}`}
              disabled={status === "sending" || status === "sent"}
            >
              {status === "sending" && <><span className="spinner" /> Sending...</>}
              {status === "sent" && <><FaCheck /> Sent!</>}
              {status === "error" && <>Error — try again</>}
              {status === "idle" && <><FaPaperPlane /> {t.contact.formSend}</>}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
