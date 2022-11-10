import { TodoItem } from "./TodoItem"

export const TodosList = ({ todos = [], onDeleteTodo, onToggleTodo }) => {
  return (
    <ul className="list-group">
        {
            todos.map( todo => {
                return <TodoItem todo={ todo } onDeleteTodo={ onDeleteTodo } onToggleTodo={ onToggleTodo } key={ todo.id }/>
            })
        }
    </ul>    
  )
}
