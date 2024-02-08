import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 8px;
  margin-top: 20px;
  margin-left: 20px;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 20px;
  color: #333;
`;

export const Actions = styled.div`
  display: flex;
  margin-left: 380px;
  gap: 10px;

  @media (max-width: 760px) {
    margin-left: 20px; 
    margin-top: 10px; 
  }
`;

export const ActionButton = styled.button`
  padding: 8px 16px;
  margin-left: 8px;
  background-color: #e8fcfb ;
  color: #56b8af; 
  font-weight: bold; 
  font-size: 16px; 
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #b3fcee;
  }
`;

