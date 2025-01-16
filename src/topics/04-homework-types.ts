/*
    ===== Código de TypeScript =====

    La tarea fue crear la interface address y superHero con el codigo mostrado
    Nota: como esta todo tipado, al poner el curson por ejemplo en street de la interface address y presionar F2 puedo cambiar el nombre de street en todas partes con solo cambiarlos asi
*/

interface address {
    street: string;
    country: string;
    city: string;
}

interface SuperHero {
    name: string;
    age: number;
    address: address;
    showAddress: () => string;
}


const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        street: 'Main St',
        country: 'USA',
        city: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.city + ', ' + this.address.country;
    }
}


const address = superHeroe.showAddress();
console.log( address );




export {};