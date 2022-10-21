import { useState } from 'react';

export default function AddCategory( { onNewCategory } ) {

    const [inputValue, setInputValue] = useState('One Punch');

    const onInputChange = ( { target } ) => {
        setInputValue( target.value );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newInputValue = inputValue.trim();


        if( newInputValue.length <= 1 ) return;

        onNewCategory( newInputValue );
        setInputValue('');
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder="Buscar gifs" onChange={onInputChange} value={inputValue} />
        </form>
    );
}