const {suma, divicion, multiplicacion, resta,} =require('../SRC/calculadora');
describe('Funciones de la calculadora', () =>{
    test('Suma de 2 + 2 = 4', () =>{
        expect(suma(2, 2)).toBe(4);
    });
    test('divicion de 2 / 2 = 1', () =>{
        expect(divicion(2, 2)).toBe(1);
    });
    test('multiplicacion de 2 * 2 = 4', () =>{
        expect(multiplicacion(2, 2)).toBe(4);
    });
    test('resta de 2 -2 = 0', () =>{
        expect(resta(2, 2)).toBe(0);
    });

})

