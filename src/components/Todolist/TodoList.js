import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions/todoActions';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = ({ todos, addTodo }) => {

    const [context, setContext] = useState('');
    const [id, setId] = useState(1);

    const handleSubmit = () => {
        console.log(context);
        console.log(id);
        console.log(todos);
        if (context.trim() !== '') {
            addTodo(id, context);
            setContext('');
            setId(id + 1);
        }
    };

    return (
        <div className='AddHeader'>
            <input type='text' placeholder='Enter New Task' value={context} onChange={(e) => setContext(e.target.value)} />
            <button onClick={handleSubmit} >Add</button>
            <ul>
                {todos && todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}


            </ul>

        </div>
    )
}

const mapStateToProps = (state) => {
    const { todos } = state;
    console.log(todos);
    return { todos };
};

export default connect(mapStateToProps, { addTodo })(TodoList);