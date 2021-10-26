// Creare un array di oggetti di squadre di calcio. 
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array 
// i cui elementi contengono solo nomi e falli subiti
// stampiamo tutto in console.


const squadre = [
    {
        nome: "Milan",
        punti: 0,
        falli: 0
    },
    {
        nome: "Inter",
        punti: 0,
        falli: 0
    },
    {
        nome: "Juve",
        punti: 0,
        falli: 0
    },
    {
        nome: "Napoli",
        punti: 0,
        falli: 0
    },
];

console.log(squadre);

//Genera Numero Random 
function generaNumeroRandom() {
    let nRandom = parseInt(Math.ceil(Math.random() * 20));
    return nRandom;
}
// console.log(generaNumeroRandom());//num random invocato per prova

let nomeFalli = [];
let nomi = "";
let puntiRandom = 0;
for (let i = 0; i < squadre.length; i++) {
    const datiSquadra = squadre[i];
    // const { punti } = datiSquadra;
    datiSquadra.punti = generaNumeroRandom();
    datiSquadra.falli = generaNumeroRandom();
    // console.log(datiSquadra);
    let nomi = datiSquadra.nome;
    let falliSubiti = datiSquadra.falli;
    nomeFalli.push(
        {
            nome: `${nomi}`,
            falli: `${falliSubiti}`
        }
    );
}
console.log(nomeFalli);


