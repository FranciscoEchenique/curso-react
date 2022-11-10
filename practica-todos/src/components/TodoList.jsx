import { TodoItem } from "./TodoItem"

export const TodoList = ({ todos, handleDeleteTodo, handleToggle }) => {
  return (
    <ul className='list-group'>
        {
            todos.map(todo => {
                return <TodoItem  key={ todo.id } todo={ todo } handleDeleteTodo={ handleDeleteTodo } handleToggle={ handleToggle } />
            })
        }
    </ul>   
  )
}
