import { useEffect } from "react";
import { useReducer } from "react"
import { todoReducer } from "../08-useReducer/todoReducer";

export const useTodos = () => {

    const init = () => {
        return JSON.parse( localStorage.getItem( 'todos' )) || [];
    };

    const [todos, dispatch] = useReducer( todoReducer, [], init );
    
    const onNewTodo = ( todo ) => {      
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        };

        dispatch( action );
    };

    const onDeleteTodo = id => {
        const action = {
            type: '[TODO] Remove Todo',
            payload: id
        }

        dispatch( action );
    };

    const onToggleTodo = (id) => {
        const action = {
            type: '[TODO] Toggle Todo',
            payload: id
        }

        dispatch( action );
    }

    const todosCount = todos.length;

    const todosPending = todos.filter(todo => !todo.done).length;

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ));
    }, [todos]);

  return {
    todos,
    onDeleteTodo,
    onNewTodo,
    onToggleTodo,
    todosCount,
    todosPending
  }
}
