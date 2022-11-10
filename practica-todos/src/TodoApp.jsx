import { useState } from "react";
import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";

export const TodoApp = () => {
    const [todos, setTodos] = useState([]);

    const onAddTodo = ( todo ) => {
        setTodos( [...todos, todo] );
    };

    const handleDeleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    const handleToggle = (id) => {
        setTodos(todos.map(todo => {
            if(todo.id === id){
                return {
                    ...todo,
                    done: !todo.done
                }
            };

            return todo;
        }));
    }

  return (
    <>
        <h1 >TodoApp: { todos.length }, <small>pending: {todos.filter(todo => !todo.done).length}</small></h1>
        <hr />

        <div className="row mt-5">
            <div className="col-7">
                <h2>Todos</h2>
                <hr />
                <TodoList todos={ todos } handleDeleteTodo={ handleDeleteTodo } handleToggle={ handleToggle }/>
            </div>

            <div className="col-5">
                <h2>New Todo</h2>
                <hr />
                <AddTodo onAddTodo={ onAddTodo }/>
            </div>
        </div>
    </>
  )
}

