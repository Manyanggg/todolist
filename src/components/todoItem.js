import React from 'react';
import { faFile, faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TodoItemContainer, IconContainer, TitleContainer, MainTitle, SubTitle, Priority, DueDate , DateText} from './todoItemStyling';

// Create a function that takes the priority as an argument and returns the corresponding color
// double check the letter case of the priority, avoid the case sensitive issue
const getPriorityStyles = (priority) => {
    const normalizedPriority = priority.toUpperCase(); 
    switch (normalizedPriority) {
      case 'HIGH':
        return { priorityColor: '#ffedee', textColor: '#ad1515' };
      case 'MEDIUM':
        return { priorityColor: '#fae8d2', textColor: '#ba8416' };
      case 'LOW':
        return { priorityColor: '#e7f7e6', textColor: '#33b866' };
      default:
        return { error: 'Invalid priority value' }; 
    }
  };

const TodoItem = ({ id, task, recruitmentCampaign, candidate, priority, dueDate }) => {

    const { priorityColor, textColor } = getPriorityStyles(priority);
    const priorityText = `${priority.toUpperCase()} PRIORITY`; //make sure the priority value is uppercase
    const subtitle = `${recruitmentCampaign} - ${candidate}`; // Combine the two subheading data to form the subtitle

    // Re-Format the date 
    // The toLocaleString() method is a built-in JavaScript method that returns a string with a language-sensitive representation of the date and time.
    // It will return a string date and time.
    const formattedDate = new Date(dueDate).toLocaleString('en-US', {
      weekday: 'short', 
      year: 'numeric',
      month: 'short', 
      day: 'numeric', 
      hour: 'numeric', 
      minute: '2-digit', 
      hour12: true 
    });
  

  return (
    <TodoItemContainer key={id}>
      <IconContainer priorityColor={priorityColor}>
          <FontAwesomeIcon icon={faFile} />
      </IconContainer>
      <TitleContainer>
          <MainTitle>{task}</MainTitle>
          <SubTitle>{subtitle}</SubTitle>
      </TitleContainer>
      <Priority priorityColor={priorityColor} textColor={textColor}>
          {priorityText}
      </Priority>
      <DueDate>
          <FontAwesomeIcon icon={faClock} />
          <DateText>{formattedDate}</DateText>   
      </DueDate>
    </TodoItemContainer>
  );
};

export default TodoItem;
