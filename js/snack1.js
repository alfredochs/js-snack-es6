// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

const biciclette = [
    {
        nome: "mountain",
        peso: 15
    },
    {
        nome: "città",
        peso: 10
    },
    {
        nome: "corsa",
        peso: 6
    },
    {
        nome: "ibrida",
        peso: 20
    },
    {
        nome: "bmx",
        peso: 12
    }
];

function pesoMinore(arrayDiOggetti) {
    let arrayPeso = [];
    for (let i = 0; i < arrayDiOggetti.length; i++) {
        const datiBici = arrayDiOggetti[i];
        const { peso } = datiBici;
        console.log(datiBici);
        arrayPeso.push(peso);
        minoreAmaggiore(arrayPeso);
    }
    console.log(arrayPeso);
    const piuLeggera = arrayPeso[0];
    // console.log(piuLeggera);
    for (let j = 0; j < arrayDiOggetti.length; j++) {
        const datiBici = arrayDiOggetti[j];
        if (datiBici.peso === piuLeggera) {
            return datiBici;
        }
    }
}
const datiBiciPiuLeggera = pesoMinore(biciclette);
console.log(`La bici piu leggera è di tipo ${datiBiciPiuLeggera.nome} con peso di ${datiBiciPiuLeggera.peso} kg`);

function minoreAmaggiore(nomeArray) {
    nomeArray.sort((a, b) => a - b);
    return nomeArray;
}


