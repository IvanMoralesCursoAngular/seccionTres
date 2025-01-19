

interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Ivan'
}

const passenger2: Passenger = {
    name: 'Jesus',
    children: ['Roberto', 'Maria']
}


const printChildren = ( {name, children}: Passenger ) => {
    
    // El ? en children?.lenght significa que si no existe no haga el .lenght y le de el valor que tiene, undefined ya que no existe
    //Si no tuviera el ? y no tiene children me saldria un error de javascript
    //El || dice es por si no tiene hijos regrese 0
    const howManyChildren = children?.length || 0;

    console.log(name, howManyChildren);
    
}

printChildren(passenger2);