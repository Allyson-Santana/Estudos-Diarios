const axios = require('axios');
const URL = 'https://randomuser.me/api/?results=10';

async function getPeoples () {
    const url = `${URL}`;
    const response = await axios.get(url);
    return response.data;
}
/*************************************************/

/******** Create my controller list "map" ********/
Array.prototype.myMap = function (callback) {
    const newList = [];
    for (let index = 0; index < this.length; index++) {
        const element = callback(this[index], index);
        newList.push(element);
    }
    return newList;
}
/*************************************************/
/******** Create my controller list "filter" ********/
Array.prototype.myFilter = function (callback) {
    const newList = [];
    for (const index in this) {
        const item = this[index];
        const result = callback(item, index, this)
        // 0, "", null, undefined === false
        if(!result) continue;
        newList.push(item)
    }
    return newList;
}
/*************************************************/ 
/******** Create my controller list "filter" ********/
Array.prototype.myReduce = function (callback, valueInitial) {
    let newValue = typeof valueInitial !== undefined ? valueInitial : 0;
    for (let index = 0; index < this.length; index++) {
        newValue = callback(valueInitial, this[index], this)
    }
    return newValue;
}
/*************************************************/ 

async function main() {
    try {
        const result  = await getPeoples('a');        
        let names = [];

        console.time('for');
        for (let i = 0; i <= result.results.length - 1; i++) {
            const people = result.results[i];
            const { title, first, last } = people.name;
            names.push(`${title} ${first} ${last}`);
        }
        console.timeEnd('for');

        console.time('forIn');
        for (const key in result.results) {
            const people = result.results[key];
            const { title, first, last } = people.name;
            names.push(`${title} ${first} ${last}`);
        }
        console.timeEnd('forIn');

        console.time('forOf');
        for (people of result.results) {
            const { title, first, last } = people.name;
            names.push(`${title} ${first} ${last}`);
        }
        console.timeEnd('forOf');

        console.time('forEach');
        result.results.forEach(function (people) {
            const { title, first, last } = people.name;
            names.push(`${title} ${first} ${last}`);
        });
        console.timeEnd('forEach');

        console.time('map');
        names = result.results.map(function (people) {
            const { title, first, last } = people.name;
            return `${title} ${first} ${last}`;
        });
        console.timeEnd('map');

        console.time('myMap');
        names = result.results.myMap(function (people) {
            const { title, first, last } = people.name;
            return `${title} ${first} ${last}`;
        });
        console.timeEnd('myMap');

        console.time('myFilter');
        names = result.results.myFilter(function (people) {
            const { title, first, last } = people.name;
            const name = `${title} ${first} ${last}`;
            const result = name.toLowerCase().indexOf('lars') !== -1;
            return result;
        });
        console.timeEnd('myFilter');

        console.time('reduce');
        names = result.results.reduce(function (accumulation, item) {
           const numberHouse = item.location.street.number;
           return accumulation += numberHouse;
        }, 0);
        console.timeEnd('reduce');

        console.time('myReduce');
        names = result.results.myReduce(function (accumulation, item) {
           const numberHouse = item.location.street.number;
           return accumulation += numberHouse;
        }, 0);
        console.timeEnd('myReduce');
        
    } catch (error) {
        console.error(error);
    }
}
main();



