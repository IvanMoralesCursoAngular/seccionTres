
export class Person {
    // public name: string;
    // private address: string;
    
    //Es el primer metodo que se va llamar al crear una instancia de Person
    constructor( 
        public name: string ,
        private address: string
    ) {
        // this.name = 'Ivan'
        // this.address = 'San Jose, CA.'
    }
    //AQUI lo que se hizo fue refactorizar el codigo, menos lineas, el mismo resultado y funcionamiento
    
}

//Cree la clase Hero para que aplique herencia de Person, super( los que vienen de person los pongo aqui, los tengo que agregar al constructor)
export class Hero extends Person {
    
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        // address: string
    ) {
        // super(realName, address);
        super(realName, 'San Jose, CA.');
    }
}




//aqui creo una instancia de persona llamada ironman (Que se note que esta fuera del scope de la clase Person)
// const ironman = new Hero('ironMan', 45, 'Tony', 'San Jose, CA.');
const ironman = new Hero('ironMan', 45, 'Tony');

//Aqui si pongo ironman.address, si me lo permite pero no me aparece 
//y si lo puedo poner y si se va imprimir, pero no esta bien que quede asi
console.log(ironman);
