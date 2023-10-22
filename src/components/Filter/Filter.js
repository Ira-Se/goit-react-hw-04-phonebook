import { StyledInput, Container } from './Filter.styled';

export const Filter = ({ filter, onChange }) => {
  return (
    <Container>
      <label htmlFor="filerInput">Find contacts by name</label>
      <StyledInput type="text" value={filter} onChange={onChange} />
    </Container>
  );
};
