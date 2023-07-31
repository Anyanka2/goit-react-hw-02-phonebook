import styled from '@emotion/styled';

export const FilterCont = styled.div`
  margin-bottom: 15px;
`;

export const Label = styled.label`
  color: #000;
  font-size: 20px;
  margin-left: 15px;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 408px;
  padding: 8px;
  margin: 15px auto;
  border-radius: 8px;
  border: none;
  border: 3px solid #dfeff5;
  font-size: 20px;

   &:focus{
  outline: none;
  border: 3px solid #e88606;
  }
`;
