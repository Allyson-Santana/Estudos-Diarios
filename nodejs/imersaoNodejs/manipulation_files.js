const {
	readFile,
	writeFile
} = require('fs');
const {
	promisify
} = require('util');

const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);

class Database {
	constructor() {
		this.name_file = "herois.json";

		this.list()
			.then(response => console.log(response))

		this.create({
			id: "02",
			name: "Luan",
			lastName: "Leite"
		}).then(response => console.log(response))
	}

	async getDateFile() {
		const files = await readFileAsync(this.name_file, 'utf8');
		return JSON.parse(files.toString());
	}

	async writeFileLocal(datas) {
		await writeFileAsync(this.name_file, JSON.stringify(datas))
		return true;
	}

	async create(herois) {
		const datas = await this.getDateFile();
		const id = herois.id <= 2 ? herois.id : Date.now();
		const heroisWithId = {
			id: id,
			...herois
		}
		const dataEnd = [
			...datas,
			{...heroisWithId}
		]

		const result = await this.writeFileLocal(dataEnd);
		
		return result;
	}

	async list(id) {
		const datas = await this.getDateFile();
		const dataFilters = datas.filter(item => (id ? (item.id === id)  : true) );
		return dataFilters;
	}
}

module.exports = new Database;