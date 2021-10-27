// arrow function \\
const arrFunc = () => {
    console.log("function call");
    console.log();
}
arrFunc();


// Default function Arguments \\

function randomNumber() {
    return Math.random() * 10;   
}
function multNumber(a = 2, b = randomNumber()) { 
    return a * b;
}
console.log(multNumber());
console.log(multNumber(3));


// Enhanced Object Literals \\

const obj = {
    sum(a,b){
        return a + b;
    }
}
console.log(obj.sum(5,5));

const propName = "name";
const obj2 = {
    [propName]: "Allyson"
};
console.log(obj2);

//  Rest Operator e Spred Operator \\

function sum(a, b) {
    console.log(arguments); //retorna todos os argumentos da function
    return a + b;
}
sum(2,2);



// Rest Operator \\
// trás a lista de argumentos e tranforma em array os argumentos recebidos
function sum_rest(a,...args) { 
    return args.reduce( (acc, value) => acc + value, 0 ) + a;
}
console.log(sum_rest(2,5,5,10,15,5));


// Spred Operator \\
// Tem a função de quebra os itens (tranformando em arrys) 
// e repassar para alguém, seja uma variavel ou função.
const str = 'Digital Innovation One';
function logArgs() {
    console.log(arguments);
}
logArgs(...str);
const str2 = ['estude',...str];
console.log(str2);
// exemple two
const objSpred = {
    propNumber: 123
};
const objSpred2 = {
    ...objSpred,
    propText: 'Hello'
}
const objSpred2Clone = {...objSpred2, 
    subObj: {...objSpred.newPropSubObj} };
objSpred2Clone.subObj.newPropSubObj = "NOVO PROP COM VALOR";
console.log(objSpred2Clone);



// Destructuring Assingment \\

// With arrays
const [apple,banana,orange,[tomato]] = ['Apple','Banana','Orange',['Tomato']];
const arrFruits = ['peach','Cherry',['melon']];
console.log(apple,[tomato]);
const [p,c,[m]] = arrFruits;
console.log(p +' '+ [m]);

// With objects
const objPeople = {
    name: 'Allyson',
    lastName: 'santana',
    props: {
        age: 18
    },
    favoriteColors: ['Yellow','blue']
}
const {
    name, // o nome da prop é o mesmo da nova variavel
    lastName: name2, // Customizando o nome da variavel
    props: {age}, // pegando valor dentro de outro obj
    favoriteColors: [color1,color2] // pegando valor dentro de um array
} = objPeople;
console.log(name +"\n"+name2 +"\n"+ age +"\n"+color1);

const arrObj = [{nameFruit: 'apple', type: 'fruits'}];
const [{nameFruit}] = arrObj;
console.log(nameFruit);

const arrValues = [5,5,5];
function sumValuesArr([a,b] = [0,0]){ // default function arguments
    return a + b;
}
function sumValuesObj({a,b}){ // default function arguments
    return a + b;
}
// vai pega somente as duas posições, pois a função so contém a,b
console.log(sumValuesArr(arrValues));
console.log(sumValuesObj({a:5,b:5}));




