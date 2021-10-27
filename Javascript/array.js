
const arr = [1,2,3,4,5];
arr.splice(2); //retira todos os elementos a partir de uma posição
console.log(arr);
//Adiciona um ou mais elementos a partir de uma posição
// alterar o array
arr.splice(0,0, 'first', 'second'); 

console.log(arr);
console.log("__________________");

const MyConst = ["text1", "text2", "text3"];

const latinhas = ["Coca-cola", "Sprit", "Tubaina"];
const latinhas2 = ["Koka-kola", "Fanta Uva"];
const latinhasConcat = latinhas.concat(latinhas2); // concatena arrays
//typeof latinhasConcat; // retorna o tipo da variavel
//delete latinhasConcat; // deleta algo

const novaLatinhas = [...latinhas, "Fanta"]; // ...latinhas: nome disso é Spread
console.log(novaLatinhas);
console.log(novaLatinhas.slice(0, 2));
 
novaLatinhas.pop(); // tira do final
novaLatinhas.shift(); // tira do começo
console.log(novaLatinhas);

novaLatinhas.push("Fanta"); //acresenta no final
novaLatinhas.unshift("Coca-cola "); // acresenta no começo
console.log(novaLatinhas.reverse());

//para cada elemento do array façar....
latinhas.forEach( (latinha, key, arr) => console.log(key, latinha.toLowerCase(), arr) );

console.log("__________________");

// *MAP
/**
 * Use map() quando: é preciso traduzir/mapear todos os elementos 
 * em um array para outro conjunto de valores.
 */
const celsius = [ 0, 5, 7, 19, 34, 65, 4 ];
const toFarenheit = celsius.map( (item) => (item * 9/5) + 32);
//ordena o resultado | para acrsenta  um " - " separando cada elemento | converte para string
console.log(toFarenheit.sort().join(' - ').toString().toUpperCase());

console.log("__________________");

// *FILTER
/**
 * Use filter() quando: é preciso remover elementos indesejados 
 * com base em alguma(s) condição(ões).
 */
const numbers = [1,45,65,08,1,2,2,2,4,8,4,00];
const uniqueNumbers = numbers.filter( (item, key, arr) => arr.indexOf(item) == key );
console.log(uniqueNumbers);

console.log("__________________");

// *REDUCE
/**
 * Use reduce() quando: é preciso encontrar um valor cumulativo ou concatenado 
 * com base em elementos de todo o array.
 */
const rockets = [
    { country: "Russia", launches: 32 },
    { country: "Brasil", launches: 75 },
    { country: "China", launches: 81 },
    { country: "Alemanha", launches: 09 },
    { country: "Japão", launches: 16 }
];
const totalLauches = rockets.reduce( (prevItem, item) => prevItem + item.launches, 0 );
console.log(totalLauches);

console.log("__________________");

// *EVERY
/**
 * Use every() quando: é preciso testar se todos os elementos 
 * de um array passam por um teste específico (que é uma função). 
 * Em outras palavras, use every() para testar se se tudo dentro de um 
 * array corresponde a um critério determinado.
 */
const person = [
    { id: 110, name: "Allyson" , age: 19},
    { id: 111, name: "Leonado" , age: 16},
    { id: 121, name: "Wagnerr" , age: 38},
    { id: 141, name: "Iracema" , age: 76},
    { id: 112, name: "Princesa" , age: 11},
]
const validated = person.every( item => item.age >= 18 );
console.log(validated);

console.log("__________________");

// *SOME
/*
    *Use find() quando: é preciso procurar/verificar por um valor 
    *dentro de um array/objeto. Em outras palavras, use find() para 
    *criar um novo array/objeto baseado na função-teste fornecida.
*/
const team = [
    { id: 110, name: "Topper Marley" , pilot: false},
    { id: 120, name: "Ramada Thompson" , pilot: false},
    { id: 118, name: "Pete Thompson" , pilot: false},
    { id: 115, name: "Kowalski" , pilot: true}
];
const TemPiloto = team.some( item => item.pilot );
console.log(TemPiloto);

console.log("__________________");

// *FIND
/**
 * Use find() quando: é preciso procurar/verificar por um valor 
 * dentro de um array/objeto. Em outras palavras, use find() para criar 
 * um novo array/objeto baseado na função-teste fornecida.
 */
const pizzas = ["Mussarela", "Calabresa", "Marguerita", "Presunto"];
const foundPizza = pizzas.find( p => p.startsWith("M") );
console.log(foundPizza);

const fruits = [
    {name: "Maça", quatity: 31 },
    {name: "Banana", quatity: 16 },
    {name: "Pera", quatity: 31 },
    {name: "kiwi", quatity: 8 }
];
const foundFruits = fruits.find( f => f.name === "Banana" );
console.log(foundFruits);

console.log("__________________");

// *INCLUDES
/**
 * Use includes() quando: é preciso saber se um array/objeto 
 * possui determinado valor/elemento.
 */
const list = [1, 8, 12, NaN, "LALAU", "IRINEU", "MONGOU"];
console.log( list.includes("MONGOU") );

const animals = [
    { id: 110, name: "macaco" , age: 19},
    { id: 111, name: "Humano" , age: 16},
    { id: 121, name: "cachorrrrroooo" , age: 38},
    { id: 141, name: "coelinho" , age: 76},
    { id: 112, name: "peixe" , age: 11},
];
const fliterAnimals = animals.filter(animal => animal.name.includes("ac"));
console.log(fliterAnimals);

console.log("___________________________________");

// *API REAL 
/**
 * Através do consumo de uma API, será mostrado como manipular dados e 
 * realizar operações diversas através de funções de array JavaScript.
*/

async function getPeople() {
    const response = await fetch("https://randomuser.me/api/?results=10");
    return response.json();
}

getPeople().then( data => {
    console.log('pegando somente usuario Feminonos');
    const people  = data.results;
    const filterFemale = people.filter( item => item.gender == "female" );
    console.log(filterFemale);
})

getPeople().then( data => {
    console.log('Filtrando e dando push nos valores requeridos');
    const result  = data.results.filter( item => item.dob.age >= 50 );
    let people = [];
    for( let p of result ){
        people.push( {
            "Nome": `${p.name.first} ${p.name.last}` ,
            "sexo": p.gender,
            "idade": p.dob.age
        } );
    }
    console.table(people);
})

/*
https://www.youtube.com/watch?v=NfHVPEzo5Ik

https://www.youtube.com/watch?v=0haWgdHFuJw

https://www.youtube.com/watch?v=W3f6hiTLipc
*/

