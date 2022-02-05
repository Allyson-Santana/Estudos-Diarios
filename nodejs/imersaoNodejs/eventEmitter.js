const EventEmmiter = require('events');

class MyEmmiter extends EventEmmiter {

}

const emmiter = new MyEmmiter();
const eventClick = 'user:click';

emmiter.on(eventClick, function (click) {
    console.log("Click User", click);
});


const stdin = process.openStdin();

stdin.addListener('data', function(value) {
    console.log("Você digitou: "+ value.toString().trim());
});