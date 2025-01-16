//Interfaces

export interface Product {
    description: string;
    price: number;
}

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

//dos instancias de product

const phone: Product = {
    description: 'Nokia A1',
    price: 150.0 
}

const tablet: Product = {
    description: "ipad air",
    price: 250.0
}


//funcion para retornar el calculo de los tax
export function taxCalculation( options:TaxCalculationOptions ):[number, number] {
    let total = 0;

    const { tax, products } = options;

    products.forEach( ({ price }) => {
        total += price;
    } );

    return [total, total * tax ];
}

//agrego productos al carro y le digo cuanto es de impuestos
const shoppingCart = [phone, tablet];
const tax = 0.15;

//aqui en result para hacer el calculo
const [ total, taxTotal ] = taxCalculation({
    products: shoppingCart,
    tax
});

//lo imprimo
console.log('Total', total);
console.log('Tax', taxTotal);
