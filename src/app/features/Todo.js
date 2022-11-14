import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, selectTodos } from './todoSlice'
import { ToDoInput } from '../components/TodoInput';

export const Todo = (props) => {
    // in todo: setstate onchange (react), submit = addtodo (= redux store)
    // other: submit with keydown and onclick of small check + clear onclisk of small x

    
    return (
        <div className='todo-container inner-app'>
            <div className="feature-inner">
                {props.children}          
            </div>
        </div>
    )
}