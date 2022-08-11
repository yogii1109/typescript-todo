import { useRef } from 'react';
import './style.css'

interface I_Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

export const InputField: React.FC<I_Props> = ({ todo, setTodo, handleAdd }) => {
    const inputRef = useRef<HTMLInputElement>(null)
    return (
        <form className='input' onSubmit={(e) => {
            handleAdd(e)
            inputRef.current?.blur();
            }}>
            <input ref={inputRef} type="input" value={todo} onChange={(e) => { setTodo(e.target.value) }} placeholder='Enter Your Task' className='input_box' />
            <button className='input_submit' type='submit'>Create Task</button>
        </form>
    )
}
