
interface AudioPlayer {
    audioVolume: number;
    soungDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    soungDuration: 36,
    song: "Mess",
    details: {
        author: "Ivan Morales",
        year: 2025
    }
}

//Destructuracion ->

const { author } = audioPlayer.details;

//al song le puse el nombre de anotherSong
const { 
    song:anoherSong, 
    soungDuration:duration
    // details:{author} Asi se destructuraria de manera anidad pero es mas enredoso
} = audioPlayer;

console.log('Song: ', anoherSong);
console.log('Duration: ', duration);
console.log('Author: ', author);

