import styled from 'styled-components';

export const ListItem = styled.ul`
  list-style: none;
  display: block;
  margin: 20px;
  padding: 0 20px;
  width: 500px;
  margin-left: 15px;
  padding-left: 0;
`;

export const UserItem = styled.li`
  display: flex;
  gap: 50px;
  align-items: center;
  width: 500px;
  height: 100px;
  margin-bottom: 15px;
  border-radius: 5px;
  background: linear-gradient(45deg, #f69ec4, #f9dd94);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.4);

  font-family: roboto;
  font-weight: 500;
  font-size: 20px;
`;
