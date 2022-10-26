import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from '../src/GifExpertApp';

describe('Pruebas en <GiftExpertApp />', () => { 

    const inputValue = 'Saitama';

    test('onNewCategory debe almacenar una categoria', () => {
        render(<GifExpertApp />);
        
        const form = screen.getByRole('form');
        const input = screen.getByRole('textbox');

        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );

        expect( screen.getByText( inputValue ) );

    });
    test('onNewCategory no debe almacenar una categoria', () => {
        render(<GifExpertApp />);
        
        const form = screen.getByRole('form');
        const input = screen.getByRole('textbox');

        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );

        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );

        expect( screen.getAllByText( inputValue ).length ).toBeLessThan(2);

    });
 });