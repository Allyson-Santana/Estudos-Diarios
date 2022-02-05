
function getUser(callback) {
    setTimeout(() => {
        return callback(null, {
            id: 01,
            name: 'Aladin',
            nasc: new Date()
        })
    }, 1000);
}

function getPhone(idUser, callback) {
    setTimeout(() => {
        return callback(null, {
            ddd: 13,
            phone: 123456789
        })
    }, 1500);
}

function getAddress(idUser, callback) {
   setTimeout(() => {
       return callback(null,{
           street: 'Dos bobos',
           number: 0
       })
   }, 500);
}

getUser(function resolveUser(error, user) {
    if(error) return console.error(`USER ERROR: ${error}`);

    getPhone(user.id, function resolvePhome(error, phone) {
        if(error) return console.log(`PHONE ERROR: ${error}`);

        getAddress(user.id, function resolveAddress(error, address) {
            if(error) return console.log(`ADDRESS ERROR: ${error}`);

            console.log(`
                Name: ${user.name},
                Address: ${address.street}, ${address.number},
                Phone: (${phone.ddd} ${phone.phone})
            `);

        });

    });

});