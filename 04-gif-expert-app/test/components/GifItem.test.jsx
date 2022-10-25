import { render, screen } from '@testing-library/react';
import { GifItem } from "../../src/components";


describe('Pruebas en <GifItem />', () => { 

    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg'

    test('Debe hacer match con el snapshot', () => { 
        const { container } = render( <GifItem title={title} url={url} /> );

        expect( container ).toMatchSnapshot();
     });

     test('debe de mostrar la imagen con el URL y el ALT indicado', () => { 
        render( <GifItem title={title} url={url} /> );

        expect( screen.getByRole('img').src ).toBe( url );
        expect( screen.getByRole('img').alt ).toBe( title + ' gif' );

      });

      test('Debe de mostrar el título', () => {
        render( <GifItem title={title} url={url} /> );

        expect( screen.getByText( title ) ).toBeTruthy();

      })
 });