import React, { useEffect, useRef, useState } from 'react'
import { I_Todo } from '../../../App'
import {AiFillEdit  , AiFillDelete} from "react-icons/ai"
import {MdDone} from "react-icons/md"
import './style.css'
import { TodoList } from '../TodoList/TodoList'

interface I_Props {
    todo:I_Todo;
    todos:I_Todo[];
    setTodos: React.Dispatch<React.SetStateAction<I_Todo[]>>;
}

export const SingleTodo : React.FC<I_Props> = ({todo , todos , setTodos}) => {
    const [edit , setEdit] = useState<boolean>(false)
    const [editTodo , setEditTodo] = useState<string>(todo.todo)
    const editInputref = useRef<HTMLInputElement>(null)

    const handleDone = (id : number) => {
        setTodos(
            todos.map((todo) => todo.id === id ? {...todo , isDone : !todo.isDone} : todo)
        )
    }

    const handleDelete = (id : number) => {
        setTodos(
            todos.filter((todo) => todo.id !== id )
        )
    }

    const handleEdit = (e :React.FormEvent , id : number) => {
        e.preventDefault();
        setTodos(
            todos.map((todo) => todo.id === id ? {...todo , todo:editTodo} : todo)
        )
        setEdit(false)
    }

    useEffect(()=> {
        editInputref.current?.focus();
    },[edit])

  return (
    <form className='todos_single' onSubmit={(e)=> handleEdit(e, todo.id)}>
        {
            edit ? (
                <input ref={editInputref} value={editTodo} onChange={(e)=>setEditTodo(e.target.value)} className="todos_single--text"/>
            ) : (
                todo.isDone ? (
                    <s className='todos_single--text'>
                        {todo.todo}
                    </s>
                ): (
                    <span className='todos_single--text'>
                    {todo.todo}
                </span>
                )

            )
        }
        
        
        <div>
            <span className='icons' onClick={()=>  {
                if(!edit && !todo.isDone){
                    setEdit(!edit)
                }
            }}><AiFillEdit/></span>
            <span className='icons' onClick={()=>handleDelete(todo.id)}><AiFillDelete/></span>
            <span className='icons' onClick={()=>handleDone(todo.id)}><MdDone/></span>
        </div>
    </form>
  )
}
