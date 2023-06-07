import css from './ContactListItem.module.css'

export const ContactListItem = ({ name, number, contactId, deleteHandle }) => {
  return (
    <li>
      <p className={css.contactInfo}>
        <span className={css.contactName}>{name}</span>: {number}
      </p>
      <button type="button" className={css.deleteBtn} onClick={() => deleteHandle(contactId)}>
        Delete
      </button>
    </li>
  );
};
