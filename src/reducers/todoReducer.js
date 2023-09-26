import { ADD_TODO, DELETE_TODO } from "../actions/todoActions";
const initialState = {
    todos: [],
};

const todoReducer = (state = initialState, action) => {

    console.log(state)
    console.log(action)
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload.id),
            };
        default:
            return state;
    }
}

export default todoReducer;