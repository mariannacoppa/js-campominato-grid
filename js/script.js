// definisco la funzione che crea i quadrati della griglia
function createSquare () {
    // creazione del tag html che diventerà il singolo quadrato della griglia
    let currentElement = document.createElement('div');
    // assegnazione della classe square all'elemento creato
    currentElement.classList.add('square');
    // restituisco il quadrato contenuto nella variabile currentElement
    return currentElement;
}
// recupero il tag button
const btn = document.getElementById('start');
// recupero il tag che conterrà la griglia
const grid = document.getElementById('grid');