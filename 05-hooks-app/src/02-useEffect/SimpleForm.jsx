import React from 'react'
import { useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'Francisco',
        email: 'echeniquefranciscso127@gmail.com'
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { value, name } = target;

        setFormState({
            ...formState,
            [ name ]: value
        })
    }

  return (
    <>
        <h1>SimpleForm</h1>

        <hr />

        <input 
            type='text'
            className='form-control'
            placeholder='Username'
            name='username'
            value={ username }
            onChange={ onInputChange }
        />

        <input 
            type='text'
            className='form-control mt-2'
            placeholder='Email'
            name='email'
            value={ email }
            onChange={ onInputChange }
        />

        {
            (username === 'strider2') && <Message />
        }

    </>
  )
}
