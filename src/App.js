import React, { useState } from 'react';
import './App.css'; 
import Header from './components/header';
import SubBar from './components/subBar';
import TodoList from './components/todoList';

function App() {
  const [activeTab, setActiveTab] = useState('todo'); 

  return (
    <div className="App">
      <Header />
      {/* only load the to do list content when it has been active */}
      <SubBar activeTab={activeTab} setActiveTab={setActiveTab} /> 
      {activeTab === 'todo' && <TodoList />} 
    </div>
  );
}

export default App;
