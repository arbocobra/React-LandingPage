import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, toggleComplete, selectTodos } from './todoSlice'
import { TodoArchive } from '../components/TodoArchive';

// in archive: useselect store, delete + toggle = redux store
// other: display preview - extend (animate slide fom right) on hover to view full

export const Archive = () => {
    const todos = useSelector(selectTodos);
    // const [todoState, setTodoState] = useState(todos);
    const dispatch = useDispatch();

    const [complete, setComplete] = useState(false);

    const handleToggle = (id) => {
        console.log(id)
        setComplete(!complete);
        dispatch(toggleComplete(id));
    }
    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
    }

    return (
        <div className='archive-container inner-app'>
            <div className="feature-inner">
                <h3>To do list:</h3>
                {todos.map(todo => <TodoArchive todo={todo} handleToggle={handleToggle} handleDelete={handleDelete} complete={complete} />)}
            </div>
        </div>
    )
}