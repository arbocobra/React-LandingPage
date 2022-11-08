import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, toggleComplete, selectTodos } from './todoSlice'

export const Todo = () => {
    // in todo: setstate onchange (react), submit = addtodo (= redux store)
    // other: submit with keydown and onclick of small check + clear onclisk of small x

    const todos = useSelector(selectTodos);
    const dispatch = useDispatch();
    
    const [todo, setTodo] = useState('');
    return (
        <div className='todo-container inner-app'>
            <h3>To Do</h3>
            
        </div>
    )
}