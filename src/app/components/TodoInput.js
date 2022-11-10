import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, selectTodos } from '../features/todoSlice'

export const ToDoInput = (props) => {
    // const todos = useSelector(selectTodos);
    const dispatch = useDispatch();

    const [todo, setTodo] = useState('');

    const handleChange = (e) => {
        setTodo(e.target.value);
    }

    const handleKeyPress = () => {
        // e.preventDefault();
        if (KeyboardEvent.key === 'enter' && todo) {
            handleSubmit(todo);
        }
    }

    const handleSubmit = () => {
        // e.preventDefault();
        if (todo) {
            dispatch(addTodo(todo))
            setTodo('')
        }
    }
    
    return (
        <div className="todo-entry">
            <input type="text" value={todo} onChange={handleChange} onKeyDown={handleKeyPress} />
            <div onClick={() => handleSubmit()} className="todo-submit">
                <i className="fa-solid fa-check"></i>
            </div>
        </div>
    );
};
