import { renderHook, act } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";

describe('Pruebas en useForm', () => {

    const initialForm = {
        name: 'Francisco',
        email: 'echeniquefrancisco127@gmail.com'
    };

    test('Debe de regresar la información el objeto por defecto', () => { 
        const { result } = renderHook( () => useForm( initialForm ) );

        console.log(result.current);
        
        expect( result.current ).toEqual( 
            {
                name: initialForm.name,
                email: initialForm.email,
                formState: initialForm,
                onInputChange: expect.any(Function),
                onResetForm: expect.any(Function)
            }
         );  
     });

     test('Debe de cambiar el nombre del formulario', () => { 
        const { result } = renderHook( () => useForm( initialForm ) );
        const { onInputChange } = result.current;

        act(() => {
            onInputChange( { target: { name: 'name', value: 'Fernando' } } );
        });

        expect( result.current.name ).toBe( 'Fernando' );
        expect( result.current.name ).toBe( 'Fernando' );
        
      });

});