// Comandos básicos javascript
var imagem = document.getElementById("imagem");
imagem.src = "programing.jpg";
imagem.alt = "Imagem não encontrada";
imagem.style.height = "150px";

imagem.removeAttribute("src");

var newtag = document.createElement("h2");
newtag.innerHTML = "EAE H2";

var block1 = document.querySelector(".block1");
block1.appendChild(newtag);
block1.removeChild(newtag);

console.log( document.body.childNodes );

var btnAdd = document.getElementById("btnAdd");
btnAdd.addEventListener("click", function() {
    document.getElementById("p").setAttribute("class", "textColor");
						// OU \\						
	document.querySelector("p").classList.add("textColor");
});
var btnRemove = document.getElementById("btnRemove");
btnRemove.addEventListener("click", function() {
    document.getElementById("p").removeAttribute("class");
						// OU \\						
	document.querySelector("p").classList.remove("class");
});
var btnGet = document.getElementById("btnGet");
btnGet.addEventListener("click", function() {
    let value = document.getElementById("p").getAttribute("class");
    document.getElementById("valueText").innerHTML = value;
});

console.log("__________________");
let list = [
    "Maça", "Morango", "Manga",
    {memoria: "ram de 8gb", hd: "HDSSD de 50gb"},
    ['Notebook Asus', "Modelo Mil grau"]
];
console.log(list.length);
console.log(list[2]);
console.log(list[3].memoria);
console.log(list[4][1]);

console.log("__________________");
const person = {
    name: "Allyson",
    old: 19,
    student: true,
    pets: ["Cachorro", "gato", "Coelho"],
    vehicles: {
        car: {
            color: "red",
            plate: "QGT714"
        }
    },
    walk: function(km){
      value = person.name+" andou: "+km+"kms";
      return value;
    }
};
person.name = "João";
person.pets[2] = "Macaco";
console.log(person.name);
console.log(person.old);
console.log(person.student);
console.log(person.pets[2]);
console.log(person.vehicles.car);
console.log(person.walk(15));

console.log("__________________");
var x = 5;
var y = 2;
console.log(x % y);
console.log(x %2 );
console.log(y %2 );

console.log("__________________");
let paises = document.getElementsByClassName("pais")
for (let i = 0; i < paises.length; i++) {
   console.log(paises[i].innerHTML);
}

console.log("__________________");
// Ele executa todas as propriedades do array
let fruits = {name: "Banana", preco: 6.89, unidade: 15};
for (const key in fruits) {
    console.log(key+": "+fruits[key]);
}

console.log("__________________");
// Ele executa somente propriedade numeradas
let hardware = ["Notebook", "mouse", "Teclado", "Celular"];
for (const key of hardware) {
    console.log(key);
}

/** Funções de STRING 
 * split('x') - Retorna um array quebrando a string por um delimitador
 * replace('Text', 'Texts') - Busca por um valor e substitui por outro
 * slice(0,-1) - Retonar a fatia de um valor
 * substr(0,2) - Retorna any caracteres a partir de uma posição
 */

/** Funcões de numeros
 * toString() - Transforma numero em string
 * toFixed(2) - Fixa a quantidade de casas decimais a exibir
 * parseFloat('12.22') - converte em float
 * parseInt('12.22') - converte em inteiro
*/

/**
 * Object.keys(objeto) - retorna as chaves do object
 * Object.values(objeto) - retorna os valores do object
 * Object.entries(objeto) - retorna um array de array contendo [nome_prop, valor_prop]
 * Object.assign({}, objeto, {prop: value}) - Adiciona uma nova prop em um object sem altera a origem
 * Object.freeze(objeto) - congelo o objeto, não deixar altera|deleta|criar nada nele
 * Object.seal(objeto) - Permite apenas altera valores das props
*/



