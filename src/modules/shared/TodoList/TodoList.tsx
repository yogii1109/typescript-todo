import React from 'react';
import './styled.css'
import { I_Todo } from './../../../App'
import { SingleTodo } from '../SingleTodo/SingleTodo';

 interface I_Props {
    todos:I_Todo[];
    setTodos: React.Dispatch<React.SetStateAction<I_Todo[]>>;
}

export const TodoList : React.FC<I_Props> = ({todos , setTodos} ) => {
  return (
    <div className='todos'>
        {todos && todos.map((todo:I_Todo) => (
            <SingleTodo key={todo.id} todo={todo} todos={todos} setTodos={setTodos}/>
        ))}
    </div>
  )
}
