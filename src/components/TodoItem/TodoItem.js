import React from 'react'
import { connect } from 'react-redux'
import { deleteTodo } from '../../actions/todoActions'

const TodoItem = ({ todo, deleteTodo }) => {
    console.log('fdfdsf');
    return (
        <li>
            {todo.content}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
    );
};

export default connect(null, { deleteTodo })(TodoItem);