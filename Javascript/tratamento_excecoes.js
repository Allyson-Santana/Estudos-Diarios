// CUSTOMIZAÇÂO DE ERROS \\
class CustomError extends Error {
    constructor({message, data}) {
        super(message);
        this.data = data;
    }
}


try{
    const name = "Allyson";
    // Menssagens customizadas para teste 
    const myError = new CustomError({
        message:'Custom message on custom error',
        data: {
            type: 'Server error'
        }
    });

    throw myError; 
}catch(error) {
    console.log('Error: ', error.data);
}finally {
    console.log("Keep going");
}


/************* debugging no Browser e no código **************/

/** Faz um backPoint */
// debugger;

/** Alerta mais personalizado */
console.warn('Yellow text with alert'); 

/** Erro mais personalizado */
console.error("error text");

/** Trásreferença da onde está vindo o comando */
console.trace();

/** Permite agrupa e esconder um grupo de console */
console.group();
    console.log("Console normal")
    console.warn('Yellow text with alert'); 
    console.error("error text");
console.groupEnd();

/** Mostrar o tempo de execusão  de 
 * um trecho de codigo ou função*/
console.time('log time');
    console.log('Tempo de execução desse log');
console.timeEnd('log time')


/** Criar um formato de tabela para a exibição  */
console.table(['Allyson Santana', 'Digital Innovation One']);


/** Espera que o primeiro parametro for falso */
console.assert(1 !== 1, 'Ops: falso');


/** O console. permite tbm customizar o log */
console.log('%c styled log', 'color: blue; font-size: 20px');

