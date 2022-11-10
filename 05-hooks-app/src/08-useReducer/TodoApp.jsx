import { useTodos } from "../hooks/useTodos";
import { FormAdd } from "./FormAdd";
import { TodosList } from "./TodosList";

export const TodoApp = () => {

    const { todos, onDeleteTodo, onNewTodo, onToggleTodo, todosCount, todosPending } = useTodos();

  return (
    <>
        <h1>TodoApp: { todosCount}, <small>pendientes: { todosPending }</small></h1>
        <hr/>

        <div className="row">
            <div className="col-7">
                <TodosList todos={ todos } onDeleteTodo={ onDeleteTodo } onToggleTodo={ onToggleTodo } />
            </div>

            <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr />
                <FormAdd onNewTodo={ onNewTodo }/>
            </div>

        </div>
    </>
  )
}
