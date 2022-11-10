import { useState } from "react";

export const AddTodo = ({ onAddTodo }) => {

   const [description, setDescription] = useState('');

    const handleChange = e => {
       setDescription(e.target.value);
    }
 
    const handleSubmit = e => {
        e.preventDefault();

        if (description.length <= 1) return;

        const newTodo = {
            id: new Date().getMilliseconds() * 3,
            description: description,
            done: false
        }

        onAddTodo( newTodo );
        setDescription('');
    }

  return (
    <form onSubmit={ handleSubmit }>
        <input type='text' placeholder="Insert your todo"  className='form-control' onChange={ handleChange } value={ description }/>
        <button className="btn btn-outline-primary mt-2">New Todo</button>
    </form>
  )
}
