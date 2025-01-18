

//<T>: convierte la funcion en una funcion generica
export function whatsMyType<T>( argument: T ):T {

    return argument;
}

//variables genericas con tipo de datos
let amIString = whatsMyType<string>('Hola mundo');
let amINumber = whatsMyType<number>(100);
let amIArray = whatsMyType<number[]>([1,2,3,4,5]);

console.log( amIString.split(' ') );
console.log( amINumber.toFixed() );
console.log( amIArray.join('-') );



//Ejemplo sacado de chatgot para explicar como usar tipo de dato generico

function identidad<T>(valor: T): T {
  return valor;
}

identidad<number>(5);       // ✔️ Devuelve un número
identidad<string>('Hola');  // ✔️ Devuelve una cadena