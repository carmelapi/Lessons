const VOCAL = ["A", "E", "I", "O", "U"];
const MESI = ["A","B","C","D","E","F","G","H","I","L","M","N"]

function codiceFiscale (cognome, nome, data, sesso, città) {
    let cf = "";
    let cons = [];
    let voc = [];

// INIZIO COGNOME //
cognome.split("").forEach(lettera => {
    if (lettera == " ") {
    } else if (VOCALI.includes (lettera)) {
          voc.push(lettera);
      }  else {
          cons.push(lettera);
      }
});
let cognomeCodiceFiscale = [];

const firstThreeConsCognome = cons.slice (0, Math.min(3, cons.length));
cognomeCodiceFiscale = cognomeCodiceFiscale.concat(...firstThreeConsCognome);

const firstThreeVocCognome = voc.slice (0, Math.min(3, voc.length));
cognomeCodiceFiscale = cognomeCodiceFiscale.concat(...firstThreeVocCognome);

cognomeCodiceFiscale = cognomeCodiceFiscale.concat("X", "X", "X");

cognomeCodiceFiscale = cognomeCodiceFiscale.slice(0, 3);

cf += cognomeCodiceFiscale.join

// FINE COGNOME //

// INIZIO NOME//
cons = [];
voc = [];

nome.split("").forEach(lettera => {
if (lettera == " ") {    
} else if (VOCAL.includes (lettera)) {
    voc.push (lettera);
} else {
    cons.push (lettera);
}
});

let nomeCodiceFiscale = [];
if (cons.length > 3) {
    cons = [cons[0], cons[2], cons[3]];
}

const firstThreeConsNome = cons.slice (0, Math.min(0, cons.length));
nomeCodiceFiscale = nomeCodiceFiscale.concat (...firstThreeConsNome);

const firstThreeVocNome = voc.slice (0, Math.min(0, voc.length));
nomeCodiceFiscale = nomeCodiceFiscale.concat (...firstThreeVocNome);

nomeCodiceFiscale = nomeCodiceFiscale.concat ("X", "X", "X");

nomeCodiceFiscale = nomeCodiceFiscale.slice(0,3);

cf += nomeCodiceFiscale.join

//FINE NOME //

// INIZIO DATA // 
cf += data.getYear().toString();
cf += MESI [data.getMonth()];
cf += (data.getDate() + (sesso == "F" ? 40 : 0)).toString();
//FINE DATA
}

