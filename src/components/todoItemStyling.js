import styled from 'styled-components';

export const TodoItemContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto auto;
  gap: 20px;
  align-items: center;
  padding: 15px;

  @media (max-width: 768px) {
    grid-template-columns: auto;
    gap: 10px;
  }
`;

export const IconContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.priorityColor};
`;

export const TitleContainer = styled.div`
  display: grid;
  width: 250px; 
  align-items: start; 
  text-align: left; 

  @media (max-width: 768px) {
    width: 100%; 
  }
`;

export const MainTitle = styled.h3`
  font-size: 16px;
  color: #333;
  font-weight: bold;
  margin: 0 !important;
`;

export const SubTitle = styled.p`
  font-size: 12px;
  color: #8f9494;
  margin: 0 !important;
`;

export const Priority = styled.div`
  width: 120px; 
  height: 20px; 
  background-color: ${(props) => props.priorityColor};
  color: ${(props) => props.textColor};
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  padding: 5px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DueDate = styled.div`
  display: flex; 
  align-items: center; 
  justify-content: center; 
  width: 220px;
  height: 20px;
  background-color: #f5f5f2;
  border-radius: 30px;
  font-size: 14px;
  padding: 10px;
  color: #666464;

  @media (max-width: 768px) {
    width: 200px; 
  }
`;

export const DateText = styled.span` 
  margin-left: 5px;
`;


