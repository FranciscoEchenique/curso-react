import { fireEvent, render, renderHook, screen } from "@testing-library/react";
import { MultiplesCustomHooks } from "../../src/03-examples/MultiplesCustomHooks";
import { useCounter } from "../../src/hooks/useCounter";
import { useFetch } from "../../src/hooks/useFetch";

jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter");

describe('Pruebas en <MultipleCustomHooks />', () => { 
    
    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });
    beforeEach( () => {
        jest.clearAllMocks();
    } )

    test('Debe de mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });

        render(<MultiplesCustomHooks />);

        expect( screen.getByText('...Loading') ).toBeTruthy();
        expect( screen.getByRole('heading', { name: 'BreakingBad Quotes' } ) ).toBeTruthy();

    });
    test('Debe de mostrar un quote', () => {

        useFetch.mockReturnValue({
            data: [{author: 'Fernando', quote: 'Hola Mundo'}],
            isLoading: false,
            hasError: null
        });

        render(<MultiplesCustomHooks />);
        expect( screen.getByText('Hola Mundo') ).toBeTruthy();
        expect( screen.getByText('Fernando') ).toBeTruthy();
      
    });
    test('Debe de llamar la función de incrementar', () => {
        useFetch.mockReturnValue({
            data: [{author: 'Fernando', quote: 'Hola Mundo'}],
            isLoading: false,
            hasError: null
        });

        render(<MultiplesCustomHooks />);
        const button = screen.getByRole( 'button', { name: 'Next Quote' } );

        fireEvent.click( button );

        expect( mockIncrement ).toHaveBeenCalled();

    });
 });