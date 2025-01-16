
//se exporto lo siguiente del archivo 06
import { Product, taxCalculation } from './06-function-destructuring';

//cree un nuevo carrito de productos con nuevos productos
const shopingCart:Product[] = [
    {
        description: 'Nokia',
        price: 100
    },
    {
        description: 'ipad',
        price: 150
    }
];

//destructure lo que retorna taxCalculation mandando como parametros taxCalculationOptions(los products y los tax)
const [total, tax] = taxCalculation({
    products: shopingCart,
    tax: 0.15
});

//Lo imprimi
console.log('Total', total);
console.log('Tax', tax);

//OJO al hacer la importacion, se ejecuto todo el archivo 06 lo que hacer imprimir lo que esta haya tmb entre otras cosas que no requeria, 
// por los que es recomendable no ejecutar ningun tipo de codigo cuando se trabaja con importaciones y exportaciones.