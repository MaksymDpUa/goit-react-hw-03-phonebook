import { ContactListItem } from 'components/ContactListItem/ContactListItem';

export const ContactList = ({ contacts, deleteHandle }) => {
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <ContactListItem
            key={contact.name}
            name={contact.name}
            number={contact.number}
            deleteHandle={deleteHandle}
            contactId={contact.id}
          />
        );
      })}
    </ul>
  );
};
