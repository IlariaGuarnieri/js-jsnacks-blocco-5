// 1. JSnack 1
// Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.

const zucchine = [
  {
    varietà: 'verde', 
    peso: 0.15,
    lunghezza: '15cm'
  },
  {
    varietà: 'romanesca', 
    peso: 0.2,
    lunghezza: '20cm'
  },
  {
    varietà: 'trombetta', 
    peso: 0.25,
    lunghezza: '30cm'
  },
  {
    varietà: 'gialla', 
    peso: 0.18,
    lunghezza: '20cm'
  },
  {
    varietà: 'bianca', 
    peso: 0.16,
    lunghezza: '18cm'
  },
  {
    varietà: 'costata', 
    peso: 0.15,
    lunghezza: '15cm'
  },
  {
    varietà: 'tonda', 
    peso: 0.18,
    lunghezza: '17cm'
  },
  {
    varietà: 'striata', 
    peso: 0.1,
    lunghezza: '10cm'
  },
  {
    varietà: 'nera', 
    peso: 1.3,
    lunghezza: '19cm'
  },
  {
    varietà: 'siciliana', 
    peso: 0.22,
    lunghezza: '21cm'
  },
];

const somma = zucchine.reduce((acc, zucchina)=>
  acc + zucchina.peso, 0);
  console.log (somma);