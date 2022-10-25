import { useState } from 'react';
import PropTypes from 'prop-types';

export function AddCategory( { onNewCategory } ) {

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
        <form onSubmit={handleSubmit} aria-label='form'>
            <input type='text' placeholder="Buscar gifs" onChange={onInputChange} value={inputValue} />
        </form>
    );
}
AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}