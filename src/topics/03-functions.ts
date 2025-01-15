
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

// const result:string = addNumbers(1, 2).toString();
// const result2:string = addNumbersArrow(1,2);
// const result3:number = multiply(5);

//De aqui en adelante es otro video

//Cree una interfaz con un metodo como parametro
interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

//Funcion  para aumentar p
const healCharacter = ( character: Character, amount:number ) => {
    character.hp += amount;
}

//Cree el objeto de tipo character
const strider: Character = {
    name: 'strider',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${ this.hp }`);
    }
}


healCharacter(strider, 10);
healCharacter(strider, 30);

strider.showHp();