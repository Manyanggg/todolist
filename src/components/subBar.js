import React from 'react';
import { SubBarContainer, SubBarButton } from './subBarStyling';

//In this page, I set the active tab for each button, aim to load the to do list when user click the to do button. 
const SubBar = ({ activeTab, setActiveTab }) => { 
  return (
    <SubBarContainer>
      <SubBarButton
        active={activeTab === 'todo'}
        onClick={() => setActiveTab('todo')}
      >
        To do
      </SubBarButton>
      <SubBarButton
        active={activeTab === 'completed'}
        onClick={() => setActiveTab('completed')}
      >
        Completed
      </SubBarButton>
    </SubBarContainer>
  );
};

export default SubBar;
