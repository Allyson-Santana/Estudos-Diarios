class Heroi {
    constructor({id, name, lasname}) {
        this.id = id;
        this.name =  name;
        this.lasname =  lasname;
    }
}


const Commander = require('commander');
const Database = require('./manipulation_files');

async function main() {
    
    Commander
        .version('v1')
        .option('-id, --id [value]', "index(id) do Heroi")
        .option('-n, --name [value]', "Nome do Heroi")
        .option('-p, --lasname [value]', "Poder do Heroi")

        .option('-c, --create', "Cadastrar Heroi")
        .option('-l, --list', "listar Heroi")
        .option('-u, --update [value]', "atualizar Heroi")
        .option('-d, --destroy', "deletar Heroi")
        .parse(process.argv)

    const heroi = new Heroi(Commander); 

    try {
        if(Commander.create) {
            const response = await Database.create(heroi);
            if(!response) {
                console.error("Heroi não foi cadastrado");
                return;
            }
            console.log("Heroi cadastrado com sucesso.");
        }

        if(Commander.list) {
            const response = await Database.list();
            console.log(response);
            return;
        }

        if(Commander.update) {
            
            const response = await Database.update(heroi.id, {
                ...heroi
            });
            console.log(response);
            return;
        }

        if(Commander.update) {
            const idAsUpdate = parseInt(Commander.update);
            const data = JSON.stringify(heroi);
            const dataAsUpdate = JSON.parse(data);

            const response = await Database.destroy(idAsUpdate, dataAsUpdate);
            if(!response) {
                console.error("Não foi possivel atualizar o heroi"); 
                return;
            }
            console.log("Heroi atualizado...");
        }

    } catch (error) {
        console.error("Error: ", error);
    }
}


main().then();