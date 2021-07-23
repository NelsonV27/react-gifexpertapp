import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState(''); //Undefined pero si le reemplazamos ''
    //funcion para evaluar el cambio del dato 
    const handleInputChange = ( e ) => {
        //console.log( e.target.value );
        setInputValue( e.target.value );
        
    }
    //funcion para guardar un dato mediante la caja de texto y tambien de agregar el dato
    const handleSubmit = ( e ) => {
        e.preventDefault();
       
        if( inputValue.trim().length > 2){
             //console.log('submit hecho');
             setCategories( cats => [ inputValue, ...cats]);
             setInputValue('');

        }

        
    }

    return (
        //formulario que se muestra en la web
        <form onSubmit={ handleSubmit }>
            <input 
                type="text" 
                value={inputValue}
                onChange={ handleInputChange }
            />
        </form>
            
            
        
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
