import { Item, StyledButton } from './ContactItem.styled';

export const ContactItem = ({ contact: { name, number, id }, onDelete }) => {
  return (
    <Item key={id}>
      {name}: {number}
      <StyledButton onClick={() => onDelete(id)}>Delete</StyledButton>
    </Item>
  );
};
