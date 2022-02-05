const { promisify } = require('util');

function getUser() {
  return new Promise( function(resolve, reject) {
    setTimeout(() => {
        return resolve({
            id: 01,
            name: 'Aladin',
            nasc: new Date()
        })
    }, 1000);
  });
}

function getPhone(idUser) {
   return new Promise(function(resolve, reject) {
    setTimeout(() => {
        return resolve({
            ddd: 13,
            phone: 123456789
        })
    }, 1500);
   })
}

function getAddress(idUser, callback) {
   setTimeout(() => {
       return callback(null,{
           street: 'Dos bobos',
           number: 0
       })
   }, 500);
}

const getAddressAsync = promisify(getAddress);

getUser()
    .then(function(user) {
        return getPhone(user.id)
            .then(function(phone) {
                return {
                    user: user,
                    phone: phone
                }
            })
    })
    .then(function (user_Phone) {
        const address = getAddressAsync(user_Phone.user.id)
        return address.then(function(address) {
            return {
                user: user_Phone.user,
                phone: user_Phone.phone,
                address: address
            }
        })
    })
    .then(function(user_phone_address) {
        console.log('Response:', user_phone_address);
    })
    .catch(function(error){
        console.log(`ERROR ${error}`);
    })