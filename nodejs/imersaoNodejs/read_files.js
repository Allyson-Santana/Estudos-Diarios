const {
	readFile
} = require('fs');
const {
	promisify
} = require('util');

const readFileAsync = promisify(readFile);

class Database {
	constructor() {
		this.name_file = "herois.json";
	}

	async getDateFile() {
		const files = await readFileAsync(this.name_file, 'utf8');
		return JSON.parse(files.toString());
	}

	whiteFile() {

	}

	async list(id) {
		const datas = await this.getDateFile();
		const dataFilters = datas.filter(item => (id ? (item.id === id) ) : true );
		return dataFilters;
	}
}

module.exports = new Database;