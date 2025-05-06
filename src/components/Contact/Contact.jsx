import css from "./Contact.module.css";

function Contact({ contact, onDelete }) {
  return (
    <div className={css.item}>
      <span className={css.name}>👤 {contact.name}</span> -{" "}
      <span className={css.number}>📞 {contact.number}</span>
      <button className={css.button} onClick={onDelete}>
        Delete
      </button>
    </div>
  );
}

export default Contact;
