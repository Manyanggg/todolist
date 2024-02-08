import React from 'react';
import TodoItem from './todoItem';
import tasksData from './tasksData.json'; 
import { TodoListContainer } from './todoListStyling';

const TodoList = () => {


    // 获取当前时间
    const now = new Date();

    //filter ==> when the id, task, dueDate is Null, it will not be shown
    //Check if the dueDate is in the future
    const filteredTasks = tasksData.filter(task => 
    task.id != null && task.task && task.dueDate && new Date(task.dueDate) > now); 

    // Use the descending order here, so the latest task will be shown first
    // Use spread operator here, so the original array will not be changed
    const sortedTasks = [...filteredTasks].sort((a, b) => b.id - a.id);

  return (
    <TodoListContainer> 
      {/* get the task in Json file and render them in TodoList */}
      {sortedTasks.map((task) => (
        <TodoItem 
          key={task.id}
          task={task.task}
          recruitmentCampaign={task.recruitmentCampaign} 
          candidate={task.candidate} 
          priority={task.priority}
          dueDate={task.dueDate}
        />
      ))}
    </TodoListContainer> 
  );
};

export default TodoList;