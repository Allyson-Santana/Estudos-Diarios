// CallBack e Promises \\

// Uma promises pode ter três status
    // Pending -- Em execução
    // Fullfilled -- Terminou de executa
    // Rejected -- caso haja um erro

    const doSomethingPromise = () => new Promise( (resolve, reject) => {
        setTimeout(() => {  
            resolve('First data');
        }, 1000);
    } );
    const doOtherThingPromise = () => new Promise( (resolve, resect) => {
        setTimeout(() => {
            resolve('Second data');
        }, 1000);
    } );
    
    // Abaixo irá executar de forma paralelo \\
    // esse executa as duas ao mesmo tempo e aguarda a responsta dos dois
    Promise.all([doSomethingPromise(), doOtherThingPromise()]).then(data3 => {
        console.log(data3[0].split(''));
        console.log(data3[1].split(''));
        console.log("________________________________");
    }).catch(error => console.log(error));  
    
    // Abaixo irá executar a que for executada primeiro  é a que vai retornar\\
    Promise.race([doOtherThingPromise(), doSomethingPromise() ]).then(data4 => {
        console.log(data4);
        console.log("________________________________");
    });
    
    // Abaxo irá executa de forma sequencial | uma após a outra \\
    doSomethingPromise()
        .then(data => {
            console.log( data.split('') );
            return doOtherThingPromise();
        })
        .then(data2 => console.log( data2.split('') ))
        .catch(error => console.log("opssss",error));
    
    
    
    
    // Fetch, Async/Await e EventEmitter \\
    
    const getPeople = async () => {
        // Por padrão o segundo paraetro do FETCH é uma requisição GET
        const response = await fetch("https://randomuser.me/api/?results=10");
        return response.json();
    }
    
    setTimeout(() => {
        getPeople().then(data5 => {
            console.log("________________________________");
            console.log(data5);
        })
        .catch(error => console.log(error));
    }, 2500);
    