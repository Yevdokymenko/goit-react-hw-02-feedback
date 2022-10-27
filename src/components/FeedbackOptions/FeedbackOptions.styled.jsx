import styled from 'styled-components';

export const BtnList = styled.ul`
  display: flex;
  justify-content: center;
  margin: -10px;
`;

export const BtnItem = styled.li`
  margin: 10px;
`;

export const Button = styled.button`
  min-width: 100px;
  padding: 10px 20px;
  border: none;
  border: 1px solid black;
  border-radius: 5px;
  font-size: 20px;
  color: white;
  background-color: #ff8000;
  text-align: center;
  transition: all 200ms linear;
  cursor: pointer;
  :hover {
    border: 2px solid #ff8000;
    color: #ff8000;
    background-color: white;
  }
`;
