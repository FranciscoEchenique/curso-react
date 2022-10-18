import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('Pruebas es 0-7 desestructuración de arreglos', () => {
    test('Debe retornar un string y un número', () => {
      const [ letters, numbers ] = retornaArreglo();
      
      expect( letters ).toEqual( expect.any( String ) );
      expect( typeof numbers ).toBe( 'number' );

    });
})