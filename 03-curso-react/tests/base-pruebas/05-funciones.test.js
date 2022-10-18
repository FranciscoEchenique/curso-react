import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => { 
    test('La función getUser debe devolver un objeto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect( testUser ).toStrictEqual( user );
    });

    test('La función getUsuarioActivo debe devolver un objeto', () => { 

        const name = 'Francisco'

        const testUser = {
            uid: 'ABC567',
            username: name
        };
        
        const activeUser = getUsuarioActivo( name );

        expect( testUser ).toStrictEqual( activeUser );
    });
});