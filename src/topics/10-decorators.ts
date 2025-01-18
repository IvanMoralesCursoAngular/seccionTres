
// @classDecorator, esta funcion servira como decorador
function classDecorator(
    constructor: any
) {
    return class extends constructor {
        newPropety = ' New Property';
        hello = 'override';
    }
    
}

//agrego el decorador a SuperClass, esto le anade funcionalidad del decorador a la clase como si fuera herencia o composicion
//El error lo quita con un codigo complejo el profe, pero no ocupo saberlo XD
@classDecorator
class SuperClass {
    public myProperty: string = 'abc123';
    print() {
        console.log("hola mundo");
    }

}

//En este punto super class imprime el codigo del decorador
console.log( SuperClass );

//aqui se crea una instancia de superclass
const myClass = new SuperClass();

//se imprime la instancia de superclass en este caso son los datos del decorador y superclass en un mismo objeto
console.log(myClass);

