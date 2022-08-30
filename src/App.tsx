import React from 'react';
import './App.css';
import { TodoCRUDContainerComponent } from './Components/TodoCRUDComponent';
import { TodoContainerComponent } from './Components/TodoListContainerComponent';

function App() {
  return (
    <div className="App">
      <TodoContainerComponent />
      <TodoCRUDContainerComponent />
    </div>
  );
}

export default App;
