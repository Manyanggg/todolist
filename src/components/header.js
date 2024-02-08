import React, { useState } from 'react';
import { StyledHeader, Title, Actions, ActionButton } from './headerStyling'; 
import Popup from './popUp/popUp';

const Header = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState('');
  
    const openModal = (content) => {
      setModalContent(content);
      setModalIsOpen(true);
    };
  
    const closeModal = () => {
      setModalIsOpen(false);
    };
  
    return (
      <StyledHeader>
        <Title>Tasks</Title>
        <Actions>
          <ActionButton onClick={() => openModal('Add task')}>Add task</ActionButton>
          <ActionButton onClick={() => openModal('Start workflow')}>Start workflow</ActionButton>
        </Actions>
        <Popup isOpen={modalIsOpen} onRequestClose={closeModal}>
          <h2>{modalContent}</h2>
          <button onClick={closeModal}>Close</button>
        </Popup>
      </StyledHeader>
    );
  };
  export default Header;