import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, selectTodos } from '../features/todoSlice';
import SVGcheckmark from './check-solid.svg';


export const ToDoInput = (props) => {
    // const todos = useSelector(selectTodos);
    const {todo, setTodo, todoState, setTodoState} = props;
    const dispatch = useDispatch();

    // const [todo, setTodo] = useState('');

    const handleChange = (e) => {
        setTodo(e.target.value);
    }

    const handleEnter = (e) => {
        // e.preventDefault();
        const key = e.key;
        if (key === 'Enter' && todo) {
            handleSubmit(todo);
        }
    }

    const handleSubmit = () => {
        // e.preventDefault();
        if (todo) {
            dispatch(addTodo(todo))
            setTodo('');
        }
    }

    const handleClear = () => {
        setTodo('');
    }

    const checkmark = <img src={SVGcheckmark}/>
    // const placeholder = 'Submit with Enter or ' + checkmark;
    
    return (
        <div className="todo-entry">
            <input autocomplete="off" name='todo-entry' type="text" value={todo} onChange={handleChange} onKeyDown={handleEnter} placeholder='Submit with Enter or ' />
            <div onClick={() => handleClear()} className="todo-submit">x</div>
            <div onClick={() => handleSubmit()} className="todo-submit">
                {checkmark}
            </div>
        </div>
    );
};
