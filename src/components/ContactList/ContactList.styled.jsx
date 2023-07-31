import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 400px;
  padding: 12px;
  border-radius: 8px;
  background-color: #dfeff5;
  border: 3px solid #e88606;
  list-style: none;
`;

export const Item = styled.li`
  background-color: #fff;
  border: 2px solid #dfeff5;
  padding: 6px;
  border-radius: 8px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
`;

export const Button = styled.button`
  padding: 2px 8px;
  font: inherit;
  cursor: pointer;
  border-radius: 8px 8px;
  border: 3px solid #e88606;
  color: #e88606;
  background-color: #e8e8e8;
  &:hover,
  &:focus {
    color: #fff;
    background-color: #e88606;
    cursor: pointer;
  }
`;