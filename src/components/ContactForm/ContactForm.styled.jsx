import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 12px;
  font-weight: 500;
  background-color: #dfeff5;
  border: 3px solid #e88606;
  border-radius: 8px;
`;
export const Input = styled.input`
  margin-top: 10px;
  padding: 6px 10px;
  border: none;
  border: 2px solid #dfeff5;
  border-radius: 5px;
  font: inherit;
  cursor: pointer;

  &:focus{
  outline: none;
  border: 2px solid #e88606;
  background-color: #fff;
  }
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  color: #e88606;
  font-size: 20px;
`;
export const Button = styled.button`
  padding: 6px 10px;
  font: inherit;
  cursor: pointer;
  border-radius: 8px;
  border: 3px solid #e88606;
  color: #e88606;
  font-size: 20px;
 
  &:hover,
  &:focus {
    color: #fff;
    background-color: #e88606;
    cursor: pointer;
  }
`;