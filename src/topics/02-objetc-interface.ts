
//Arreglo
let skills: string[] = ['Bash','Counter','Healing'];

//Interface, al compilar como javascript esto es 0 lineas de codigo, lo uso para tipar algo
interface Character {
    name: string,
    hp: number,
    skills: string[],
    homeTown?: string // el signo significa que tmb puede ser undifined
};

// constante de tipo Character creada arriba
const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash','Counter']
};

strider.homeTown = 'Rivendell';

console.log(strider);
