export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export const addTodo = (id, content) => (dispatch) => {
    dispatch({
        type: ADD_TODO,
        payload: { id, content },
    });
};

export const deleteTodo = (id) => (dispatch) => {
    dispatch({
        type: DELETE_TODO,
        payload: { id },
    });
};

