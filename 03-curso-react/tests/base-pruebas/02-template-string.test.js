import { getSaludo } from '../../src/base-pruebas/02-template-string';

describe('Pruebas en 02-template-string', () => {
    test('La función getSaludo debe retornar "Hola Francisco"', () => {

        const name = 'Francisco';
        const message = getSaludo( name );

        expect( message ).toBe( `Hola ${name}` );
    });
});