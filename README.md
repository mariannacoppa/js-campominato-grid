GRIGLIA CAMPO MINATO
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emette un messaggio in console con il numero della cella cliccata.
Scomponete sempre il problema in sotto problemi, senza andare troppo nel dettaglio questa volta. Andate nel dettaglio solo quando non riuscite ad implementare in codice qualcosa.
Numero di push: 15 circa
*Bonus* (farlo in una cartella bonus)
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

Pseudocodice
0 Clicco sul pulsante per mostrare la griglia
0.5 preventivamente svuoto il tag predisposto al contenimento della gliglia da tutti gli elementi interni. 
1 creo i tag html che contengono il pulsante e la griglia
2 creo classi css per la griglia e i suoi elementi interni
3 recupero il pulsante dal dom
4 recupero il tag html che conterrà la griglia
5 assegno l'evento click al pulsante recuperato nel dom
6 creo un ciclo di 100 iterazioni per creare una griglia 10 x 10
7 aggiungo l'evento cick al quadrato creato per cambiarne il colore
7.1 SE il valore del'innerText è pari, aggiungo/tolgo la classe con sfondo azzurro e compare messaggio in console
7.2 ALTRIMENTI quella con sfondo di default
8 assegno al quadrato un numero progressivo
9 appendo il quadrato nella griglia