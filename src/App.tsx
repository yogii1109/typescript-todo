import React, { useState } from 'react';
import './App.css';
import {InputField} from './modules/shared/InputField/InputField';
import { TodoList } from './modules/shared/TodoList/TodoList';

export interface I_Todo {
  id:number;
  todo:string;
  isDone:boolean;
}

const App : React.FC = () => {
  const [todo , setTodo] = useState<string>("");
  const [todos , setTodos] = useState<I_Todo[]>([]);

  const handleAdd = (e : React.FormEvent ) : void => {
    e.preventDefault();
    if(todo){
      setTodos([...todos, {id:Date.now(), todo , isDone: false}])
      setTodo("");
    }
  }


  return (
    <div className='App'>
        <div className='heading'>Taskify</div>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
        <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
