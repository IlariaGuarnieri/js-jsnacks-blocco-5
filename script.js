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
  console.log ('la somma del peso delle zucchine è : ' + somma);


  // 2. JSnack 2
// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.

const zucchine2 = [
  {
    varietà: 'verde', 
    peso: 0.15,
    lunghezza: 15,
  },
  {
    varietà: 'romanesca', 
    peso: 0.2,
    lunghezza: 20,
  },
  {
    varietà: 'trombetta', 
    peso: 0.25,
    lunghezza: 30,
  },
  {
    varietà: 'gialla', 
    peso: 0.18,
    lunghezza: 20,
  },
  {
    varietà: 'bianca', 
    peso: 0.16,
    lunghezza: 18,
  },
  {
    varietà: 'costata', 
    peso: 0.15,
    lunghezza: 15,
  },
  {
    varietà: 'tonda', 
    peso: 0.18,
    lunghezza: 17,
  },
  {
    varietà: 'striata', 
    peso: 0.1,
    lunghezza: 10,
  },
  {
    varietà: 'nera', 
    peso: 1.3,
    lunghezza: 12,
  },
  {
    varietà: 'siciliana', 
    peso: 0.22,
    lunghezza: 13,
  },
];

zucchineMenoDi15();


const zucchineMenoDi15 =zucchine2.filter(zucchina =>{
  if(zucchina.lunghezza >= '15'){
    return true
  }
  return false
})

const zucchinePiuDi15 =zucchine2.filter(zucchina =>{
  if(zucchina.lunghezza <= '15'){
    return true
  }
  return false
})

console.log(zucchineMenoDi15)