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
// assegno l'evento click al pulsante recuperato nel dom
btn.addEventListener('click', function () {
    // eseguo un ciclo di 100 iterazioni per creare una griglia 10 x 10
    for (let i = 0; i < 100; i++) {
        // creo il singolo quadrato chiamando la funzione createSquare
        let currentSquare = createSquare();
    }
});