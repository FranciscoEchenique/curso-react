export const TodoItem = ({ todo, handleDeleteTodo, handleToggle }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
        <span className={`align-self-center ${ todo.done ? 'text-decoration-line-through' : '' }`} onClick={() => handleToggle(todo.id)}> { todo.description } </span>
        <button className="btn btn-danger " onClick={ () => handleDeleteTodo(todo.id) }>Delete</button>
    </li>
  )
}
