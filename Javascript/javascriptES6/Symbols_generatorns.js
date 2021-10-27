
// Gerar um intentificador *UNICO* \\

const uniqueId = Symbol('Hello');
const obj = {
    [uniqueId]: "Hello World"
}
console.log(uniqueId);

console.log(Object.keys(obj)); // retonar as props
console.log(Object.getOwnPropertySymbols(obj)); // retorna as props

// Well Known Simbols \\

// Symbol.iterator
// Symbol.species
// Symbol.toStringTag

// Inteface para consumir passo a passoa uma estrutura dde dados \\
const arrSymbols = [1,2,3,4];
const it = arrSymbols[Symbol.iterator]();
console.log( it.next() );
console.log( it.next() );
console.log( it.next() );
console.log( it.next() );
console.log( it.next() );

console.log("_________________________");

const objSymbols = {
    values: [1,2,3,4],
    [Symbol.iterator]() {
        let i = 0;
        return {
            next: () => { 
                i++;
                return { 
                    value: this.values[i - 1],
                    done: i > this.values.length
                }
            }
        }
    }
}
const arrObjSymbols = [...objSymbols];
console.log(arrObjSymbols);



// Generatorns \\

function* naturalNumbers(){
    let number = 0;
    while (true) {
        yield number;
        number++;
    }
}
const itNumbers = naturalNumbers();
console.log( itNumbers.next() );
console.log( itNumbers.next() );
console.log( itNumbers.next() );

// Usando com generator Ajuda ver passo a passo a iteração \\

const objSymbolsGenerator = {
    values: [1,2,3,4],
    *[Symbol.iterator]() {
        for(let i = 0; i < this.values.length; i++) {
            yield this.values[i];
        }
    }
} //Uma forma de construir iteradores
for (let value of objSymbolsGenerator) {
    console.log(value);
}
