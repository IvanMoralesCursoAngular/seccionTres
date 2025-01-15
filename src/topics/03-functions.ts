
//Es buena practica tipar todo, variables, parametros, funciones de retorno, etc.

function addNumbers( a:number, b:number ):number {
    return a+b;
}

//Aqui use back tips para concatenar una suma en el return ya que esta funcion retorna un string
const addNumbersArrow = ( a:number, b:number ):string => {
    return `${a+b}`;
}

//Aqui secondNumber lo deje opcional y base igual pero con un valor por defecto
function multiply( firstNumber:number, secondNumber?:number, base:number = 2 ) {
    return firstNumber * base;
}

const result:string = addNumbers(1, 2).toString();
const result2:string = addNumbersArrow(1,2);
const result3:number = multiply(5);

console.log({result, result2, result3});
