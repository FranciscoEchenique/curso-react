import { useState } from "react"
import { useForm } from "../hooks/useForm";

export const FormAdd = ({ onNewTodo }) => {
  
    const { description, onInputChange, onResetForm } = useForm({
        description: ''
    });

    const handleSubmit = e => {
        e.preventDefault();

        if(description.length <= 1) return;

        const newTodo = {
            id: new Date().getMilliseconds() * 3,
            description,
            done: false
        }

        onNewTodo( newTodo );
        onResetForm();
    };

  return (
    <form onSubmit={ handleSubmit }>
        <input type="text" placeholder="Que hay que hacer..." className="form-control" onChange={ onInputChange } name='description' value={ description }/>
        <button className="btn btn-outline-primary mt-1" type="submit">Agregar</button>
    </form>
  )
}
