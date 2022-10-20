import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';

describe('Pruebas imp exp 08', () => {
    test('getHeroeById debe retornar un héroe por ID', () => {

        const id = 1;
        const hero = getHeroeById(id);

        expect( hero ).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });
    });

    test('getHeroeById con ID 100 debe retornar undefined', () => {

        const id = 100;
        const hero = getHeroeById(id);

        expect( hero ).toBeFalsy( undefined );

    });


    test( 'GetHeoresByOwner debe retornar un arreglo con los héroes de DC', ()=> {
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);

        expect( heroes.length ).toBe( 3 );
        expect( heroes ).toEqual( [{
                id: 1,
                name: 'Batman',
                owner: 'DC'
            },
            {
                id: 3,
                name: 'Superman',
                owner: 'DC'
            },
            {
                id: 4,
                name: 'Flash',
                owner: 'DC'
            }
        ]);
    });

    test( 'GetHeroesByOwner debe retornar un arreglo con los héroes de Marvel', () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);

        expect( heroes.length ).toBe( 2 );
    });

});