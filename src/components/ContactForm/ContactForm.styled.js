import styled from 'styled-components';
import { Form, ErrorMessage, Field } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;

  max-width: 300px;
`;

export const ErrMessage = styled(ErrorMessage)`
  color: red;
  font-size: 14px;
`;

export const StyledLabel = styled.label`
  font-size: 20px;
`;

export const StyledField = styled(Field)`
  border-radius: 10px;
  border-color: green;
  height: 30px;
  margin-top: 6px;
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.2);
`;

export const StyledButton = styled.button`
  width: 150px;
  padding: 10px;
  height: 40px;
  margin-right: 0;
  margin-top: 30px;
  border-radius: 10px;
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.2);
`;
