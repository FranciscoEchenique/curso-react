import { render } from "@testing-library/react";
import FirstApp from "../src/FirstApp";

describe('Pruebas en <FirstApp />', () => {
    // test('Debe hacer match con el snapshot', () => {

    //     const title = 'Hola, soy Vegeta';

    //     const { container } = render( <FirstApp title={title} /> );

    //     expect( container ).toMatchSnapshot(); 

    // });

    test( 'Debe mostrar el título en un h1', () => {

        const title = 'Hola, soy Vegeta';
        const { container, getByText, getByTestId } = render( <FirstApp title={title} /> );
        expect( getByText(title) ).toBeTruthy();

        expect( getByTestId('test-title').innerHTML ).toContain( title );

    });


    test('Debe de mostrar el subtítulo enviado por props', () => { 
        const title = 'Hola, soy Vegeta';
        const subTitle = 'Soy un subtítulo';
        const { getByText } = render( <FirstApp title={ title } subTitle={ subTitle } /> );
        expect( getByText(subTitle) ).toBeTruthy();
    });
});