import { ContactItem } from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';

export const ContactList = ({ filteredContacts, onDelete }) => {
  return (
    <List>
      {filteredContacts.map(item => (
        <ContactItem key={item.id} contact={item} onDelete={onDelete} />
      ))}
    </List>
  );
};
