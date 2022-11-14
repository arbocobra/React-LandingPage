import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, toggleComplete, selectTodos } from '../features/todoSlice';

import { Reselect } from '../features/Reselect';
import { Todo } from '../features/Todo';
import { Archive } from '../features/Archive';
import { Quote } from '../features/Quote';
import { Weather } from '../features/Weather';
import { ToDoInput } from './TodoInput';

export const AppFeatures = (props) => {
    const dispatch = useDispatch();
    const [todo, setTodo] = useState('');
    const [todoState, setTodoState] = useState('');

    


    return (
        <div className="app-container">
            <Reselect />
            <Weather />
            <Todo>
                <ToDoInput todo={todo} setTodo={setTodo} todoState={todoState} setTodoState={setTodoState} />
            </Todo>
            <Archive todo={todo} todoState={todoState} />
            <Quote />
        </div>
    );
};
