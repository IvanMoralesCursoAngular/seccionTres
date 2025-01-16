//Interfaces

interface Product {
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
function taxCalculation( options:TaxCalculationOptions ):number[] {
    let total = 0;

    options.products.forEach( product => {
        total += product.price;
    } );

    return [total, total * options.tax ];
}

//agrego productos al carro y le digo cuanto es de impuestos
const shoppingCart = [phone, tablet];
const tax = 0.15;

//aqui en result para hacer el calculo
const result = taxCalculation({
    products: shoppingCart,
    tax
});

//lo imprimo
console.log('Total', result[0]);
console.log('Tax', result[1]);
