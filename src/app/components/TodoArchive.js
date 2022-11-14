import React, { useState } from 'react';
import { deleteTodo, toggleComplete } from '../features/todoSlice';
import { useDispatch } from 'react-redux';
import SVGcheckmark from './check-solid.svg';

export const TodoArchive = (props) => {
    const {todo, handleToggle, handleDelete, complete} = props;
    // const [complete, setComplete] = useState(false);
    
    // const dispatch = useDispatch();

    // const handleToggle = (id) => {
    //     setComplete(!complete);
    //     dispatch(toggleComplete(id));
    // }
    // const handleDelete = (id) => {
    //     console.log()
    //     dispatch(deleteTodo(id));
    // }

    const checkmark = <img src={SVGcheckmark}/>

    return (
        <div key={todo.id} className="todo-box">
            <p>{todo.text}</p>
            <div className='todo-options'>
                {/* <input type="checkbox" value='complete' className='todo-submit' name='delete-todo' onClick={() => handleToggle(todo.id)} /> */}
                {/* <button value='false' className='todo-submit checkbox' onClick={() => handleDelete(todo.id)}>{complete && checkmark}</button> */}
                <div className='todo-submit checkbox' onClick={() => handleToggle(todo.id)}>{complete && checkmark}</div>
                <div className='todo-submit' onClick={() => handleDelete(todo.id)}>x</div>
            </div>
        </div>
    )
}