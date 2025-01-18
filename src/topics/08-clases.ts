
export class Person {
    
    //Es el primer metodo que se va llamar al crear una instancia de Person
    //A ESTE tipo de codigo se le llama composicion, viene mejor que la herencia en la mayoria de los casos
    constructor( 
        public firstName: string ,
        public lastName: string ,
        private address: string = 'No address'
    ) {
       
    }
  
    
}

export class Hero {

    //Si te das cuenta le agregue Person al Hero, de esta manera si cambia algo a Person por alguna razon, no tiene por que afectar a Hero
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person
    ) {

    }
}
//Creo una instancia de Person
const tony = new Person('tony', 'stark');

//creo una instancia de Hero y le agrego la instancia de person
const ironman = new Hero('ironMan', 45, 'Tony', tony);


console.log(ironman);
