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

(async function main() {
    try {
        console.time('promise-time');
        const user = await getUser();
        const resolvePromise = await Promise.all([
            getPhone(user.id),
            getAddressAsync(user.id)
        ]);

        const photo = resolvePromise[0];
        const address = resolvePromise[1];

        console.log(user, photo, address);
        console.timeEnd('promise-time');
    } catch (error) {
        console.error(error);
    }
})()